import React from 'react';
import { useDocumentTitle } from '../../src/hooks/useDocumentTitle';

export default function PricingPage() {
  useDocumentTitle('Pricing');

  const plans = [
    {
      name: 'Free',
      price: '$0',
      badge: 'badge-free',
      features: ['DXF & PDF viewing', 'Basic measurements', '5 files', '1GB storage', 'Community support'],
      popular: false,
    },
    {
      name: 'Essential',
      price: '$19/mo',
      badge: 'badge-essential',
      features: ['DWG viewing', 'Advanced measurements', 'Unlimited files', '10GB storage', 'Email support'],
      popular: true,
    },
    {
      name: 'Performance',
      price: '$49/mo',
      badge: 'badge-performance',
      features: ['Team collaboration', 'Advanced annotations', 'Unlimited storage', 'Priority support', 'API access'],
      popular: false,
    },
  ];

  return (
    <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
      <div className="text-center mb-24 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
          Simple pricing
        </h1>
        <p className="text-xl text-secondary max-w-2xl mx-auto mb-8">
          Choose the plan that's right for your workflow.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {plans.map((plan, i) => (
          <div key={plan.name} className={`glass-panel p-8 rounded-2xl border-2 ${plan.popular ? 'border-accent shadow-accent ring-4 ring-accent-glow/50' : ''} animate-scale-in`} style={{ animationDelay: `${i * 100}ms` }}>
            <span className={`inline-block ${plan.badge} mb-4`}>{plan.name}</span>
            <h3 className="text-4xl font-bold text-primary mb-8">{plan.price}</h3>
            <ul className="space-y-3 mb-12 text-left">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-3 text-secondary">
                  <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="btn btn-primary w-full py-4 font-semibold" disabled={!plan.popular}>
              {plan.popular ? 'Most popular' : 'Get started'}
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-24 p-8 bg-elevated rounded-2xl animate-slide-up">
        <h3 className="text-2xl font-semibold text-primary mb-4">
          Need Enterprise?
        </h3>
        <p className="text-secondary mb-6 max-w-md mx-auto">
          Custom plans for teams and enterprises.
        </p>
        <a href="/contact" className="btn btn-ghost border-2 border-accent text-accent hover:bg-accent hover:text-white">
          Contact sales
        </a>
      </div>
      <div className="text-center mt-24 animate-slide-up">
        <p className="text-lg text-secondary">
          Coming in Section 07
        </p>
      </div>
    </div>
  );
}

