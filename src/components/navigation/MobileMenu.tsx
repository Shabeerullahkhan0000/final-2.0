import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleRouteChange = () => onClose();
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, [onClose]);

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className="fixed inset-0 z-[var(--z-modal)] bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="w-full max-w-sm h-full bg-surface border-r border-subtle"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={e => e.stopPropagation()}
        >
          {/* Logo */}
          <div className="p-6 border-b border-subtle flex items-center gap-2">
            <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 .68 0 1.36-.09 2-.26V13c0-1.38 .47-2.56 1.25-3.5 .75-.94 1.75-1.5 2.75-1.5s2 .56 2.75 1.5c .78 .94 1.25 2.12 1.25 3.5v9.74c-.64 .17-1.32 .26-2 .26 -5.16-1.26 -9-5.45 -9-11V7z"/>
            </svg>
            <span className="text-xl font-semibold text-primary">CAD Viewer Pro</span>
          </div>

          {/* Menu items */}
          <div className="flex flex-col h-full overflow-y-auto scrollable">
            <nav className="flex-1 p-6 space-y-2">
              <Link 
                to="/" 
                className="flex items-center gap-3 h-12 px-4 rounded-lg text-lg hover:bg-overlay hover:text-primary transition-base"
                onClick={onClose}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>
              <Link 
                to="/features" 
                className="flex items-center gap-3 h-12 px-4 rounded-lg text-lg hover:bg-overlay hover:text-primary transition-base"
                onClick={onClose}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Features
              </Link>
              <Link 
                to="/pricing" 
                className="flex items-center gap-3 h-12 px-4 rounded-lg text-lg hover:bg-overlay hover:text-primary transition-base"
                onClick={onClose}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08 .402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Pricing
              </Link>
              <Link 
                to="/about" 
                className="flex items-center gap-3 h-12 px-4 rounded-lg text-lg hover:bg-overlay hover:text-primary transition-base"
                onClick={onClose}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                About
              </Link>
              <Link 
                to="/blog" 
                className="flex items-center gap-3 h-12 px-4 rounded-lg text-lg hover:bg-overlay hover:text-primary transition-base"
                onClick={onClose}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Blog
              </Link>
            </nav>
            <div className="p-6 border-t border-subtle space-y-3">
              <Link 
                to="/login" 
                className="btn btn-ghost w-full justify-center"
                onClick={onClose}
              >
                Sign in
              </Link>
              <Link 
                to="/signup" 
                className="btn btn-primary w-full justify-center"
                onClick={onClose}
              >
                Get started
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

