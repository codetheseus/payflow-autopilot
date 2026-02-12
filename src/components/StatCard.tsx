import { cn } from '../lib/cn';
import type { ReactNode } from 'react';

export function StatCard({
  title,
  value,
  delta,
  icon,
  className,
}: {
  title: string;
  value: string;
  delta?: string;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm',
        'transition hover:-translate-y-0.5 hover:shadow-md',
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-medium text-slate-600">{title}</div>
          <div className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-slate-900">{value}</div>
          {delta ? <div className="mt-2 text-xs text-slate-500">{delta}</div> : null}
        </div>
        {icon ? (
          <div className="rounded-xl border border-slate-200/70 bg-slate-50 p-2 text-slate-700">{icon}</div>
        ) : null}
      </div>
    </div>
  );
}
