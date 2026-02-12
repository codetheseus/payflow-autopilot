import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export function DashboardShell() {
  return (
    <div className="min-h-[calc(100vh-0px)] bg-[#F6F8FB]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-[280px_1fr]">
        <div className="h-screen md:sticky md:top-0">
          <Sidebar />
        </div>
        <main className="min-h-screen px-4 py-6 md:px-8 md:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
