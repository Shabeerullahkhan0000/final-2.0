import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Essential',
    price: '$9',
    priceSuffix: '/mo',
    description: 'Perfect for freelancers and small teams',
    features: ['5GB storage', 'DXF + PDF support', 'Basic measurement tools', 'Email support'],
    cta: 'Get started free',
    popular: false,
  },
  {
    name: 'Performance',
    price: '$29',
    priceSuffix: '/mo',
    description: 'Most teams choose this',
    features: ['25GB storage', 'DWG + DXF + PDF', 'Full measurement tools', 'Cloud sync (Drive/Dropbox)', 'Priority support', 'Team sharing'],
    cta: 'Most popular',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    priceSuffix: '',
    description: 'For large teams & enterprises',
    features: ['Unlimited storage', 'All formats + API access', 'SSO + team management', 'Dedicated support', 'Custom integrations', 'SLA guarantee'],
    cta: 'Contact sales',
    popular: false,
  },
];

export const PricingTeaser: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-display font-black text-text-primary mb-6"
        >
          Simple, transparent pricing
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl text-text-secondary mb-20"
        >
          Start free. Upgrade when you need more.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "border rounded-3xl p-8 lg:p-10 text-center group hover:shadow-xl transition-all duration-300 h-full flex flex-col",
                plan.popular ? 'border-accent scale-[1.02] ring-4 ring-accent/20 bg-elevated shadow-2xl shadow-accent/10 relative z-10' : 'border-border-subtle bg-elevated'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="accent" className="font-mono text-xs px-3 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                {plan.name}
              </h3>
              <div className="text-5xl lg:text-6xl font-display font-black text-accent mb-4">
                {plan.price}
                <span className="text-2xl text-text-secondary font-normal">{plan.priceSuffix}</span>
              </div>
              <p className="text-text-secondary mb-8">{plan.description}</p>
              <div className="flex-1 mb-8 space-y-3">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-3 text-text-primary">
                    <svg className="w-5 h-5 text-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
              <Button size="lg" variant="primary" fullWidth className="mb-4">
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Link 
            to="/pricing"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
          >
            See full pricing details →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

