import { useMemo, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Bolt, CheckCircle2, LogOut, ShieldCheck, Sparkles } from 'lucide-react';

type UpdateItem = {
  date: string;
  title: string;
  desc: string;
  tag?: string;
};

export default function Updates() {
  const navigate = useNavigate();

  const [checklist, setChecklist] = useState({
    connectProvider: false,
    createFirstLink: false,
    sendFirstLink: false,
    enableReminders: false,
  });

  const updates: UpdateItem[] = useMemo(
    () => [
      {
        date: 'Today',
        title: 'Early Access funnel is live',
        desc: 'Signup CTAs now send users to the Early Access form.',
        tag: 'Live',
      },
      {
        date: 'Today',
        title: 'Brand assets updated',
        desc: 'Logo + favicon + social preview image are now consistent.',
        tag: 'Brand',
      },
      {
        date: 'Next',
        title: 'Stripe + database integration',
        desc: 'Create payment links automatically and store them for dashboard reporting.',
        tag: 'Build',
      },
    ],
    []
  );

  function logout() {
    localStorage.removeItem('payflow_authed');
    navigate('/login', { replace: true });
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
            Pre-dashboard
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-slate-900 md:text-4xl">
            Updates & Overview
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
            This page keeps you oriented before you jump into the dashboard — what PayFlow does, what’s new,
            and what to set up next.
          </p>
        </div>

        <div className="flex gap-2">
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
          >
            Go to Dashboard <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            onClick={logout}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>

      {/* What we do */}
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-700 ring-1 ring-teal-500/20">
            <Bolt className="h-5 w-5" />
          </div>
          <div className="mt-4 text-base font-semibold text-slate-900">Automate collections</div>
          <div className="mt-2 text-sm text-slate-600">
            Generate payment links instantly and send them the moment a customer enquires.
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-700 ring-1 ring-teal-500/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="mt-4 text-base font-semibold text-slate-900">Follow up automatically</div>
          <div className="mt-2 text-sm text-slate-600">
            Smart reminders at 24h / 48h / 72h until paid — no chasing.
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-700 ring-1 ring-teal-500/20">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="mt-4 text-base font-semibold text-slate-900">Operational clarity</div>
          <div className="mt-2 text-sm text-slate-600">
            Track what’s paid, what’s pending, and how much autopilot recovered this month.
          </div>
        </div>
      </div>

      {/* Checklist + Updates */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {/* Setup Checklist */}
        <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="text-base font-semibold text-slate-900">Setup checklist</div>
            <div className="text-xs font-semibold text-slate-500">MVP steps</div>
          </div>

          <div className="mt-4 space-y-3">
            {[
              { key: 'connectProvider', label: 'Connect Stripe / Paystack' },
              { key: 'createFirstLink', label: 'Create your first payment link' },
              { key: 'sendFirstLink', label: 'Send link from an enquiry' },
              { key: 'enableReminders', label: 'Enable smart reminders (24/48/72h)' },
            ].map((item) => (
              <label
                key={item.key}
                className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <CheckCircle2 className="h-4 w-4 text-teal-700" />
                  {item.label}
                </div>
                <input
                  type="checkbox"
                  checked={(checklist as any)[item.key]}
                  onChange={(e) =>
                    setChecklist((prev) => ({ ...prev, [item.key]: e.target.checked }))
                  }
                  className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500/40"
                />
              </label>
            ))}
          </div>

          <div className="mt-5 text-sm text-slate-600">
            Next milestone: <span className="font-semibold text-slate-900">Stripe link creation + webhook</span>.
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Open Dashboard
            </Link>
            <button
              onClick={() => alert('Next step: we add Supabase + Stripe APIs.')}
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Build Next Integration
            </button>
          </div>
        </div>

        {/* Release Notes / Updates */}
        <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="text-base font-semibold text-slate-900">What’s new</div>
            <div className="text-xs font-semibold text-slate-500">Release notes</div>
          </div>

          <div className="mt-4 space-y-3">
            {updates.map((u) => (
              <div key={u.title} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{u.title}</div>
                    <div className="mt-1 text-sm text-slate-600">{u.desc}</div>
                    <div className="mt-2 text-xs text-slate-500">{u.date}</div>
                  </div>
                  {u.tag ? (
                    <span className="h-fit rounded-full bg-teal-500/15 px-2 py-1 text-xs font-semibold text-teal-800 ring-1 ring-teal-500/20">
                      {u.tag}
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 text-sm text-slate-600">
            Tip: Keep this page updated — investors love visible momentum.
          </div>
        </div>
      </div>
    </div>
  );
}
