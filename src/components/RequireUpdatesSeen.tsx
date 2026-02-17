import { Navigate } from 'react-router-dom';

export default function RequireUpdatesSeen({ children }: { children: React.ReactNode }) {
  const seen = localStorage.getItem('payflow_updates_seen') === 'true';

  if (!seen) return <Navigate to="/updates" replace />;

  return <>{children}</>;
}
