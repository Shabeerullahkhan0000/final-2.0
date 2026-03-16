import React from 'react';
import { useDocumentTitle } from '../../src/hooks/useDocumentTitle';

export default function HomePage() {
  useDocumentTitle('Home');

  return (
    <div className="flex-1 flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="flex-1 flex flex-col items-center justify-center py-24 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent mb-6 animate-fade-in">
          CAD Viewer Pro
        </h1>
        <p className="text-xl md:text-2xl text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
          Professional 2D CAD file viewer for DWG, DXF, and PDF files. 
          Measure, annotate, and collaborate in your browser.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a href="/signup" className="btn btn-primary text-lg py-4 px-8">
            Get started free
          </a>
          <a href="/features" className="btn btn-ghost text-lg py-4 px-8 border-2 border-text-secondary">
            View features
          </a>
        </div>
        <p className="text-lg text-secondary animate-slide-up">
          Coming in Section 05
        </p>
      </div>
    </div>
  );
}

