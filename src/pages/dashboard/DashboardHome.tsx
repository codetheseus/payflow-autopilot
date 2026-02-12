import { DollarSign, Mail, Percent, Wallet } from 'lucide-react';
import { StatCard } from '../../components/StatCard';

export default function DashboardHome() {
  return (
    <div>
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">Dashboard</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-slate-900">Collections overview</h1>
          <p className="mt-2 text-sm text-slate-600">
            Monitor automated revenue collection and follow-up performance.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50">
            Export
          </button>
          <button className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800">
            New payment link
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <StatCard
          title="Payments collected this month"
          value="$24,930"
          delta="+12% vs last month"
          icon={<DollarSign className="h-4 w-4" />}
        />
        <StatCard
          title="Outstanding payments"
          value="$6,410"
          delta="18 invoices pending"
          icon={<Wallet className="h-4 w-4" />}
        />
        <StatCard
          title="Automated reminders sent"
          value="128"
          delta="Avg 2.1 reminders/invoice"
          icon={<Mail className="h-4 w-4" />}
        />
        <StatCard
          title="Enquiry → Payment conversion rate"
          value="64%"
          delta="+6 pts this week"
          icon={<Percent className="h-4 w-4" />}
        />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-slate-900">Autopilot activity</div>
            <div className="text-xs text-slate-500">Last 7 days</div>
          </div>
          <div className="mt-4 grid grid-cols-7 gap-2">
            {[34, 22, 29, 41, 38, 26, 44].map((v, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="h-28 w-full rounded-xl bg-slate-50 ring-1 ring-slate-200/60 flex items-end overflow-hidden">
                  <div
                    className="w-full rounded-xl bg-teal-500/70"
                    style={{ height: `${Math.max(10, Math.min(100, v))}%` }}
                  />
                </div>
                <div className="text-[11px] text-slate-500">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-xs text-slate-500">
            Bars represent reminders + link sends triggered by autopilot.
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">Top outstanding</div>
          <div className="mt-4 space-y-3">
            {[
              { name: 'Brightside Studio', amt: '$1,200', status: 'Reminder scheduled' },
              { name: 'Northwind Agency', amt: '$980', status: 'Reminder sent' },
              { name: 'Freelance Client A', amt: '$650', status: 'Pending' },
              { name: 'Acme Repairs', amt: '$420', status: 'Reminder sent' },
            ].map((c) => (
              <div key={c.name} className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-3 ring-1 ring-slate-200/60">
                <div>
                  <div className="text-sm font-semibold text-slate-900">{c.name}</div>
                  <div className="mt-0.5 text-xs text-slate-500">{c.status}</div>
                </div>
                <div className="text-sm font-semibold text-slate-900">{c.amt}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
