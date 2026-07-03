"use client";
import { useState } from "react";
import { scholars } from "@/data/scholars";

const fields = [
  "All",
  "Victorian Studies",
  "Romantic Studies",
  "Modernist Studies",
  "Postcolonial Studies",
  "Ecocriticism",
  "Literary Theory",
  "American Literature",
  "World Literature",
  "Gender & Queer Studies",
  "Translation Studies",
  "Renaissance / Early Modern",
  "Medieval Studies",
  "Media Studies / Intermediality",
  "Digital Humanities",
  "Narrative Studies",
  "Disability Studies",
  "Critical Race Studies",
  "Book History",
];

export default function ScholarsPage() {
  const [activeField, setActiveField] = useState("All");
  const [activeType, setActiveType] = useState("All");

  const filtered = scholars.filter(s => {
    const fieldMatch = activeField === "All" || s.field === activeField;
    const typeMatch = activeType === "All" || s.type === activeType;
    return fieldMatch && typeMatch;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <p className="section-label mb-3">People</p>
      <h1 className="font-serif text-5xl font-light text-ink-900 mb-4">Scholars</h1>
      <p className="text-base text-ink-700 opacity-75 mb-10 max-w-2xl">
        Key figures in English literary studies — foundational voices and contemporary scholars shaping the field today.
      </p>

      {/* Type filter */}
      <div className="flex gap-3 mb-6">
        {["All", "foundational", "contemporary"].map(t => (
          <button key={t} onClick={() => setActiveType(t)}
            className={`tag px-3 py-1.5 text-xs font-medium cursor-pointer transition-colors capitalize ${
              activeType === t
                ? "bg-ink-900 text-white"
                : "bg-cream-200 text-ink-700 hover:bg-ink-900/10"
            }`}>
            {t === "foundational" ? "Foundational" : t === "contemporary" ? "Contemporary" : "All"}
          </button>
        ))}
      </div>

      {/* Field filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {fields.map(f => {
          const count = f === "All"
            ? scholars.filter(s => activeType === "All" || s.type === activeType).length
            : scholars.filter(s => s.field === f && (activeType === "All" || s.type === activeType)).length;
          if (count === 0 && f !== "All") return null;
          return (
            <button key={f} onClick={() => setActiveField(f)}
              className={`tag px-3 py-1.5 text-xs font-medium cursor-pointer transition-colors ${
                activeField === f
                  ? "bg-forest-700 text-white"
                  : "bg-cream-200 text-ink-700 hover:bg-forest-700/10 hover:text-forest-700"
              }`}>
              {f} ({count})
            </button>
          );
        })}
      </div>

      {/* Scholar cards */}
      <div className="grid md:grid-cols-2 gap-5">
        {filtered.map(s => (
          <article key={s.id} className="card p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-serif text-xl text-ink-900">{s.name}</h3>
                <p className="text-sm text-ink-700 opacity-70 mt-0.5">{s.institution}</p>
              </div>
              <span className={`tag text-xs ${
                s.type === "foundational"
                  ? "bg-ink-900/10 text-ink-800"
                  : "bg-forest-700/10 text-forest-700"
              }`}>
                {s.type === "foundational" ? "Foundational" : "Contemporary"}
              </span>
            </div>

            <p className="text-sm leading-relaxed opacity-80 mb-4">{s.bio}</p>

            <div className="space-y-1.5 mb-4">
              <p className="text-xs font-semibold tracking-wide uppercase text-forest-700 mb-2">Selected Works</p>
              {s.works.map(w => (
                <div key={w.title} className="text-sm">
                  <span className="font-serif italic text-ink-800">{w.title}</span>
                  <span className="text-ink-700 opacity-60 text-xs ml-2">({w.year}, {w.publisher})</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-2">
  <a href={s.scholarUrl} target="_blank" rel="noopener noreferrer"
    className="text-xs text-forest-700 hover:text-forest-800 font-medium">
    Google Scholar →
  </a>
  {s.website && (
    <a href={s.website} target="_blank" rel="noopener noreferrer"
      className="text-xs text-ink-700 opacity-60 hover:opacity-100 transition-opacity">
      Faculty page →
    </a>
  )}
</div>
          </article>
        ))}
      </div>

      <p className="text-sm opacity-50 mt-10 text-center">
        Showing {filtered.length} of {scholars.length} scholars
      </p>
    </div>
  );
}
