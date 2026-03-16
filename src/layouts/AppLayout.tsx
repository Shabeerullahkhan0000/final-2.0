import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import TopNav from '../components/navigation/TopNav';
import AppSidebar from '../components/AppSidebar'; // to be created later

export default function AppLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Placeholder auth check
    const isAuthenticated = localStorage.getItem('auth') === 'true'; // placeholder
    if (!isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  return (
    <div className="app-layout min-h-screen bg-bg-base">
      <TopNav variant="app" />
      <div className="app-body flex">
        <AppSidebar />
        <main className="app-main flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
