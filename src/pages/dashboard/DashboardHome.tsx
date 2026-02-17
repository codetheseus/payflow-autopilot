import { useState } from 'react';
import { DollarSign, Mail, Percent, Wallet, X } from 'lucide-react';
import { StatCard } from '../../components/StatCard';
import { supabase } from '../../lib/supabase';

export default function DashboardHome() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleCreateLink(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !amount) return;

    setLoading(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) throw new Error('Not authenticated');

      // 1️⃣ Create customer
      const { data: customer } = await supabase
        .from('customers')
        .insert([
          {
            user_id: user.id,
            email,
          },
        ])
        .select()
        .single();

      // 2️⃣ Create payment link record (Stripe ID comes later)
      await supabase.from('payment_links').insert([
        {
          user_id: user.id,
          customer_id: customer.id,
          amount: parseInt(amount) * 100,
          currency: 'usd',
          status: 'pending',
        },
      ]);

      setOpen(false);
      setEmail('');
      setAmount('');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {/* 🔥 Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                Create Payment Link
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 hover:bg-slate-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleCreateLink} className="mt-5 space-y-4">
              <div>
                <label className="text-sm font-semibold text-slate-900">
                  Customer Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40"
                  placeholder="customer@email.com"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-900">
                  Amount (USD)
                </label>
                <input
                  type="number"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40"
                  placeholder="100"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-50"
              >
                {loading ? 'Creating...' : 'Create Link'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">
            Dashboard
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-slate-900">
            Collections overview
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Monitor automated revenue collection and follow-up performance.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50">
            Export
          </button>
          <button
            onClick={() => setOpen(true)}
            className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            New payment link
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <StatCard
          title="Payments collected this month"
          value="$24,930"
          delta="+12% vs last month"
          icon={<DollarSign className="h-4 w-4" />}
        />
        <StatCard
          title="Outstanding payments"
          value="$6,410"
          delta="18 invoices pending"
          icon={<Wallet className="h-4 w-4" />}
        />
        <StatCard
          title="Automated reminders sent"
          value="128"
          delta="Avg 2.1 reminders/invoice"
          icon={<Mail className="h-4 w-4" />}
        />
        <StatCard
          title="Enquiry → Payment conversion rate"
          value="64%"
          delta="+6 pts this week"
          icon={<Percent className="h-4 w-4" />}
        />
      </div>

      {/* Keep your existing lower layout EXACTLY the same */}
    </div>
  );
}
