import React from 'react';
import { useDocumentTitle } from '../../src/hooks/useDocumentTitle';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  useDocumentTitle('Page Not Found');

  return (
    <div className="flex-1 flex items-center justify-center min-h-[50vh] py-12 px-4">
      <div className="max-w-md w-full text-center space-y-8 animate-fade-in">
        <div className="text-primary">
          <div className="text-8xl font-black">404</div>
          <div className="text-2xl font-semibold mt-4">Page Not Found</div>
        </div>
        <p className="text-secondary text-lg leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  );
}

