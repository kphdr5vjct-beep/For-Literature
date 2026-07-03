"use client";
import { useState } from "react";
import { cfps } from "@/data/cfps";

const TOPICS = [
  "All",
  "Victorian",
  "Romantic",
  "Renaissance",
  "Eighteenth Century",
  "Medieval",
  "Modernist Studies",
  "Twentieth Century and Beyond",
  "American",
  "Postcolonial",
  "World Literatures",
  "Ecocriticism",
  "Gender Studies",
  "Poetry",
  "Theory",
  "Cultural Studies",
  "Theatre and Performance",
  "Translation Studies",
];

const typeColors: Record<string, string> = {
  journal: "bg-green-100 text-green-700",
  conference: "bg-yellow-100 text-yellow-700",
  volume: "bg-blue-100 text-blue-700",
  other: "bg-gray-100 text-gray-600",
};

const typeLabels: Record<string, string> = {
  journal: "Journal",
  conference: "Conference",
  volume: "Edited Volume",
  other: "CFP",
};

export default function CFPPage() {
  const [activeTopic, setActiveTopic] = useState("All");
  const now = new Date();

  const allActive = cfps.filter(c => new Date(c.deadline) >= now);
  const filtered = activeTopic === "All"
    ? allActive
    : allActive.filter(c => c.topic === activeTopic);

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <p className="section-label mb-3">Submissions</p>
      <h1 className="font-serif text-5xl font-light text-ink-900 mb-4">Calls for Papers</h1>
      <p className="text-base text-ink-700 opacity-75 mb-10 max-w-2xl">
        Open calls for papers in English literary studies, organized by research area.
      </p>

      {/* Topic filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {TOPICS.map(topic => {
          const count = topic === "All"
            ? allActive.length
            : allActive.filter(c => c.topic === topic).length;
          if (count === 0 && topic !== "All") return null;
          return (
            <button key={topic} onClick={() => setActiveTopic(topic)}className={`tag px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                activeTopic === topic
                  ? "bg-forest-700 text-white"
                  : "bg-cream-200 text-ink-700 hover:bg-forest-700/10 hover:text-forest-700"
              }`}>
              {topic} ({count})
            </button>
          );
        })}
      </div>

      {/* Cards */}
      {filtered.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-5">
          {filtered.map(c => {
            const deadline = new Date(c.deadline);
            const days = Math.ceil((deadline.getTime() - Date.now()) / 86400000);
            return (
              <article key={c.id} className="card p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex gap-2">
                    <span className={`tag ${typeColors[c.type]}`}>{typeLabels[c.type]}</span>
                    {c.topic && <span className="tag bg-cream-200 text-ink-700">{c.topic}</span>}
                  </div>
                  <time className={`text-xs font-medium whitespace-nowrap ${days <= 14 ? "text-red-600" : "text-gold-600"}`}>
                    Due {deadline.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                {days <= 30 && ` · ${days}d`}
                  </time>
                </div>
                <h3 className="font-serif text-xl mb-2">{c.title}</h3>
                <p className="text-sm opacity-75 mb-3">{c.organizer}</p>
                <p className="text-sm leading-relaxed opacity-80 mb-4">{c.description}</p><a href={c.url} target="_blank" rel="noopener noreferrer"
                  className="text-xs text-forest-700 hover:text-forest-800">
                  View details →
                </a>
              </article>
            );
          })}
        </div>
      ) : (
        <p className="font-serif text-xl opacity-50 italic">No open CFPs in this topic.</p>
      )}

      <p className="text-sm opacity-50 mt-10 text-center">
        Showing {filtered.length} of {allActive.length} open CFPs
      </p>
    </div>
  );
}
