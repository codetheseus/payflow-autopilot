// src/App.tsx
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

import RequireAuth from './components/RequireAuth';
import RequireUpdatesSeen from './components/RequireUpdatesSeen';

function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F6F8FB] text-slate-900">
      <TopNav />
      {children}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Marketing homepage */}
        <Route
          path="/"
          element={
            <MarketingLayout>
              <Landing />
            </MarketingLayout>
          }
        />

        {/* ✅ Public marketing pages */}
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

        {/* ✅ Login (public) */}
        <Route
          path="/login"
          element={
            <MarketingLayout>
              <Login />
            </MarketingLayout>
          }
        />

        {/* ✅ Updates (must be logged in) */}
        <Route
          path="/updates"
          element={
            <RequireAuth>
              <MarketingLayout>
                <Updates />
              </MarketingLayout>
            </RequireAuth>
          }
        />

        {/* ✅ Dashboard (must be logged in + must see /updates first) */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <RequireUpdatesSeen>
                <DashboardShell />
              </RequireUpdatesSeen>
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

        {/* ✅ Unknown routes -> marketing homepage */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
