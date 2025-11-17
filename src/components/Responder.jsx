import React, { useState } from 'react';

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Responder() {
  const [message, setMessage] = useState('Hi, is this still available?');
  const [brand, setBrand] = useState('CloseApp Brand');
  const [offer, setOffer] = useState('social media launch kit');
  const [tone, setTone] = useState('friendly');
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleGenerate = async () => {
    setLoading(true);
    setResults([]);
    try {
      const res = await fetch(`${BACKEND}/api/close-response`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_message: message,
          brand_name: brand,
          offer,
          tone,
          language,
        }),
      });
      const data = await res.json();
      setResults(data.variants || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-3xl mx-auto">
      <div className="rounded-2xl border border-slate-300 bg-white/70 backdrop-blur p-4 sm:p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800">Deal-closing reply</h2>
        <p className="text-xs text-slate-600 mb-4">Paste a customer message and generate 3 persuasive replies.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <div className="col-span-1 sm:col-span-2">
            <label className="block text-xs font-medium text-slate-700 mb-1">Customer message</label>
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} className="w-full rounded-md border border-slate-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 min-h-[84px]"/>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Brand</label>
            <input value={brand} onChange={(e)=>setBrand(e.target.value)} className="w-full rounded-md border border-slate-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"/>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Offer</label>
            <input value={offer} onChange={(e)=>setOffer(e.target.value)} className="w-full rounded-md border border-slate-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"/>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Tone</label>
            <select value={tone} onChange={(e)=>setTone(e.target.value)} className="w-full rounded-md border border-slate-300 p-2 text-sm">
              <option>friendly</option>
              <option>confident</option>
              <option>professional</option>
              <option>casual</option>
              <option>warm</option>
              <option>persuasive</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Language</label>
            <select value={language} onChange={(e)=>setLanguage(e.target.value)} className="w-full rounded-md border border-slate-300 p-2 text-sm">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="pt">Portuguese</option>
            </select>
          </div>
        </div>

        <button onClick={handleGenerate} disabled={loading} className="inline-flex items-center gap-2 rounded-md bg-slate-800 text-white text-sm font-semibold px-4 py-2 hover:bg-slate-700 disabled:opacity-50">
          {loading ? 'Generating...' : 'Generate replies'}
        </button>

        {results.length > 0 && (
          <div className="mt-4 grid gap-3">
            {results.map((r, i) => (
              <div key={i} className="rounded-lg border border-slate-200 bg-white p-3">
                <div className="text-[11px] uppercase tracking-wide text-slate-500 mb-1">{r.label}</div>
                <div className="text-sm text-slate-800 whitespace-pre-wrap">{r.text}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
