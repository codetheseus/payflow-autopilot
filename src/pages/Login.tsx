import { useMemo, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ArrowRight, Lock, Mail } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [remember, setRemember] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // If you ever pass a "from" route, we’ll still support it.
  // But default is the dashboard.
  const from = useMemo(() => {
    const state = location.state as any;
    return state?.from?.pathname || '/dashboard';
  }, [location.state]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // Basic validation (real auth comes with Supabase later)
    if (!email.trim() || !password.trim()) {
      setError('Please enter your email and password.');
      return;
    }

    // ✅ Temporary auth flag
    localStorage.setItem('payflow_authed', 'true');

    // Optional “remember” behaviour (still localStorage for now)
    if (remember) {
      localStorage.setItem('payflow_user_email', email.trim());
    } else {
      localStorage.removeItem('payflow_user_email');
    }

    // ✅ Always land in the product (dashboard)
    navigate(from, { replace: true });
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="mx-auto max-w-md">
        <div className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-sm">
          <div className="mb-6">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
              Welcome back
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-slate-900">
              Log in to PayFlow
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Access updates, setup steps, and your dashboard.
            </p>
          </div>

          {error ? (
            <div className="mb-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
              {error}
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-900">Email</span>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-teal-500/40">
                <Mail className="h-4 w-4 text-slate-500" />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="you@company.com"
                  className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                  autoComplete="email"
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-900">Password</span>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-teal-500/40">
                <Lock className="h-4 w-4 text-slate-500" />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                  autoComplete="current-password"
                />
              </div>
            </label>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500/40"
                />
                Remember me
              </label>

              <button
                type="button"
                onClick={() => alert('Password reset will be enabled with Supabase Auth.')}
                className="text-sm font-semibold text-slate-700 hover:text-slate-900"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
            >
              Log in <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-600">
            New here?{' '}
            <Link to="/updates" className="font-semibold text-slate-900 hover:underline">
              View Updates & Overview
            </Link>
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-slate-500">
          Temporary login for MVP. We’ll add Supabase Auth next.
        </div>
      </div>
    </div>
  );
}
