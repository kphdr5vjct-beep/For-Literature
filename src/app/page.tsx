import { conferences } from "@/data/conferences";
import { cfps } from "@/data/cfps";

export default function HomePage() {
  const upcoming = conferences.filter(c => new Date(c.startDate) >= new Date()).slice(0, 4);
  const active = cfps.filter(c => new Date(c.deadline) >= new Date()).slice(0, 4);

  return (
    <div className="min-h-screen">
      <section className="bg-cream-50 border-b border-cream-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="section-label mb-5">English Literary Studies</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-ink-900 mb-8">
            Literature,<br/><em className="text-forest-700">tracked.</em>
          </h1>
          <p className="text-lg text-ink-700 max-w-xl mb-10">
            Conferences, calls for papers, and resources for English literary studies worldwide.
          </p></div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-serif text-3xl font-light text-ink-900 mb-6">Upcoming Conferences</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {upcoming.map(conf => (
            <article key={conf.id} className="card p-6">
              <span className="tag bg-green-100 text-green-700">{conf.region}</span>
              <h3 className="font-serif text-xl mt-3 mb-2">{conf.title}</h3>
              <p className="text-sm text-ink-700 opacity-75mb-3">{conf.organizer}</p>
              <p className="text-sm leading-relaxed opacity-80">{conf.description}</p><a href={conf.url} target="_blank" className="text-sm text-forest-700 hover:text-forest-800 mt-4 inline-block">
                Learn more →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-serif text-3xl font-light text-ink-900 mb-6">Calls for Papers</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {active.map(cfp => (
            <article key={cfp.id} className="card p-6">
              <span className="tag bg-green-100 text-green-700">{cfp.type}</span>
              <h3 className="font-serif text-xl mt-3 mb-2">{cfp.title}</h3>
              <p className="text-sm text-ink-700 opacity-75 mb-3">{cfp.organizer}</p>
              <p className="text-sm leading-relaxed opacity-80">{cfp.description}</p>
              <p className="text-xs text-gold-600 mt-3">Deadline: {new Date(cfp.deadline).toLocaleDateString()}</p>
              <a href={cfp.url} target="_blank" className="text-sm text-forest-700 hover:text-forest-800 mt-2 inline-block">
                View details →
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
