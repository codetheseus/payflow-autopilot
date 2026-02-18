import { Navigate } from 'react-router-dom';

export default function RequireUpdatesSeen({
  children,
}: {
  children: React.ReactNode;
}) {
  const seen = sessionStorage.getItem('payflow_seen_updates') === 'true';

  if (!seen) {
    return <Navigate to="/updates" replace />;
  }

  return <>{children}</>;
}
