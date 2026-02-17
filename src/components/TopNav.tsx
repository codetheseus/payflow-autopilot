import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { cn } from '../lib/cn';
import { useAuth } from '../contexts/AuthContext';
import { LogOut } from 'lucide-react';

const publicNav = [
  { to: '/', label: 'Product' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/demo', label: 'Demo' },
];

export function TopNav() {
  const navigate = useNavigate();
  const { loading, isAuthed, signOut } = useAuth();

  async function handleLogout() {
    await signOut();
    navigate('/', { replace: true });
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500/50">
          <Logo size="sm" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {publicNav.map((item) => (
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

          {/* Only show Dashboard when logged in */}
          {!loading && isAuthed ? (
            <NavLink
              to="/updates"
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/40',
                  isActive ? 'bg-slate-100 text-slate-900' : ''
                )
              }
            >
              Dashboard
            </NavLink>
          ) : null}
        </nav>

        <div className="flex items-center gap-2">
          {/* Keep Join Early Access for everyone */}
          <Link
            to="/onboarding"
            className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500/40 md:inline-flex"
          >
            Join Early Access
          </Link>

          {/* Auth buttons */}
          {!loading && !isAuthed ? (
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
            >
              Log in
            </Link>
          ) : null}

          {!loading && isAuthed ? (
            <button
              onClick={handleLogout}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          ) : null}

          {/* Keep demo button */}
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
