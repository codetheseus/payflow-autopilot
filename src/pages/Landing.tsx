import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  Bolt,
  CalendarClock,
  CheckCircle2,
  Link2,
  MessageSquareText,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { brand } from '../lib/brand';

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function SectionTitle({ kicker, title, desc }: { kicker?: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {kicker ? (
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">{kicker}</div>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-900 md:text-4xl">{title}</h2>
      {desc ? <p className="mt-3 text-base text-slate-600">{desc}</p> : null}
    </div>
  );
}

export default function Landing() {
  return (
    <div className="bg-[#F6F8FB]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-teal-500/15 blur-3xl" />
          <div className="absolute -top-10 left-[15%] h-[260px] w-[260px] rounded-full bg-slate-900/10 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <div className="flex flex-wrap gap-2">
              <Pill>
                <Bolt className="h-3.5 w-3.5 text-teal-700" /> Automation-first
              </Pill>
              <Pill>
                <ShieldCheck className="h-3.5 w-3.5 text-teal-700" /> Trustworthy fintech
              </Pill>
              <Pill>
                <BadgeCheck className="h-3.5 w-3.5 text-teal-700" /> Early access
              </Pill>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-slate-900 md:text-5xl">
              Turn enquiries into payments — automatically
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              PayFlow Autopilot instantly generates payment links, sends them to customers, and follows up
              automatically until payment is completed.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
              >
                Join Early Access <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
              >
                See Demo
              </Link>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 text-sm text-slate-600 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-700" /> Smart reminders
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-700" /> Payment links in seconds
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-700" /> Works with Stripe/Paystack
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-teal-700" /> Operational dashboards
              </div>
            </div>

            <p className="mt-7 text-xs text-slate-500">{brand.tagline}</p>
          </div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="rounded-3xl border border-slate-200/70 bg-white shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-200/70 px-5 py-4">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                </div>
                <div className="text-xs font-semibold text-slate-600">Autopilot Activity</div>
                <div className="text-xs text-slate-500">Live</div>
              </div>

              <div className="grid gap-4 p-5 md:p-6">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4">
                    <div className="text-xs font-medium text-slate-600">Reminders sent</div>
                    <div className="mt-2 text-2xl font-semibold text-slate-900">128</div>
                    <div className="mt-2 text-xs text-slate-500">+18% this week</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4">
                    <div className="text-xs font-medium text-slate-600">Collected</div>
                    <div className="mt-2 text-2xl font-semibold text-slate-900">$24,930</div>
                    <div className="mt-2 text-xs text-slate-500">Autopilot recovered $3,120</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200/70 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-slate-900">Automated reminder timeline</div>
                    <div className="text-xs text-slate-500">Last 48h</div>
                  </div>
                  <div className="mt-3 space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-start gap-3 rounded-xl bg-slate-50 px-3 py-3">
                        <div className="mt-0.5 h-8 w-8 rounded-xl bg-teal-500/15 text-teal-700 ring-1 ring-teal-500/20 flex items-center justify-center">
                          <MessageSquareText className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-900">Reminder sent to customer</div>
                          <div className="mt-1 text-xs text-slate-600">
                            Payment link included · Smart tone · {i * 6}h ago
                          </div>
                        </div>
                        <div className="text-xs font-semibold text-slate-500">Delivered</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                      <Link2 className="h-4 w-4 text-teal-700" /> Links
                    </div>
                    <div className="mt-2 text-sm font-semibold text-slate-900">Auto-generated</div>
                    <div className="mt-1 text-xs text-slate-500">Correct amount & currency</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                      <CalendarClock className="h-4 w-4 text-teal-700" /> Timing
                    </div>
                    <div className="mt-2 text-sm font-semibold text-slate-900">24h / 48h / 72h</div>
                    <div className="mt-1 text-xs text-slate-500">Reminder schedule</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                      <Bolt className="h-4 w-4 text-teal-700" /> Autopilot
                    </div>
                    <div className="mt-2 text-sm font-semibold text-slate-900">Always on</div>
                    <div className="mt-1 text-xs text-slate-500">No manual follow-ups</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle
          kicker="The problem"
          title="Businesses lose thousands chasing payments"
          desc="Manual collections create delays, missed follow-ups, and unpredictable cash flow."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            'Manual invoice sending wastes hours',
            'Customers forget to pay',
            'Follow-ups are inconsistent',
            'Cash flow becomes unpredictable',
          ].map((t) => (
            <div
              key={t}
              className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/15 text-teal-700 ring-1 ring-teal-500/20">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="text-sm font-semibold text-slate-900">{t}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Solution */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle
            kicker="Solution"
            title="Automated Revenue Collection"
            desc="PayFlow Autopilot connects to your enquiries, creates the correct payment link automatically, sends it instantly, and follows up until payment is completed."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Connect your payment provider',
                desc: 'Stripe or Paystack — connect once and keep your existing workflow.',
                icon: ShieldCheck,
              },
              {
                title: 'Customers enquire',
                desc: 'Capture leads from your forms, DMs, or checkout requests.',
                icon: Users,
              },
              {
                title: 'Links send + reminders follow until paid',
                desc: 'Autopilot sends the link instantly and follows up on your schedule.',
                icon: Bolt,
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-200/70 bg-[#F6F8FB] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-teal-700 shadow-sm ring-1 ring-slate-200/60">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-base font-semibold text-slate-900">{c.title}</div>
                <div className="mt-2 text-sm text-slate-600">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle kicker="Benefits" title="Built for operational clarity" desc={brand.message} />
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {[
            { title: 'Get paid faster', desc: 'Instant links + consistent reminders.' },
            { title: 'Reduce unpaid invoices', desc: 'Autopilot follows up until it’s done.' },
            { title: 'Save admin time', desc: 'No manual chasing, no spreadsheets.' },
            { title: 'Improve monthly cash flow', desc: 'Predictable collections for planning.' },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">{b.title}</div>
              <div className="mt-2 text-sm text-slate-600">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <SectionTitle kicker="Pricing" title="Simple plans that scale" desc="Start small, automate collections, and upgrade when you’re ready." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                name: 'Starter',
                price: '$29',
                note: '/month',
                features: ['1 payment provider', 'Up to 200 reminders/mo', 'Basic templates', 'Email support'],
              },
              {
                name: 'Growth',
                price: '$79',
                note: '/month',
                featured: true,
                features: ['Stripe + Paystack', 'Unlimited reminders', 'Smart follow-ups', 'Advanced reporting'],
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                note: '',
                features: ['SLA + dedicated support', 'Custom integrations', 'Multi-workspace', 'Security reviews'],
              },
            ].map((p) => (
              <div
                key={p.name}
                className={
                  p.featured
                    ? 'rounded-2xl border border-teal-500/40 bg-[#F6F8FB] p-6 shadow-sm ring-1 ring-teal-500/20'
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
                <div className="mt-4 flex items-end gap-2">
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
                  Get started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-900 px-6 py-12 shadow-xl md:px-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-teal-500/25 blur-3xl" />
            <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          </div>
          <div className="relative">
            <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white">Stop chasing payments today</h3>
            <p className="mt-2 max-w-2xl text-sm text-white/80">
              Connect your provider, pick a template, and activate autopilot in minutes.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center rounded-xl bg-teal-500 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-teal-400"
              >
                Start Collecting Automatically
              </Link>
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
              >
                Open Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
