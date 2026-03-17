import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import { Suspense } from 'react';
const lazy = React.lazy;

const PublicLayout = lazy(() => import('../layouts/PublicLayout'));
const AppLayout = lazy(() => import('../layouts/AppLayout'));
const AdminLayout = lazy(() => import('../layouts/AdminLayout'));
const ViewerLayout = lazy(() => import('../layouts/ViewerLayout'));

// Public pages
const HomePage = lazy(() => import('../../pages/HomePage'));
const FeaturesPage = lazy(() => import('../../pages/FeaturesPage'));
const PricingPage = lazy(() => import('../../pages/PricingPage'));
const AboutPage = lazy(() => import('../../pages/AboutPage'));
const FAQPage = lazy(() => import('../../pages/FAQPage'));
const BlogIndexPage = lazy(() => import('../../pages/BlogIndexPage'));
const BlogPostPage = lazy(() => import('../../pages/BlogPostPage'));
const DownloadPage = lazy(() => import('../../pages/DownloadPage'));
const PrivacyPage = lazy(() => import('../../pages/PrivacyPage'));
const TermsPage = lazy(() => import('../../pages/TermsPage'));

// SEO landing pages
const DWGViewerPage = lazy(() => import('../../pages/seo/DWGViewerPage'));
const DXFViewerPage = lazy(() => import('../../pages/seo/DXFViewerPage'));
const MeasurementToolPage = lazy(() => import('../../pages/seo/MeasurementToolPage'));
const OnlineCADViewerPage = lazy(() => import('../../pages/seo/OnlineCADViewerPage'));

// App pages
const DashboardPage = lazy(() => import('../../pages/app/DashboardPage'));
const AppSettingsPage = lazy(() => import('../../pages/app/SettingsPage'));
const BillingPage = lazy(() => import('../../pages/app/BillingPage'));

// Admin pages
const AdminDashboardPage = lazy(() => import('../../pages/admin/AdminDashboard'));
const AdminUsersPage = lazy(() => import('../../pages/admin/AdminUsers'));
const AdminPaymentsPage = lazy(() => import('../../pages/admin/AdminPayments'));
const AdminAnalyticsPage = lazy(() => import('../../pages/admin/AdminAnalytics'));
const AdminContentPage = lazy(() => import('../../pages/admin/AdminContent'));
const AdminSupportPage = lazy(() => import('../../pages/admin/AdminSupport'));

// Error pages
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));
const UnauthorizedPage = lazy(() => import('../../pages/UnauthorizedPage'));

const App = lazy(() => import('../App'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'features', element: <FeaturesPage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'faq', element: <FAQPage /> },
      { path: 'blog', element: <BlogIndexPage /> },
      { path: 'blog/:slug', element: <BlogPostPage /> },
      { path: 'download', element: <DownloadPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: 'terms', element: <TermsPage /> },
      // SEO pages
      { path: 'dwg-viewer', element: <DWGViewerPage /> },
      { path: 'dxf-viewer', element: <DXFViewerPage /> },
      { path: 'cad-measurement-tool', element: <MeasurementToolPage /> },
      { path: 'online-cad-viewer', element: <OnlineCADViewerPage /> },
    ],
  },
  {
    path: '/dashboard',
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'viewer/:fileId', element: <ViewerLayout />,
        children: [
          { index: true, element: <App /> }, // CAD App at /dashboard/viewer/:fileId
        ]
      },
      { path: 'settings', element: <AppSettingsPage /> },
      { path: 'billing', element: <BillingPage /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminDashboardPage /> },
      { path: 'users', element: <AdminUsersPage /> },
      { path: 'payments', element: <AdminPaymentsPage /> },
      { path: 'analytics', element: <AdminAnalyticsPage /> },
      { path: 'content', element: <AdminContentPage /> },
      { path: 'support', element: <AdminSupportPage /> },
    ],
  },
  {
    path: '/unauthorized',
    element: <UnauthorizedPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  },
];

export const router = createBrowserRouter(routes);

