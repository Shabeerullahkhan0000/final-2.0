import { Outlet } from 'react-router-dom';
import TopNav from '../components/navigation/TopNav';
import Footer from '../components/navigation/Footer';

export default function PublicLayout() {
  return (
    <div className="public-layout min-h-screen flex flex-col bg-bg-base text-text-primary">
      <TopNav variant="public" />
      <main className="public-main flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
