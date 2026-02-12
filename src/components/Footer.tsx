import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <Logo size="sm" />
          <p className="mt-3 text-sm text-slate-600">
            Stop chasing payments. Get paid automatically.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <div className="font-semibold text-slate-900">Product</div>
            <div className="mt-2 flex flex-col gap-2 text-slate-600">
              <Link className="hover:text-slate-900" to="/demo">
                Demo
              </Link>
              <Link className="hover:text-slate-900" to="/pricing">
                Pricing
              </Link>
              <Link className="hover:text-slate-900" to="/dashboard">
                Dashboard
              </Link>
            </div>
          </div>
          <div>
            <div className="font-semibold text-slate-900">Company</div>
            <div className="mt-2 flex flex-col gap-2 text-slate-600">
              <Link className="hover:text-slate-900" to="/onboarding">
                Early Access
              </Link>
              <a className="hover:text-slate-900" href="#security">
                Security
              </a>
              <a className="hover:text-slate-900" href="#privacy">
                Privacy
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="font-semibold text-slate-900">Get updates</div>
          <p className="mt-2 text-sm text-slate-600">
            Join the early access list to get product updates and launch invites.
          </p>
          <form
            className="mt-3 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const email = new FormData(form).get('email');
              if (typeof email === 'string' && email.trim()) {
                alert(`Thanks! We'll reach out at ${email}.`);
                form.reset();
              }
            }}
          >
            <input
              name="email"
              type="email"
              required
              placeholder="you@business.com"
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-teal-500/40"
            />
            <button
              type="submit"
              className="rounded-lg bg-teal-500 px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-200/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} PayFlow Autopilot. All rights reserved.</div>
          <div className="flex gap-4">
            <a className="hover:text-slate-900" href="#terms">
              Terms
            </a>
            <a className="hover:text-slate-900" href="#privacy">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
