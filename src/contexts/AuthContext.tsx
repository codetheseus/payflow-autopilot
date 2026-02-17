// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Session, User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

type Role = 'owner' | 'admin' | 'member' | 'guest';

type AuthContextValue = {
  loading: boolean;
  session: Session | null;
  user: User | null;
  isAuthed: boolean;
  role: Role;
  signOut: () => Promise<void>;
  refresh: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<Role>('guest');

  async function loadRole(u: User | null) {
    if (!u) {
      setRole('guest');
      return;
    }

    // MVP role logic:
    // 1) Prefer role from user metadata (if you set it later)
    // 2) Default to 'member'
    const metaRole = (u.user_metadata?.role as Role | undefined) ?? undefined;
    setRole(metaRole ?? 'member');

    // Later (real RBAC): fetch from a "profiles" table:
    // const { data } = await supabase.from('profiles').select('role').eq('id', u.id).single();
    // setRole((data?.role as Role) ?? 'member');
  }

  async function refresh() {
    setLoading(true);
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      // If something fails, fail safely to guest.
      setSession(null);
      setUser(null);
      setRole('guest');
      setLoading(false);
      return;
    }
    setSession(data.session ?? null);
    setUser(data.session?.user ?? null);
    await loadRole(data.session?.user ?? null);
    setLoading(false);
  }

  async function signOut() {
    await supabase.auth.signOut();
    setSession(null);
    setUser(null);
    setRole('guest');
  }

  useEffect(() => {
    // Initial session load
    refresh();

    // Listen for auth changes (login/logout/token refresh)
    const { data: sub } = supabase.auth.onAuthStateChange(async (_event, newSession) => {
      setSession(newSession ?? null);
      setUser(newSession?.user ?? null);
      await loadRole(newSession?.user ?? null);
      setLoading(false);
    });

    return () => {
      sub.subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      loading,
      session,
      user,
      isAuthed: !!session?.user,
      role,
      signOut,
      refresh,
    }),
    [loading, session, user, role]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>.');
  return ctx;
}
