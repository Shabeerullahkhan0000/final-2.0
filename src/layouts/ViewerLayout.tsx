import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function ViewerLayout() {
  const navigate = useNavigate();
  const { fileId } = useParams();

  useEffect(() => {
    // Placeholder auth check
    const isAuthenticated = localStorage.getItem('auth') === 'true';
    if (!isAuthenticated || !fileId) {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate, fileId]);

  return (
    <div className="viewer-layout w-screen h-screen bg-bg-base overflow-hidden relative">
      <Outlet />
    </div>
  );
}

