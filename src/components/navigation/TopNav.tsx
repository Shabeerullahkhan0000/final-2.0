import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from './MobileMenu';

interface TopNavProps {
  variant?: 'public' | 'app';
}

export default function TopNav({ variant = 'public' }: TopNavProps) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isApp = variant === 'app';

  return (
    <>
      <nav className="toolbar bg-surface border-b border-subtle shadow-sm sticky top-0 z-[var(--z-toolbar)] backdrop-blur-sm">
        <div className="flex items-center justify-between h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to={isApp ? '/dashboard' : '/'} className="flex items-center gap-2 text-xl font-semibold text-primary hover:opacity-80 transition-base">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 .68 0 1.36-.09 2-.26V13c0-1.38.47-2.56 1.25-3.5.75-.94 1.75-1.5 2.75-1.5s2  .56 2.75 1.5c .78 .94 1.25 2.12 1.25 3.5v9.74c-.64.17-1.32.26-2 .26 -5.16-1.26 -9 -5.45 -9 -11V7z"/>
            </svg>
            <span>CAD Viewer Pro</span>
          </Link>

          {/* Nav links - public only */}
          {!isApp && (
            <div className="hidden md:flex items-center gap-6">
              <Link to="/features" className="text-secondary hover:text-primary transition-base">Features</Link>
              <Link to="/pricing" className="text-secondary hover:text-primary transition-base">Pricing</Link>
              <Link to="/about" className="text-secondary hover:text-primary transition-base">About</Link>
              <Link to="/blog" className="text-secondary hover:text-primary transition-base">Blog</Link>
            </div>
          )}

          {/* Right side */}
          <div className="flex items-center gap-2">
            {isApp ? (
              <>
                <button className="btn btn-primary">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Open File
                </button>
                <button className="btn btn-icon relative">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="absolute -top-1 -right-1 badge bg-danger text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                </button>
                <div className="flex items-center gap-2">
                  <button className="btn btn-icon">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </button>
                  <div className="dropdown-arrow w-2 h-2 border-r-2 border-b-2 border-white rotate-45 ml-auto mr-2 opacity-50"></div>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-ghost">Sign in</Link>
                <Link to="/signup" className="btn btn-primary">Get started</Link>
              </>
            )}
            <button className="md:hidden btn btn-icon ml-2" onClick={() => setIsMenuOpen(true)}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}

