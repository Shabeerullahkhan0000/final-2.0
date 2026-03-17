import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '2,400+', label: 'Engineers using CadViewer Pro' },
  { value: '50ms', label: 'Average file open time' },
  { value: '99.9%', label: 'Uptime reliability' },
  { value: '4.9/5', label: 'Average user rating' },
];

const testimonials = [
  {
    quote: 'The DWG rendering is pixel-perfect. I can review drawings from clients without opening AutoCAD.',
    author: 'James K.',
    role: 'Senior Structural Engineer',
    company: 'BuildTech Solutions',
    avatar: 'JK',
  },
  {
    quote: 'Sharing drawings with contractors is now instant. The view-only links work perfectly on mobile.',
    author: 'Sarah M.',
    role: 'Project Architect',
    company: 'Studio Milano',
    avatar: 'SM',
  },
  {
    quote: 'We handle hundreds of DXF files weekly. CadViewer Pro handles them all without issues.',
    author: 'Ahmed R.',
    role: 'CAD Manager',
    company: 'Gulf Engineering Group',
    avatar: 'AR',
  },
];

export const SocialProofSection: React.FC = () => {
  return (
    <section>
      {/* Stats strip */}
      <div className="bg-surface border-t border-b border-border-subtle py-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-3xl lg:text-4xl font-display font-black text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary font-mono">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24 lg:py-32 bg-surface">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-elevated border border-border-subtle rounded-3xl p-8 h-full hover:border-border hover:shadow-lg transition-all duration-200"
              >
                <div className="text-4xl text-accent mb-6 leading-[1]">„</div>
                <blockquote className="text-text-primary text-base leading-7 font-ui mb-6">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-subtle text-accent font-semibold rounded-2xl flex items-center justify-center text-lg flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

