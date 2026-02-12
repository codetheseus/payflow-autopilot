import { useMemo, useState } from 'react';
import { Copy, Link2, Plus } from 'lucide-react';

type LinkRow = {
  id: string;
  customer: string;
  amount: number;
  created: string;
  status: 'Active' | 'Paid' | 'Expired';
  url: string;
};

const seed: LinkRow[] = [
  {
    id: 'PL-2201',
    customer: 'Brightside Studio',
    amount: 1200,
    created: 'Today',
    status: 'Active',
    url: 'https://payflow.example/link/PL-2201',
  },
  {
    id: 'PL-2200',
    customer: 'Northwind Agency',
    amount: 980,
    created: 'Yesterday',
    status: 'Paid',
    url: 'https://payflow.example/link/PL-2200',
  },
  {
    id: 'PL-2199',
    customer: 'Sunset Coffee',
    amount: 310,
    created: '2d ago',
    status: 'Active',
    url: 'https://payflow.example/link/PL-2199',
  },
];

export default function Links() {
  const [rows, setRows] = useState(seed);

  const activeCount = useMemo(() => rows.filter((r) => r.status === 'Active').length, [rows]);

  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">Payment Links</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-slate-900">Links</h1>
          <p className="mt-2 text-sm text-slate-600">Auto-generated links you can share anywhere.</p>
        </div>
        <button
          onClick={() => {
            const id = `PL-${Math.floor(2202 + Math.random() * 40)}`;
            setRows((r) => [
              {
                id,
                customer: 'New customer',
                amount: 250,
                created: 'Just now',
                status: 'Active',
                url: `https://payflow.example/link/${id}`,
              },
              ...r,
            ]);
          }}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          <Plus className="h-4 w-4" /> New link
        </button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-slate-900">Active links</div>
            <Link2 className="h-4 w-4 text-teal-700" />
          </div>
          <div className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-900">{activeCount}</div>
          <div className="mt-1 text-xs text-slate-500">Ready to pay</div>
        </div>
        <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm md:col-span-2">
          <div className="text-sm font-semibold text-slate-900">Recent links</div>
          <div className="mt-4 space-y-3">
            {rows.map((r) => (
              <div key={r.id} className="flex flex-col gap-2 rounded-xl bg-slate-50 px-3 py-3 ring-1 ring-slate-200/60 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-900">{r.customer}</div>
                  <div className="mt-0.5 text-xs text-slate-500">
                    {r.id} · {r.created} · {r.status}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-sm font-semibold text-slate-900">${r.amount.toLocaleString()}</div>
                  <button
                    onClick={async () => {
                      await navigator.clipboard.writeText(r.url);
                      alert('Copied link to clipboard');
                    }}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    <Copy className="h-3.5 w-3.5" /> Copy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
