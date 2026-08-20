import React from 'react';
import './SocialProof.css';

const SocialProof = () => {
  const companies = ['Google', 'Microsoft', 'Stripe', 'Notion', 'Slack', 'Meta'];

  return (
    <section id="social-proof" aria-label="Trusted by companies">
      <div className="container">
        <p className="social-proof-title scroll-reveal">Trusted by innovators at</p>

        <div className="logo-strip stagger-children scroll-reveal">
          {companies.map((company) => (
            <span key={company} className="company-logo">{company}</span>
          ))}
        </div>

        <div className="stats-bar stagger-children scroll-reveal">
          <div className="stat-item">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Workflows Created</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Active Users</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">99%</span>
            <span className="stat-label">Satisfaction Rate</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-label">Integrations</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;