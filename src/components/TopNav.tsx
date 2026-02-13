import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { cn } from '../lib/cn';

function isAuthed() {
  return localStorage.getItem('payflow_authed') === 'true';
}

const nav = [
  { to: '/updates', label: 'Product' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/demo', label: 'Demo' },
];

export function TopNav() {
  const navigate = useNavigate();
  const authed = isAuthed();

  function handleLogout() {
    localStorage.removeItem('payflow_authed');
    navigate('/updates', { replace: true });
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/updates" className="rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500/50">
          <Logo size="sm" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/40',
                  isActive ? 'bg-slate-100 text-slate-900' : ''
                )
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Smart dashboard link */}
          <NavLink
            to={authed ? '/dashboard' : '/login'}
            className={({ isActive }) =>
              cn(
                'rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/40',
                isActive ? 'bg-slate-100 text-slate-900' : ''
              )
            }
          >
            Dashboard
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          {/* Join Early Access */}
          <Link
            to="/onboarding"
            className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500/40 md:inline-flex"
          >
            Join Early Access
          </Link>

          {/* Auth button */}
          {authed ? (
            <button
              onClick={handleLogout}
              className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500/40 md:inline-flex"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500/40 md:inline-flex"
            >
              Log in
            </Link>
          )}

          {/* Primary CTA */}
          <Link
            to="/demo"
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
          >
            See Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
