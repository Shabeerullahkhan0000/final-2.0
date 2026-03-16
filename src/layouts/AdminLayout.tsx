import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import TopNav from '../components/navigation/TopNav';
import AdminSidebar from '../components/AdminSidebar'; // to be created later

export default function AdminLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Placeholder super_admin check
    const userRole = localStorage.getItem('role') ; // placeholder
    if (userRole !== 'super_admin') {
      navigate('/unauthorized', { replace: true });
    }
  }, [navigate]);

  return (
    <div className="admin-layout min-h-screen bg-bg-base">
      <TopNav variant="app" />
      <div className="admin-body flex">
        <AdminSidebar />
        <main className="admin-main flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

