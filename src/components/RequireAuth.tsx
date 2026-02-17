import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const { loading, isAuthed } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold text-slate-900">Loading…</div>
          <div className="mt-1 text-sm text-slate-600">Checking your session</div>
        </div>
      </div>
    );
  }

  if (!isAuthed) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}
