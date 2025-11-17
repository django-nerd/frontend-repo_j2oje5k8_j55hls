import React from 'react';

const benefits = [
  {
    title: 'Clear value in seconds',
    desc: 'Explain what your product does and why it matters with simple, scannable blocks.'
  },
  {
    title: 'Designed for mobile',
    desc: 'Layouts, spacing, and typography tuned for small screens first.'
  },
  {
    title: 'Fast and lightweight',
    desc: 'Snappy interactions with minimal bloat so your page feels instant.'
  },
  {
    title: 'Visual-first sections',
    desc: 'Drop in app screenshots, mockups, or logos to build trust quickly.'
  }
];

export default function Benefits() {
  return (
    <section className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map((b, i) => (
          <div key={i} className="rounded-2xl border border-slate-300 bg-white/70 backdrop-blur p-4 shadow-sm">
            <div className="text-2xl">✨</div>
            <h3 className="mt-2 text-base font-semibold text-slate-800">{b.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
