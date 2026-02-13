import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { TopNav } from './components/TopNav';
import { Footer } from './components/Footer';

import Landing from './pages/Landing';
import Pricing from './pages/Pricing';
import Demo from './pages/Demo';
import Onboarding from './pages/Onboarding';
import Login from './pages/Login';
import Updates from './pages/Updates';

import { DashboardShell } from './components/DashboardShell';
import DashboardHome from './pages/dashboard/DashboardHome';
import Automations from './pages/dashboard/Automations';
import Customers from './pages/dashboard/Customers';
import Links from './pages/dashboard/Links';
import Reports from './pages/dashboard/Reports';
import Settings from './pages/dashboard/Settings';

function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F6F8FB] text-slate-900">
      <TopNav />
      {children}
      <Footer />
    </div>
  );
}

// Simple dashboard protection
function RequireAuth({ children }: { children: JSX.Element }) {
  const isAuthed = localStorage.getItem('payflow_authed') === 'true';

  if (!isAuthed) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root now goes to Updates first */}
        <Route path="/" element={<Navigate to="/updates" replace />} />

        <Route
          path="/updates"
          element={
            <MarketingLayout>
              <Updates />
            </MarketingLayout>
          }
        />

        <Route
          path="/login"
          element={
            <MarketingLayout>
              <Login />
            </MarketingLayout>
          }
        />

        <Route
          path="/pricing"
          element={
            <MarketingLayout>
              <Pricing />
            </MarketingLayout>
          }
        />

        <Route
          path="/demo"
          element={
            <MarketingLayout>
              <Demo />
            </MarketingLayout>
          }
        />

        <Route
          path="/onboarding"
          element={
            <MarketingLayout>
              <Onboarding />
            </MarketingLayout>
          }
        />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashboardShell />
            </RequireAuth>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="automations" element={<Automations />} />
          <Route path="customers" element={<Customers />} />
          <Route path="links" element={<Links />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<Navigate to="/updates" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
