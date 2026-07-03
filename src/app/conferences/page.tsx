import { conferences } from "@/data/conferences";
export default function ConferencesPage() {
  const upcoming = conferences.filter(c => new Date(c.startDate) >= new Date());
  const past = conferences.filter(c => new Date(c.startDate) < new Date());
  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <p className="section-label mb-3">Events</p>
      <h1 className="font-serif text-5xl font-light text-ink-900 mb-10">Conferences</h1>
      {upcoming.length > 0 &&<section className="mb-14">
        <h2 className="font-serif text-2xl font-light mb-6 pb-3 border-b border-cream-200">Upcoming</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {upcoming.map(c => (
            <article key={c.id} className="card p-6">
              <div className="flex justify-between mb-3">
                <span className="tag bg-yellow-100 text-yellow-700">{c.region}</span>
                <time className="text-xs opacity-60">{new Date(c.startDate).toLocaleDateString()}</time>
              </div>
              <h3 className="font-serif text-xl mb-2">{c.title}</h3>
              <p className="text-sm opacity-75 mb-2">{c.organizer}</p>
              <p className="text-sm opacity-80 mb-3">{c.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-xs opacity-50">{c.location}</p>
                <a href={c.url} target="_blank" className="text-xs text-forest-700">Learn more →</a>
              </div>
            </article>
          ))}
        </div>
      </section>}
      {past.length > 0 && <section>
        <h2 className="font-serif text-2xl font-light mb-6 pb-3 border-b border-cream-200">Past</h2>
        <div className="grid md:grid-cols-2 gap-5 opacity-60">
          {past.map(c => (
            <article key={c.id} className="card p-6">
              <h3 className="font-serif text-xl mb-2">{c.title}</h3>
              <p className="text-sm opacity-75">{c.organizer}</p></article>
          ))}
        </div>
      </section>}
    </div>
  );
}