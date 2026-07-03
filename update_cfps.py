import json, sys, subprocess
from datetime import datetime, timedelta

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "requests", "beautifulsoup4"])
    import requests
    from bs4 import BeautifulSoup

TOPICS = {
    "victorian": "Victorian",
    "romantic": "Romantic",
    "renaissance": "Renaissance",
    "eighteenth-century": "Eighteenth Century",
    "medieval": "Medieval",
    "modernist-studies": "Modernist Studies",
    "twentieth-century-and-beyond": "Twentieth Century and Beyond",
    "american": "American",
    "postcolonial": "Postcolonial",
    "world-literatures-and-indigenous": "World Literatures",
    "ecocriticism-and-environmental": "Ecocriticism",
    "gender-studies-and-sexuality": "Gender Studies",
    "poetry": "Poetry",
    "theory": "Theory",
    "cultural-studies": "Cultural Studies",
    "theatre-and-performance-studies": "Theatre and Performance",
    "translation-studies": "Translation Studies",
}

JOURNAL_KW = ['journal', 'special issue']
VOLUME_KW = ['volume', 'collection', 'anthology']
CONF_KW = ['conference', 'symposium', 'congress']

def fetch_topic(slug, name, seen):
    url = f"https://call-for-papers.sas.upenn.edu/category/{slug}"
    try:
        r = requests.get(url, timeout=15, headers={'User-Agent': 'Mozilla/5.0'})
        r.raise_for_status()
    except Exception as e:
        print(f"  Skip {slug}: {e}")
        return []

    soup = BeautifulSoup(r.text, 'html.parser')
    results = []

    for link in soup.find_all('a', href=True):
        href = link['href']
        if '/node/' not in href and '/cfp/' not in href:
            continue
        title = link.get_text(strip=True)
        if len(title) < 10:
            continue
        full = href if href.startswith('http') else 'https://call-for-papers.sas.upenn.edu' + href
        if full in seen:
            continue
        seen.add(full)

        t = title.lower()
        cfp_type = 'other'
        if any(k in t for k in JOURNAL_KW):
            cfp_type = 'journal'
        elif any(k in t for k in VOLUME_KW):
            cfp_type = 'volume'
        elif any(k in t for k in CONF_KW):
            cfp_type = 'conference'

        deadline = (datetime.now() + timedelta(days=120)).strftime('%Y-%m-%d')

        results.append({
            'title': title,
            'deadline': deadline,
            'url': full,
            'type': cfp_type,
            'topic': name,
        })
        if len(results) >= 8:
            break

    print(f"  {name}: {len(results)}")
    return results

def update_file(cfps):
    if not cfps:
        print("Nothing to add")
        return
    
    with open('src/data/cfps.ts', 'r') as f:
        content = f.read()

    entries = []
    for i, c in enumerate(cfps, start=200):
        e = '''{{
    id: "auto-{i}",
    title: "{title}",
    organizer: "Penn CFP",
    deadline: "{deadline}",
    url: "{url}",
    description: "{title}",
    tags: [],
    type: "{type}",
    topic: "{topic}",
    source: "manual",
  }}'''.format(
            i=i,
            title=c['title'].replace('"', '\\"'),
            deadline=c['deadline'],
            url=c['url'],
            type=c['type'],
            topic=c['topic'],
        )
        entries.append(e)

    insert = content.rfind('];')
    new_content = content[:insert] + ',\n' + ',\n'.join(entries) + ',\n' + content[insert:]
    
    with open('src/data/cfps.ts', 'w') as f:
        f.write(new_content)
    
    print(f"Added {len(cfps)} CFPs")

if __name__ == '__main__':
    print("=" * 50)
    print("For Literature - Topic-Based Update")
    print("=" * 50)

    all_cfps = []
    seen = set()

    for slug, name in TOPICS.items():
        cfps = fetch_topic(slug, name, seen)
        all_cfps.extend(cfps)

    update_file(all_cfps)
    print(f"\nTotal: {len(all_cfps)} CFPs")
    print("Done!")
