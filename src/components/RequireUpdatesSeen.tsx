// src/components/RequireUpdatesSeen.tsx
import { Navigate } from 'react-router-dom';

export default function RequireUpdatesSeen({ children }: { children: JSX.Element }) {
  const seen = sessionStorage.getItem('payflow_seen_updates') === 'true';

  if (!seen) {
    return <Navigate to="/updates" replace />;
  }

  return children;
}
