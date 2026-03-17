import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

export const CTASection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setError('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setError('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (Math.random() > 0.1) {
      setStatus('success');
    } else {
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="bg-gradient-to-b from-surface to-base border-t border-border-subtle py-24 lg:py-32">
      <div className="max-w-2xl mx-auto px-4 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-display font-black text-text-primary mb-6"
        >
          Start viewing CAD files in 30 seconds
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl text-text-secondary mb-12"
        >
          Join 2,400+ engineers already using CadViewer Pro. No installation required.
        </motion.p>

        {status !== 'success' ? (
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex flex-col lg:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 px-4 lg:rounded-l-xl rounded-lg bg-input border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none text-text-primary placeholder-text-secondary transition-all"
              disabled={status === 'loading'}
            />
            <Button 
              type="submit" 
              size="lg" 
              variant="primary"
              className="lg:rounded-r-xl rounded-lg !px-8 lg:px-8"
              isLoading={status === 'loading'}
              disabled={status === 'loading'}
            >
              Start free trial
            </Button>
          </motion.form>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-2xl font-semibold text-accent mb-8"
          >
            🎉 Check your email to get started!
          </motion.div>
        )}

        {status === 'error' && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-danger text-sm mt-4"
          >
            {error}
          </motion.p>
        )}

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-text-secondary font-mono mt-6"
        >
          No credit card required · Free forever plan available
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs text-text-tertiary mt-3"
        >
          By signing up you agree to our Terms and Privacy Policy
        </motion.p>
      </div>
    </section>
  );
};

