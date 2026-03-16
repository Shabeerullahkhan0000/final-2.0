import React from 'react';
import { useDocumentTitle } from '../../src/hooks/useDocumentTitle';
import { Link } from 'react-router-dom';

export default function UnauthorizedPage() {
  useDocumentTitle('Unauthorized');

  return (
    <div className="flex-1 flex items-center justify-center min-h-[50vh] py-12 px-4">
      <div className="max-w-md w-full text-center space-y-8 animate-fade-in">
        <div className="text-primary">
          <div className="text-8xl font-black text-orange-400">401</div>
          <div className="text-2xl font-semibold mt-4">Unauthorized</div>
        </div>
        <p className="text-secondary text-lg leading-relaxed">
          You don't have permission to access this page.
        </p>
        <div className="space-y-3">
          <Link to="/" className="btn btn-primary block">
            Go Home
          </Link>
          <Link to="/login" className="btn btn-ghost block">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

