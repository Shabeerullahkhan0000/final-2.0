import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Instant Rendering',
    description: 'Open DWG, DXF, and PDF files in seconds. No conversion, no waiting. Files under 5MB render in under 2 seconds.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 2C1.9 2 1 2.9 1 4V22L11.3 13H15C16.1 13 17 12.1 17 11V4C17 2.9 16.1 2 15 2H13Z" />
      </svg>
    ),
    accent: 'success',
  },
  {
    title: 'Precision Measurement',
    description: 'Auto and manual measurement tools with snap-to-point accuracy. Measure distances with engineering precision.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M19.64 19.64l1.41 1.41M2 6v2h2V6H2zM20 16v2h2v-2h-2zM6.34 17.66l-1.41 1.41M17.66 6.34l1.41 1.41" />
      </svg>
    ),
    accent: 'accent',
  },
  {
    title: 'Layer Management',
    description: 'Toggle, isolate, and inspect individual layers. Full control over drawing visibility just like desktop CAD.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    accent: 'accent',
  },
  {
    title: 'Cloud Storage',
    description: 'Save drawings to your account. Access from any device. Connect Google Drive, Dropbox, or OneDrive.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M2.01 20.53C2.96 20.32 3.21 20.32 4.02 20.18L12 20c1 0 2 .15 2.98.53" />
        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0v-8z" />
      </svg>
    ),
    accent: 'info',
  },
  {
    title: 'Share & Collaborate',
    description: 'Generate shareable links with view-only or annotate permissions. Password protection and expiry dates.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.199 13.511A2 2 0 0 1 14 12a2 2 0 0 1 1.798 1.139l.382 1.597A2 2 0 0 1 18 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m12 16 .5 2.5" />
        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 19v3" />
        <circle cx="18" cy="5" r="3" fill="currentColor" />
      </svg>
    ),
    accent: 'warning',
  },
  {
    title: 'Multi-Format Support',
    description: 'DWG (AutoCAD 2007-2024), ASCII and binary DXF, vector and raster PDFs. All rendered with pixel precision.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points="14 2 14 8 20 8" />
        <line stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" x1="12" y1="18" x2="12" y2="12" />
        <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="m9.09 9.09.02.02.02.02.02.02.02.02.02.02.02.02.02.02.02.02" />
      </svg>
    ),
    accent: 'success',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-24">
          <div className="font-mono text-sm tracking-wider text-accent uppercase mb-4">
            FEATURES
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-text-primary mb-6">
            Everything you need to work with CAD files
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Built for engineers, architects, and technical teams who need precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-surface border border-border-subtle rounded-3xl p-8 hover:border-default hover:-translate-y-2 transition-all duration-200 cursor-default h-full"
            >
              <div className={`w-16 h-16 rounded-2xl bg-${feature.accent}-subtle flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                {React.cloneElement(feature.icon as React.ReactElement, { className: `${feature.accent} w-5 h-5` })}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

