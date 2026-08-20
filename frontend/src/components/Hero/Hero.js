import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" aria-label="Hero">
      <div className="hero-bg-orbs">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-badge">🚀 Now in Public Beta</div>

        <h1 className="hero-title">
          Describe Your Idea.<br />
          <span className="gradient-text">Watch It Come to Life.</span>
        </h1>

        <p className="hero-subtitle">
          Turn natural conversations into powerful AI-powered workflows — no code required. 
          Just tell Flashh what you need, and watch it build.
        </p>

        <div className="hero-cta-group">
          <button className="btn btn-primary" style={{padding: '16px 40px', fontSize: '18px'}}>
            Start Building Free →
          </button>
          <button className="btn btn-secondary" style={{padding: '16px 40px', fontSize: '18px'}}>
            ▶ Watch Demo
          </button>
        </div>

        <div className="hero-preview scroll-reveal">
          <div className="preview-window glass">
            <div className="preview-header">
              <span className="preview-dot"></span>
              <span className="preview-dot"></span>
              <span className="preview-dot"></span>
            </div>
            <div className="preview-text">
              <span style={{color: '#A29BFE'}}>'Create a workflow that:</span><br />
              <span style={{color: '#dfe6e9'}}>  1. Monitors incoming form submissions</span><br />
              <span style={{color: '#dfe6e9'}}>  2. Saves data to Google Sheets</span><br />
              <span style={{color: '#dfe6e9'}}>  3. Sends Slack notification to #leads</span><br />
              <span style={{color: '#dfe6e9'}}>  4. Auto-generates a confirmation email</span><br />
              <span style={{color: '#A29BFE'}}>'</span><span className="preview-cursor"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;