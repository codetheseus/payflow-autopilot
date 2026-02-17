import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { ArrowRight, Lock, Mail } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;
      }

      navigate('/updates');
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="mx-auto max-w-md">
        <div className="rounded-3xl border border-slate-200/70 bg-white p-7 shadow-sm">
          <div className="mb-6">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
              {isSignUp ? 'Create Account' : 'Welcome back'}
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-slate-900">
              {isSignUp ? 'Sign up for PayFlow' : 'Log in to PayFlow'}
            </h1>
            <p className="mt-2 text-sm text-slate-600">
              Revenue Collection Infrastructure for SMEs.
            </p>
          </div>

          {error && (
            <div className="mb-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-900">Email</span>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-teal-500/40">
                <Mail className="h-4 w-4 text-slate-500" />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
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
                  required
                  minLength={6}
                  className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
              </div>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 disabled:opacity-60"
            >
              {loading ? 'Processing...' : isSignUp ? 'Sign up' : 'Log in'}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-600">
            {isSignUp ? 'Already have an account?' : 'Don’t have an account?'}{' '}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="font-semibold text-slate-900 hover:underline"
            >
              {isSignUp ? 'Log in' : 'Sign up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
