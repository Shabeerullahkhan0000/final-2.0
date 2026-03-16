import { useState } from 'react';

export default function AdminSidebar() {
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <div className="w-64 bg-surface border-r border-subtle flex flex-col">
      <div className="p-6 border-b border-subtle flex items-center gap-3">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 className="text-lg font-semibold text-primary">Admin Panel</h2>
      </div>
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <button className={`w-full text-left p-3 rounded-lg flex items-center gap-3 ${activeItem === 'dashboard' ? 'bg-accent text-accent-foreground font-medium' : 'hover:bg-overlay'}`} onClick={() => setActiveItem('dashboard')}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Dashboard
        </button>
        <button className={`w-full text-left p-3 rounded-lg flex items-center gap-3 ${activeItem === 'users' ? 'bg-accent text-accent-foreground font-medium' : 'hover:bg-overlay'}`} onClick={() => setActiveItem('users')}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          Users
        </button>
        <button className={`w-full text-left p-3 rounded-lg flex items-center gap-3 ${activeItem === 'payments' ? 'bg-accent text-accent-foreground font-medium' : 'hover:bg-overlay'}`} onClick={() => setActiveItem('payments')}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08 .402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Payments
        </button>
        <button className={`w-full text-left p-3 rounded-lg flex items-center gap-3 ${activeItem === 'analytics' ? 'bg-accent text-accent-foreground font-medium' : 'hover:bg-overlay'}`} onClick={() => setActiveItem('analytics')}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Analytics
        </button>
      </nav>
    </div>
  );
}

