import Sidebar from './_components/Sidebar';
import Navbar from './_components/Navbar';
import OrgSidebar from './_components/OrgSidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-16 h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}