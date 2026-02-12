import { NavLink } from 'react-router-dom';
import { cn } from '../lib/cn';
import {
  BarChart3,
  Bolt,
  CreditCard,
  Link2,
  Settings,
  Users,
} from 'lucide-react';

const items = [
  { to: '/dashboard', label: 'Dashboard', icon: BarChart3 },
  { to: '/dashboard/automations', label: 'Payment Automations', icon: Bolt },
  { to: '/dashboard/customers', label: 'Customers', icon: Users },
  { to: '/dashboard/links', label: 'Payment Links', icon: Link2 },
  { to: '/dashboard/reports', label: 'Reports', icon: BarChart3 },
  { to: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="flex h-full w-full flex-col border-r border-slate-200/70 bg-white">
      <div className="px-4 py-4">
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-slate-50 px-3 py-3">
          <img src="/brand/payflow-appicon.png" alt="PayFlow" className="h-10 w-10 rounded-2xl" />
          <div>
            <div className="text-sm font-semibold text-slate-900">PayFlow Autopilot</div>
            <div className="text-xs text-slate-500">Workspace · Acme Co</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-2 pb-4">
        {items.map((it) => (
          <NavLink
            key={it.to}
            to={it.to}
            end={it.to === '/dashboard'}
            className={({ isActive }) =>
              cn(
                'mb-1 flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100',
                isActive ? 'bg-slate-100 text-slate-900' : ''
              )
            }
          >
            <it.icon className="h-4 w-4" />
            {it.label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-slate-200/70 p-3">
        <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-3">
          <div className="flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-teal-600" />
            <div className="text-xs text-slate-600">
              <div className="font-semibold text-slate-900">Stripe connected</div>
              <div className="text-slate-500">Payouts enabled</div>
            </div>
          </div>
          <div className="h-2 w-2 rounded-full bg-teal-500" />
        </div>
      </div>
    </aside>
  );
}
