import { useMemo, useState } from 'react';
import { cn } from '../../lib/cn';

function Toggle({
  label,
  desc,
  checked,
  onChange,
}: {
  label: string;
  desc: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200/70 bg-white px-4 py-4 shadow-sm">
      <div>
        <div className="text-sm font-semibold text-slate-900">{label}</div>
        <div className="mt-1 text-xs text-slate-600">{desc}</div>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={cn(
          'relative h-7 w-12 rounded-full transition',
          checked ? 'bg-teal-500' : 'bg-slate-200'
        )}
        aria-pressed={checked}
        aria-label={label}
      >
        <span
          className={cn(
            'absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition',
            checked ? 'left-6' : 'left-1'
          )}
        />
      </button>
    </div>
  );
}

const timings = [24, 48, 72] as const;

export default function Automations() {
  const [autoSend, setAutoSend] = useState(true);
  const [smartReminders, setSmartReminders] = useState(true);
  const [timing, setTiming] = useState<(typeof timings)[number]>(48);

  const summary = useMemo(() => {
    if (!autoSend && !smartReminders) return 'Autopilot is off — enable at least one automation.';
    if (autoSend && smartReminders) return `Autopilot enabled — reminders every ${timing}h until paid.`;
    if (autoSend) return 'Auto-send enabled — reminders are off.';
    return `Reminders enabled — follow-ups every ${timing}h (manual link send).`;
  }, [autoSend, smartReminders, timing]);

  return (
    <div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">Payment Automations</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-slate-900">Autopilot controls</h1>
        <p className="mt-2 text-sm text-slate-600">Configure how PayFlow Autopilot sends links and reminders.</p>
      </div>

      <div className="mt-6 grid gap-4">
        <Toggle
          label="Auto-send payment links"
          desc="Instantly send a payment link when an enquiry is created."
          checked={autoSend}
          onChange={setAutoSend}
        />
        <Toggle
          label="Smart reminder follow-ups"
          desc="Automatically follow up until payment is completed."
          checked={smartReminders}
          onChange={setSmartReminders}
        />

        <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">Reminder timing settings</div>
          <div className="mt-2 text-xs text-slate-600">Choose when reminders should be sent.</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {timings.map((t) => (
              <button
                key={t}
                onClick={() => setTiming(t)}
                className={cn(
                  'rounded-xl border px-3 py-2 text-sm font-semibold transition',
                  timing === t
                    ? 'border-teal-500/40 bg-teal-500/10 text-slate-900'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                )}
              >
                {t}h
              </button>
            ))}
          </div>
          <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs text-slate-600 ring-1 ring-slate-200/60">
            {summary}
          </div>
        </div>
      </div>
    </div>
  );
}
