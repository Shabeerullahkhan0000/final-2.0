import React from 'react';
import { useDocumentTitle } from '../../src/hooks/useDocumentTitle';

export default function AboutPage() {
  useDocumentTitle('About Us');

  return (
    <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-16 animate-fade-in">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          About CAD Viewer Pro
        </h1>
        <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
          Built for engineers who need professional CAD viewing without desktop software.
        </p>
      </div>
      <div className="glass-panel p-12 rounded-2xl text-secondary space-y-8 animate-scale-in">
        <h2 className="text-2xl font-semibold text-primary">
          Our Mission
        </h2>
        <p>
          Placeholder content for About page. Full team, story, values coming in Section 08.
        </p>
        <h2 className="text-2xl font-semibold text-primary">
          Get Involved
        </h2>
        <p>
          Join 10,000+ engineers using CAD Viewer Pro daily.
        </p>
      </div>
    </div>
  );
}

