export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <p className="section-label mb-3">About</p>
      <h1 className="font-serif text-5xl font-light text-ink-900 mb-8">For Literature</h1>
      <div className="space-y-6 text-ink-700 leading-relaxed">
        <p className="text-lg">For Literature is a dedicated resource hub for scholars of English literary studies, connecting researchers across the world.</p><h2 className="font-serif text-3xl font-light text-ink-900 pt-6">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6"><h3 className="font-serif text-xl mb-2">Conferences</h3><p className="text-sm">International and China-based conference listings, updated regularly.</p></div>
          <div className="card p-6"><h3 className="font-serif text-xl mb-2">Calls for Papers</h3><p className="text-sm">Open CFPs from journals and academic events, with deadline tracking.</p></div>
          <div className="card p-6"><h3 className="font-serif text-xl mb-2">Resources</h3><p className="text-sm">Curated databases, journals, and archives for literary scholars.</p></div>
          <div className="card p-6"><h3 className="font-serif text-xl mb-2">Community</h3><p className="text-sm">A space to discover events and stay current in the field.</p></div>
        </div>
        <h2 className="font-serif text-3xl font-light text-ink-900 pt-6">Contact</h2>
        <p>Have a conference or CFP to submit? Email us at <a href="mailto:contact@forliterature.org" className="text-forest-700 underline">contact@forliterature.org</a></p>
      </div>
    </div>
  );
}