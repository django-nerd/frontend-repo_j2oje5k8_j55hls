import React from 'react';

export default function ProductShowcase() {
  return (
    <section className="w-full max-w-xl mx-auto">
      <div className="rounded-3xl border border-slate-300 bg-white/70 backdrop-blur p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-full sm:w-1/2">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 border border-slate-200 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="text-5xl">📱</div>
                <div className="mt-2 text-xs text-slate-600">Your product preview</div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <h2 className="text-xl font-bold text-slate-800">Showcase your product beautifully</h2>
            <p className="mt-2 text-sm text-slate-600">
              A clean, mobile-first design that highlights what you offer and why customers will love it.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2"><span className="mt-0.5">✅</span><span>Crystal-clear value proposition</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5">✅</span><span>Fast, lightweight, and responsive</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5">✅</span><span>Ready for screenshots, icons, and app badges</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
