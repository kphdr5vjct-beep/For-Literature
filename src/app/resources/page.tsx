"use client";
import { useState } from "react";

const resources = [
    // Databases
  { title: "MLA International Bibliography", url: "https://www.mla.org/Publications/MLA-International-Bibliography", description: "The most comprehensive bibliography of scholarly work on literature and linguistics. Essential for any literary research.", category: "Database", access: "Subscription" },
  { title: "JSTOR", url: "https://www.jstor.org", description: "Digital library with thousands of academic journals and books in the humanities. Many articles freely accessible.", category: "Database", access: "Partial Free" },
  { title: "Project MUSE", url: "https://muse.jhu.edu", description: "Humanities journals and books from leading university presses.", category: "Database", access: "Subscription" },
  { title: "Oxford Reference", url: "https://www.oxfordreference.com", description: "Authoritative encyclopedias for literary studies, including the Oxford Companion to English Literature.", category: "Database", access: "Subscription" },
  { title: "Literature Online (LION)", url: "https://literature.proquest.com", description: "Proquest's comprehensive database of English and American literature, with full texts and criticism.", category: "Database", access: "Subscription" },
  { title: "Annual Bibliography of English Language and Literature (ABELL)", url: "https://www.mhra.org.uk/publications/abell", description: "MHRA's annual bibliography covering English language and literature scholarship worldwide.", category: "Database", access: "Subscription" },
  { title: "Google Scholar", url: "https://scholar.google.com", description: "Free search engine for scholarly literature across disciplines. Useful for finding citations and open-access versions of articles.", category: "Database", access: "Free" },
  // Journals — General
  { title: "PMLA", url: "https://www.mla.org/Publications/Journals/PMLA", description: "Flagship journal of the Modern Language Association. One of the most prestigious venues in literary studies.", category: "Journal", access: "Subscription" },
  { title: "ELH (English Literary History)", url: "https://www.press.jhu.edu/journals/elh", description: "One of the oldest and most prestigious journals of English literary history, spanning all periods.", category: "Journal", access: "Subscription" },
  { title: "New Literary History", url: "https://www.press.jhu.edu/journals/new-literary-history", description: "Focuses on questions of theory, method, interpretation, and literary history.", category: "Journal", access: "Subscription" },
  { title: "Critical Inquiry", url: "https://www.journals.uchicago.edu/toc/ci/current", description: "Leading interdisciplinary journal publishing work in criticism and theory across the arts and humanities.", category: "Journal", access: "Subscription" },
  { title: "Representations", url: "https://online.ucpress.edu/representations", description: "Influential journal from UC Berkeley associated with New Historicism, covering literature, history, and culture.", category: "Journal", access: "Subscription" },
  { title: "Novel: A Forum on Fiction", url: "https://www.dukeupress.edu/novel", description: "Leading journal devoted to the study of the novel in all languages and periods.", category: "Journal", access: "Subscription" },
  { title: "Narrative", url: "https://www.narrativejournal.org", description: "Official journal of the International Society for the Study of Narrative, covering narratology across media.", category: "Journal", access: "Subscription" },
  { title: "Poetics Today", url: "https://www.dukeupress.edu/poetics-today", description: "International journal for literary theory and semiotics, published by Duke UP.", category: "Journal", access: "Subscription" },
  { title: "Literature and History", url: "https://journals.sagepub.com/home/lah", description: "Explores the relationship between literary texts and their historical contexts.", category: "Journal", access: "Subscription" },
  // Journals — Period & Field Specific
  { title: "Victorian Studies", url: "https://www.indiana.edu/~vict/", description: "Premier journal for Victorian literature, culture, history, and art.", category: "Journal", access: "Subscription" },
  { title: "Victorian Literature and Culture", url: "https://www.cambridge.org/core/journals/victorian-literature-and-culture", description: "Cambridge journal covering all aspects of Victorian literary and cultural studies.", category: "Journal", access: "Subscription" },
  { title: "Romanticism", url: "https://www.euppublishing.com/loi/rom", description: "Leading journal for Romantic-period literature and culture.", category: "Journal", access: "Subscription" },
  { title: "Studies in Romanticism", url: "https://www.bu.edu/studiesinromanticism/", description: "Boston University journal devoted to the literature and culture of the Romantic period.", category: "Journal", access: "Subscription" },
  { title: "Modernism/modernity", url: "https://www.press.jhu.edu/journals/modernismmodernity", description: "Official journal of the Modernist Studies Association, covering early twentieth-century literature and culture.", category: "Journal", access: "Subscription" },
  { title: "Journal of Modern Literature", url: "https://muse.jhu.edu/journal/109", description: "Covers twentieth and twenty-first century literature in all languages.", category: "Journal", access: "Subscription" },
  { title: "Contemporary Literature", url: "https://www.uwpress.wisc.edu/journals/journals/cl.html", description: "Devoted to modern and contemporary literature in English from around the world.", category: "Journal", access: "Subscription" },
  { title: "American Literature", url: "https://www.dukeupress.edu/american-literature", description: "Duke UP journal, the leading venue for scholarship on American literature across all periods.", category: "Journal", access: "Subscription" },
  { title: "American Literary History", url: "https://academic.oup.com/alh", description: "Oxford journal publishing essays on the history and criticism of American literature.", category: "Journal", access: "Subscription" },
  { title: "Journal of Postcolonial Writing", url: "https://www.tandfonline.com/journals/rjpw20", description: "Leading journal for postcolonial literary studies, covering fiction, poetry, and drama from across the globe.", category: "Journal", access: "Subscription" },
  { title: "ARIEL: A Review of International English Literature", url: "https://ariel.ucalgary.ca", description: "Covers literatures in English from around the world, with a focus on postcolonial and global anglophone writing.", category: "Journal", access: "Partial Free" },
  { title: "ISLE: Interdisciplinary Studies in Literature and Environment", url: "https://academic.oup.com/isle", description: "Official journal of ASLE, the premier venue for ecocritical scholarship.", category: "Journal", access: "Subscription" },
  { title: "Shakespeare Quarterly", url: "https://www.press.jhu.edu/journals/shakespeare-quarterly", description: "One of the most prestigious journals devoted to Shakespeare studies and early modern drama.", category: "Journal", access: "Subscription" },
  { title: "Studies in English Literature (SEL)", url: "https://www.press.jhu.edu/journals/studies-in-english-literature-1500-1900", description: "Johns Hopkins journal covering English literature from 1500 to 1900.", category: "Journal", access: "Subscription" },
  { title: "Narrative Inquiry", url: "https://www.jbe-platform.com/content/journals/15699977", description: "Interdisciplinary journal covering narrative theory and analysis across disciplines.", category: "Journal", access: "Subscription" },
  { title: "Digital Humanities Quarterly", url: "https://www.digitalhumanities.org/dhq/", description: "Open-access journal covering all aspects of digital humanities, including computational literary studies.", category: "Journal", access: "Free" },
  { title: "Translation Studies", url: "https://www.tandfonline.com/journals/rtrs20", description: "Leading journal for translation theory, history, and practice.", category: "Journal", access: "Subscription" },
  { title: "The Translator", url: "https://www.tandfonline.com/journals/rtrn20", description: "Journal covering translation studies with an emphasis on theoretical frameworks.", category: "Journal", access: "Subscription" },
  { title: "Disability Studies Quarterly", url: "https://dsq-sds.org", description: "Open-access journal of the Society for Disability Studies, covering disability in culture and literature.", category: "Journal", access: "Free" },
  { title: "Book History", url: "https://www.press.jhu.edu/journals/book-history", description: "Official journal of the Society for the History of Authorship, Reading and Publishing (SHARP).", category: "Journal", access: "Subscription" },
  { title: "Foreign Literature Studies (外国文学研究)", url: "https://www.wgwxyj.com", description: "Leading Chinese journal for the study of foreign literatures, including Anglophone and world literatures.", category: "Journal", access: "Partial Free" },
  // Associations
  { title: "MLA (Modern Language Association)", url: "https://www.mla.org", description: "The largest professional association for scholars of language and literature in North America.", category: "Association", access: "Free" },
  { title: "ACLA (American Comparative Literature Association)", url: "https://www.acla.org", description: "Promotes the study and teaching of comparative literature in the Americas.", category: "Association", access: "Free" },
  { title: "ASLE (Association for Literature and Environment)", url: "https://www.asle.org", description: "Leading association for ecocriticism and environmental humanities.", category: "Association", access: "Free" },
  { title: "MSA (Modernist Studies Association)", url: "https://msa.press.jhu.edu", description: "Professional association for scholars of literary and cultural modernism.", category: "Association", access: "Free" },
  { title: "NAVSA (North American Victorian Studies Association)", url: "https://navsa.org", description: "Association for scholars of Victorian literature, culture, and history.", category: "Association", access: "Free" },
  { title: "NASSR (North American Society for the Study of Romanticism)", url: "https://www.nassr.ca", description: "Professional association for scholars of Romantic-period literature and culture.", category: "Association", access: "Free" },
  { title: "ISNS (International Society for Narrative Studies)", url: "https://www.narrativestudies.org", description: "International association for narrative scholars across disciplines.", category: "Association", access: "Free" },
  { title: "SHARP (Society for the History of Authorship, Reading and Publishing)", url: "https://www.sharpweb.org", description: "International association for book historians and scholars of print culture.", category: "Association", access: "Free" },
  { title: "CELTS (Chinese Association for English Literature)", url: "https://www.celts.org.cn", description: "Chinese national association for scholars of English literature and translation.", category: "Association", access: "Free" },
  // Networks
  { title: "H-Net Humanities Networks", url: "https://www.h-net.org", description: "Free online network for humanities scholars, with mailing lists, reviews, and CFPs.", category: "Network", access: "Free" },
  { title: "Penn CFP Database", url: "https://call-for-papers.sas.upenn.edu", description: "The most comprehensive database of calls for papers in the humanities.", category: "Network", access: "Free" },
  // Archives
  { title: "British Library Digital Collections", url: "https://www.bl.uk/collection-guides", description: "Extensive digital collections of British literature, manuscripts, and historical texts.", category: "Archive", access: "Partial Free" },
  { title: "Project Gutenberg", url: "https://www.gutenberg.org", description: "Free access to over 70,000 literary works in the public domain.", category: "Archive", access: "Free" },
  { title: "Internet Archive", url: "https://archive.org", description: "Non-profit digital library with millions of free books, films, and other cultural materials.", category: "Archive", access: "Free" },
  { title: "Early English Books Online (EEBO)", url: "https://eebo.chadwyck.com", description: "Digital archive of virtually every work printed in England between 1475 and 1700.", category: "Archive", access: "Subscription" },
  { title: "Eighteenth Century Collections Online (ECCO)", url: "https://www.gale.com/primary-sources/eighteenth-century-collections-online", description: "Comprehensive archive of eighteenth-century British and American publications.", category: "Archive", access: "Subscription" },
  { title: "Oxford Text Archive", url: "https://ota.ox.ac.uk", description: "Repository of literary and linguistic texts for use in digital humanities research.", category: "Archive", access: "Free" },
];

const categories = ["All", "Database", "Journal", "Association", "Network", "Archive"];

const accessColors: Record<string, string> = {
  "Free": "bg-green-100 text-green-700",
  "Partial Free": "bg-yellow-100 text-yellow-700",
  "Subscription": "bg-gray-100 text-gray-600",
};

export default function ResourcesPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? resources : resources.filter(r => r.category === active);

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <p className="section-label mb-3">Research</p>
      <h1 className="font-serif text-5xl font-light text-ink-900 mb-4">Resources</h1>
      <p className="text-base text-ink-700 opacity-75 mb-10 max-w-2xl">
        Curated databases, journals, associations, networks, and archives for English literary scholars.
      </p>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map(cat => (
          <button key={cat} onClick={() => setActive(cat)}
            className={`tag px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
              active === cat
                ? "bg-forest-700 text-white"
                : "bg-cream-200 text-ink-700 hover:bg-forest-700/10hover:text-forest-700"
            }`}>
            {cat} {active !== cat && `(${cat === "All" ? resources.length : resources.filter(r => r.category === cat).length})`}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {filtered.map(r => (
          <article key={r.title} className="card p-6">
            <div className="flex justify-between items-start mb-3">
              <span className="tag bg-cream-200 text-ink-700">{r.category}</span>
              <span className={`tag ${accessColors[r.access]}`}>{r.access}</span>
            </div>
            <h3 className="font-serif text-xl mb-2">{r.title}</h3>
            <p className="text-sm leading-relaxed opacity-80 mb-4">{r.description}</p>
            <a href={r.url} target="_blank" rel="noopener noreferrer"
              className="text-xs text-forest-700 hover:text-forest-800">
              Visit →
            </a>
          </article>
        ))}
      </div>

      <p className="text-sm text-ink-700 opacity-50 mt-10 text-center">
        Showing {filtered.length} of {resources.length} resources
      </p>
    </div>
  );
}
