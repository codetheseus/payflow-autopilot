import { useState } from 'react';

export default function Settings() {
  const [company, setCompany] = useState('Acme Co');
  const [timezone, setTimezone] = useState('UTC');

  return (
    <div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">Settings</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-slate-900">Workspace</h1>
        <p className="mt-2 text-sm text-slate-600">Manage your workspace preferences.</p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">Company</div>
          <div className="mt-3 grid gap-2">
            <label className="text-xs font-semibold text-slate-700">Business name</label>
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-teal-500/40"
            />
          </div>
          <div className="mt-4 text-xs text-slate-500">Used in emails and payment link pages.</div>
        </div>

        <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">Timezone</div>
          <div className="mt-3 grid gap-2">
            <label className="text-xs font-semibold text-slate-700">Default timezone</label>
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-teal-500/40"
            >
              <option>UTC</option>
              <option>America/New_York</option>
              <option>Europe/London</option>
              <option>Africa/Lagos</option>
            </select>
          </div>
          <div className="mt-4 text-xs text-slate-500">Affects reminder scheduling and reports.</div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
        <div className="text-sm font-semibold text-slate-900">Security</div>
        <p className="mt-2 text-sm text-slate-600">
          Tokens are stored securely and can be revoked at any time from your provider.
        </p>
        <button
          onClick={() => alert('In a real app, this would revoke provider tokens and sign out all sessions.')}
          className="mt-4 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Revoke connections
        </button>
      </div>
    </div>
  );
}
