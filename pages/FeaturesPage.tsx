import React from 'react';
import { useDocumentTitle } from '../../src/hooks/useDocumentTitle';

export default function FeaturesPage() {
  useDocumentTitle('Features');

  return (
    <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
      <div className="text-center mb-24 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
          Features
        </h1>
        <p className="text-xl text-secondary max-w-2xl mx-auto">
          Everything you need for professional CAD viewing and measurement.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="glass-panel p-8 text-center animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-overlay flex items-center justify-center">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">
              Feature {i + 1}
            </h3>
            <p className="text-secondary">
              Placeholder feature description coming soon.
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-24 animate-slide-up">
        <p className="text-lg text-secondary mb-8">
          Coming in Section 06
        </p>
      </div>
    </div>
  );
}

