import React, { useState } from 'react';
import './Pricing.css';

const pricingPlans = [
  {
    name: 'Free',
    description: 'Perfect for getting started and exploring Flashh.',
    price: '$0',
    period: '/month',
    features: ['5 workflows', 'Basic integrations', 'Community support', '1 user', 'Community access']
  },
  {
    name: 'Pro',
    description: 'For professionals who need more power and flexibility.',
    price: '$29',
    period: '/month',
    popular: true,
    features: ['Unlimited workflows', 'All 100+ integrations', 'Priority email support', 'Up to 10 users', 'Advanced analytics', 'Custom branding']
  },
  {
    name: 'Enterprise',
    description: 'For teams that need advanced security and control.',
    price: 'Custom',
    period: '',
    features: ['Everything in Pro', 'SSO & SAML', 'Dedicated account manager', 'SLA guarantee', 'Custom AI models', 'On-premise deployment', 'Audit logs']
  }
];

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" aria-label="Pricing">
      <div className="container">
        <div className="section-header scroll-reveal">
          <span className="section-badge">Pricing</span>
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="pricing-toggle scroll-reveal">
          <span style={{ opacity: annual ? 0.5 : 1 }}>Monthly</span>
          <div className={`toggle-switch ${annual ? 'active' : ''}`} onClick={() => setAnnual(!annual)}></div>
          <span style={{ opacity: annual ? 1 : 0.5 }}>
            Annual <span className="save-badge">Save 20%</span>
          </span>
        </div>

        <div className="pricing-grid stagger-children scroll-reveal">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing-card card-hover ${plan.popular ? 'featured' : ''}`}>
              {plan.popular && <span className="pricing-popular">Most Popular</span>}
              <h3 className="pricing-name">{plan.name}</h3>
              <p className="pricing-description">{plan.description}</p>
              <div className="pricing-price">
                <span className="pricing-amount">{plan.price}</span>
                <span className="pricing-period">{plan.period}</span>
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="pricing-feature">{feature}</li>
                ))}
              </ul>
              <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}>
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started Free'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;