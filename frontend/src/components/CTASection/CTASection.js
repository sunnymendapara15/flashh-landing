import React, { useState } from 'react';
import './CTASection.css';

const CTASection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for signing up! We\'ll be in touch soon.');
    setEmail('');
  };

  return (
    <section className="cta-section" aria-label="Call to action">
      <div className="cta-bg-orb cta-bg-orb-1"></div>
      <div className="cta-bg-orb cta-bg-orb-2"></div>

      <div className="container cta-content scroll-reveal">
        <h2 className="cta-title">
          Your Next Great Workflow<br />
          <span className="gradient-text">Starts With a Sentence</span>
        </h2>

        <p className="cta-subtitle">
          Join thousands of teams already building faster with Flashh AI. 
          Free to start, powerful when you need it.
        </p>

        <form className="cta-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            className="cta-input"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary" style={{padding: '16px 32px'}}>
            Get Early Access
          </button>
        </form>

        <p className="cta-note">Free forever plan available • No credit card required</p>
      </div>
    </section>
  );
};

export default CTASection;