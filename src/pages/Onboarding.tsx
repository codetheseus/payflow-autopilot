import { useMemo, useState } from 'react';
import { CheckCircle2, ChevronRight, CreditCard, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/cn';

type Provider = 'Stripe' | 'Paystack';

const steps = [
  { key: 'account', title: 'Create Account', desc: 'Set up your workspace and billing region.' },
  { key: 'provider', title: 'Connect Stripe / Paystack', desc: 'Securely connect your payment provider.' },
  { key: 'templates', title: 'Choose payment templates', desc: 'Select default amounts, taxes, and notes.' },
  { key: 'activate', title: 'Activate Payment Autopilot', desc: 'Turn on auto-links + smart reminders.' },
] as const;

type StepKey = (typeof steps)[number]['key'];

export default function Onboarding() {
  const [active, setActive] = useState<StepKey>('account');
  const [provider, setProvider] = useState<Provider>('Stripe');
  const [template, setTemplate] = useState('Standard Service');
  const [autopilot, setAutopilot] = useState({ autoSend: true, smartReminders: true });
  const [completedAll, setCompletedAll] = useState(false);

  const idx = steps.findIndex((s) => s.key === active);

  const nextKey = useMemo(() => {
    if (idx < 0) return steps[0].key;
    if (idx >= steps.length - 1) return null;
    return steps[idx + 1].key;
  }, [idx]);

  const completed = (k: StepKey) => steps.findIndex((s) => s.key === k) < idx;

  const done = completedAll;

  return (
    <div className="bg-[#F6F8FB]">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-8 md:grid-cols-[360px_1fr]">
          <div className="rounded-3xl border border-slate-200/70 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-700 ring-1 ring-teal-500/20">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Early Access</div>
                <div className="text-xs text-slate-500">Setup in minutes</div>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              {steps.map((s) => (
                <button
                  key={s.key}
                  onClick={() => setActive(s.key)}
                  className={cn(
                    'w-full rounded-2xl border px-4 py-3 text-left transition',
                    active === s.key
                      ? 'border-teal-500/40 bg-teal-500/10'
                      : 'border-slate-200/70 bg-white hover:bg-slate-50'
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                        {completed(s.key) ? <CheckCircle2 className="h-4 w-4 text-teal-700" /> : null}
                        {s.title}
                      </div>
                      <div className="mt-1 text-xs text-slate-600">{s.desc}</div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200/70 bg-slate-50 p-4 text-xs text-slate-600">
              <div className="font-semibold text-slate-900">What you’ll get</div>
              <ul className="mt-2 list-disc space-y-1 pl-4">
                <li>Auto-generated payment links</li>
                <li>Smart reminder follow-ups</li>
                <li>Operational dashboard</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm">
            {done ? (
              <div className="py-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-700 ring-1 ring-teal-500/20">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-semibold tracking-[-0.03em] text-slate-900">
                      Your automated payment system is now live
                    </div>
                    <div className="mt-1 text-sm text-slate-600">You can start collecting automatically.</div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4">
                    <div className="text-xs font-medium text-slate-600">Provider</div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">{provider}</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4">
                    <div className="text-xs font-medium text-slate-600">Template</div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">{template}</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4">
                    <div className="text-xs font-medium text-slate-600">Auto-send links</div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">
                      {autopilot.autoSend ? 'Enabled' : 'Disabled'}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4">
                    <div className="text-xs font-medium text-slate-600">Smart reminders</div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">
                      {autopilot.smartReminders ? 'Enabled' : 'Disabled'}
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/dashboard"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    Open Dashboard
                  </Link>
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    Back to website
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">Step {idx + 1} of 4</div>
                    <div className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-900">
                      {steps[idx]?.title}
                    </div>
                    <div className="mt-2 text-sm text-slate-600">{steps[idx]?.desc}</div>
                  </div>
                  <div className="hidden md:flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-200/60">
                    <CreditCard className="h-5 w-5 text-slate-700" />
                  </div>
                </div>

                <div className="mt-6">
                  {active === 'account' ? (
                    <div className="grid gap-4 md:grid-cols-2">
                      <label className="grid gap-2">
                        <span className="text-xs font-semibold text-slate-700">Business name</span>
                        <input
                          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-teal-500/40"
                          defaultValue="Acme Co"
                        />
                      </label>
                      <label className="grid gap-2">
                        <span className="text-xs font-semibold text-slate-700">Region</span>
                        <select className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-teal-500/40">
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>Nigeria</option>
                          <option>South Africa</option>
                        </select>
                      </label>
                    </div>
                  ) : null}

                  {active === 'provider' ? (
                    <div className="grid gap-3">
                      <div className="text-sm font-semibold text-slate-900">Choose a provider</div>
                      <div className="grid gap-3 md:grid-cols-2">
                        {(['Stripe', 'Paystack'] as Provider[]).map((p) => (
                          <button
                            key={p}
                            onClick={() => setProvider(p)}
                            className={cn(
                              'rounded-2xl border px-4 py-4 text-left shadow-sm transition',
                              provider === p
                                ? 'border-teal-500/40 bg-teal-500/10'
                                : 'border-slate-200/70 bg-white hover:bg-slate-50'
                            )}
                          >
                            <div className="text-sm font-semibold text-slate-900">{p}</div>
                            <div className="mt-1 text-xs text-slate-600">Secure OAuth connection</div>
                          </button>
                        ))}
                      </div>
                      <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4 text-xs text-slate-600">
                        We never store card data. Connections are token-based and revocable.
                      </div>
                    </div>
                  ) : null}

                  {active === 'templates' ? (
                    <div className="grid gap-3">
                      <div className="text-sm font-semibold text-slate-900">Pick a default template</div>
                      <div className="grid gap-3 md:grid-cols-3">
                        {['Standard Service', 'Retainer', 'Deposit + Balance'].map((t) => (
                          <button
                            key={t}
                            onClick={() => setTemplate(t)}
                            className={cn(
                              'rounded-2xl border px-4 py-4 text-left shadow-sm transition',
                              template === t
                                ? 'border-teal-500/40 bg-teal-500/10'
                                : 'border-slate-200/70 bg-white hover:bg-slate-50'
                            )}
                          >
                            <div className="text-sm font-semibold text-slate-900">{t}</div>
                            <div className="mt-1 text-xs text-slate-600">Auto-fill notes and amounts</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {active === 'activate' ? (
                    <div className="grid gap-4">
                      <div className="text-sm font-semibold text-slate-900">Activation settings</div>
                      <div className="grid gap-3 md:grid-cols-2">
                        <label className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white px-4 py-4">
                          <div>
                            <div className="text-sm font-semibold text-slate-900">Auto-send payment links</div>
                            <div className="mt-1 text-xs text-slate-600">Send instantly when an enquiry arrives.</div>
                          </div>
                          <input
                            type="checkbox"
                            checked={autopilot.autoSend}
                            onChange={(e) => setAutopilot((s) => ({ ...s, autoSend: e.target.checked }))}
                            className="h-5 w-5 accent-teal-500"
                          />
                        </label>
                        <label className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white px-4 py-4">
                          <div>
                            <div className="text-sm font-semibold text-slate-900">Smart reminder follow-ups</div>
                            <div className="mt-1 text-xs text-slate-600">Follow up until payment is completed.</div>
                          </div>
                          <input
                            type="checkbox"
                            checked={autopilot.smartReminders}
                            onChange={(e) => setAutopilot((s) => ({ ...s, smartReminders: e.target.checked }))}
                            className="h-5 w-5 accent-teal-500"
                          />
                        </label>
                      </div>
                      <div className="rounded-2xl border border-slate-200/70 bg-slate-50 p-4 text-xs text-slate-600">
                        You can adjust reminder timing anytime in the Automations page.
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    Back
                  </Link>
                  <button
                    onClick={() => {
                      if (active === 'activate') {
                        setCompletedAll(true);
                        return;
                      }
                      if (nextKey) setActive(nextKey);
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-teal-400"
                  >
                    Continue <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-4 text-xs text-slate-500">
                  By continuing, you agree to our Terms and Privacy Policy.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
