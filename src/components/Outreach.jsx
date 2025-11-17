import React, { useState } from 'react';

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function Outreach() {
  const [platform, setPlatform] = useState('instagram');
  const [brand, setBrand] = useState('CloseApp Brand');
  const [offer, setOffer] = useState('social media launch kit');
  const [audience, setAudience] = useState('founders and local shops');
  const [goal, setGoal] = useState('book a call');
  const [tone, setTone] = useState('friendly');
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(false);
  const [variations, setVariations] = useState([]);
  const [tips, setTips] = useState([]);

  const handleGenerate = async () => {
    setLoading(true);
    setVariations([]);
    setTips([]);
    try {
      const res = await fetch(`${BACKEND}/api/outreach`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          platform,
          brand_name: brand,
          offer,
          target_audience: audience,
          goal,
          tone,
          language,
        }),
      });
      const data = await res.json();
      setVariations(data.variations || []);
      setTips(data.tips || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-3xl mx-auto">
      <div className="rounded-2xl border border-slate-300 bg-white/70 backdrop-blur p-4 sm:p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-800">Multi-platform outreach</h2>
        <p className="text-xs text-slate-600 mb-4">Generate ready-to-send messages for Instagram, LinkedIn, Twitter/X, Email, and TikTok.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Platform</label>
            <select value={platform} onChange={(e)=>setPlatform(e.target.value)} className="w-full rounded-md border border-slate-300 p-2 text-sm">
              <option value="instagram">Instagram</option>
              <option value="linkedin">LinkedIn</option>
              <option value="twitter">Twitter / X</option>
              <option value="email">Email</option>
              <option value="tiktok">TikTok</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Brand</label>
            <input value={brand} onChange={(e)=>setBrand(e.target.value)} className="w-full rounded-md border border-slate-300 p-2 text-sm"/>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Offer</label>
            <input value={offer} onChange={(e)=>setOffer(e.target.value)} className="w-full rounded-md border border-slate-300 p-2 text-sm"/>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Audience</label>
            <input value={audience} onChange={(e)=>setAudience(e.target.value)} className="w-full rounded-md border border-slate-300 p-2 text-sm"/>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Goal</label>
            <input value={goal} onChange={(e)=>setGoal(e.target.value)} className="w-full rounded-md border border-slate-300 p-2 text-sm"/>
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
          {loading ? 'Generating...' : 'Generate outreach'}
        </button>

        {(variations.length > 0 || tips.length > 0) && (
          <div className="mt-4 grid gap-3">
            {variations.map((v, i) => (
              <div key={i} className="rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-800 whitespace-pre-wrap">{v}</div>
            ))}
            {tips.length > 0 && (
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <div className="text-[11px] uppercase tracking-wide text-slate-500 mb-1">Tips</div>
                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                  {tips.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
