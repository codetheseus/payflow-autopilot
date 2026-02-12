import { useMemo, useState } from 'react';
import { cn } from '../../lib/cn';

type Status = 'Paid' | 'Pending' | 'Reminder Sent';

type Customer = {
  id: string;
  name: string;
  email: string;
  amount: number;
  status: Status;
  lastAction: string;
};

const initial: Customer[] = [
  {
    id: 'C-1042',
    name: 'Brightside Studio',
    email: 'billing@brightside.studio',
    amount: 1200,
    status: 'Pending',
    lastAction: 'Link sent 6h ago',
  },
  {
    id: 'C-1043',
    name: 'Northwind Agency',
    email: 'finance@northwind.agency',
    amount: 980,
    status: 'Reminder Sent',
    lastAction: 'Reminder sent 2h ago',
  },
  {
    id: 'C-1044',
    name: 'Freelance Client A',
    email: 'clienta@example.com',
    amount: 650,
    status: 'Paid',
    lastAction: 'Paid yesterday',
  },
  {
    id: 'C-1045',
    name: 'Acme Repairs',
    email: 'accounts@acmerepairs.com',
    amount: 420,
    status: 'Reminder Sent',
    lastAction: 'Reminder scheduled',
  },
  {
    id: 'C-1046',
    name: 'Sunset Coffee',
    email: 'owner@sunsetcoffee.com',
    amount: 310,
    status: 'Pending',
    lastAction: 'Link sent 1d ago',
  },
];

function StatusPill({ status }: { status: Status }) {
  const cls =
    status === 'Paid'
      ? 'bg-teal-500/15 text-teal-800 ring-teal-500/20'
      : status === 'Reminder Sent'
        ? 'bg-slate-900/10 text-slate-800 ring-slate-900/10'
        : 'bg-amber-500/15 text-amber-800 ring-amber-500/20';

  return (
    <span className={cn('inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ring-1', cls)}>
      {status}
    </span>
  );
}

export default function Customers() {
  const [rows, setRows] = useState(initial);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) => `${r.name} ${r.email} ${r.id}`.toLowerCase().includes(q));
  }, [rows, query]);

  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">Customers</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-slate-900">Customer list</h1>
          <p className="mt-2 text-sm text-slate-600">Track payment status across all customers.</p>
        </div>
        <div className="flex gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search customers..."
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-teal-500/40 md:w-72"
          />
          <button
            onClick={() => {
              const next: Status[] = ['Paid', 'Pending', 'Reminder Sent'];
              setRows((r) =>
                r.map((x, i) => ({
                  ...x,
                  status: next[(next.indexOf(x.status) + 1) % next.length],
                  lastAction: i % 2 === 0 ? 'Status updated just now' : x.lastAction,
                }))
              );
            }}
            className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Simulate updates
          </button>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs font-semibold text-slate-600">
            <tr>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Last action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/70">
            {filtered.map((c) => (
              <tr key={c.id} className="hover:bg-slate-50/60">
                <td className="px-4 py-3">
                  <div className="font-semibold text-slate-900">{c.name}</div>
                  <div className="text-xs text-slate-500">{c.id}</div>
                </td>
                <td className="px-4 py-3 text-slate-700">{c.email}</td>
                <td className="px-4 py-3 font-semibold text-slate-900">${c.amount.toLocaleString()}</td>
                <td className="px-4 py-3">
                  <StatusPill status={c.status} />
                </td>
                <td className="px-4 py-3 text-slate-600">{c.lastAction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 text-xs text-slate-500">Tip: click “Simulate updates” to see status changes.</div>
    </div>
  );
}
