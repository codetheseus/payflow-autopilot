import { Link } from 'react-router-dom';
import { PlayCircle, Sparkles } from 'lucide-react';

export default function Demo() {
  return (
    <div className="bg-[#F6F8FB]">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-teal-700" /> Demo
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-900">See PayFlow Autopilot in action</h1>
            <p className="mt-3 text-slate-600">
              Explore a realistic dashboard with sample data: automations, customers, payment links, and reports.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                <PlayCircle className="h-4 w-4" /> Open Dashboard Demo
              </Link>
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Join Early Access
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-slate-900">Product walkthrough</div>
              <div className="text-xs text-slate-500">3 minutes</div>
            </div>
            <div className="mt-4 aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/10">
                    <PlayCircle className="h-6 w-6" />
                  </div>
                  <div className="mt-3 text-sm font-semibold text-white">Demo preview</div>
                  <div className="mt-1 text-xs text-white/70">Open the dashboard to interact</div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-sm text-slate-600">
              The dashboard is fully interactive in this prototype: toggles, timing settings, onboarding steps, and
              customer status updates.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
