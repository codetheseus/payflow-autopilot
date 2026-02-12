import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

const rows = [
  { label: 'Collected', value: '$24,930', trend: '+12%', up: true },
  { label: 'Outstanding', value: '$6,410', trend: '-8%', up: false },
  { label: 'Conversion', value: '64%', trend: '+6 pts', up: true },
  { label: 'Avg time to pay', value: '2.4 days', trend: '-0.6', up: true },
];

export default function Reports() {
  return (
    <div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">Reports</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-slate-900">Performance</h1>
        <p className="mt-2 text-sm text-slate-600">
          High-level metrics that show how autopilot impacts cash flow.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {rows.map((r) => (
          <div key={r.label} className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-slate-900">{r.label}</div>
              <div className={r.up ? 'text-teal-700' : 'text-slate-700'}>
                {r.up ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
              </div>
            </div>
            <div className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-900">{r.value}</div>
            <div className="mt-2 text-xs text-slate-500">{r.trend} vs previous period</div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
        <div className="text-sm font-semibold text-slate-900">Notes</div>
        <p className="mt-2 text-sm text-slate-600">
          In a production product, this page would include exports, cohort views, and breakdowns by template,
          channel, and customer segment.
        </p>
      </div>
    </div>
  );
}
