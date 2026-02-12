import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    note: '/month',
    desc: 'For freelancers and small teams starting to automate collections.',
    features: ['1 payment provider', 'Up to 200 reminders/mo', 'Payment link templates', 'Email support'],
  },
  {
    name: 'Growth',
    price: '$79',
    note: '/month',
    desc: 'For agencies and service businesses that want full autopilot.',
    featured: true,
    features: ['Stripe + Paystack', 'Unlimited reminders', 'Smart follow-ups', 'Reports & exports'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    note: '',
    desc: 'For larger orgs with custom workflows and compliance needs.',
    features: ['SLA + dedicated support', 'Custom integrations', 'Multi-workspace', 'Security reviews'],
  },
];

export default function Pricing() {
  return (
    <div className="bg-[#F6F8FB]">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">Pricing</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-900">Simple plans</h1>
          <p className="mt-3 text-slate-600">
            Start automating revenue collection today. Upgrade as your volume grows.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={
                p.featured
                  ? 'rounded-2xl border border-teal-500/40 bg-white p-6 shadow-sm ring-1 ring-teal-500/20'
                  : 'rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm'
              }
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-900">{p.name}</div>
                {p.featured ? (
                  <span className="rounded-full bg-teal-500/15 px-2 py-1 text-xs font-semibold text-teal-800 ring-1 ring-teal-500/20">
                    Most popular
                  </span>
                ) : null}
              </div>
              <div className="mt-3 text-sm text-slate-600">{p.desc}</div>
              <div className="mt-5 flex items-end gap-2">
                <div className="text-4xl font-semibold tracking-[-0.04em] text-slate-900">{p.price}</div>
                <div className="pb-1 text-sm text-slate-500">{p.note}</div>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-700" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/onboarding"
                className={
                  p.featured
                    ? 'mt-6 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800'
                    : 'mt-6 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50'
                }
              >
                Join Early Access
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
