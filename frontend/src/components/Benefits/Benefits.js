import React from 'react';
import './Benefits.css';

const benefits = [
  {
    icon: '🚀',
    title: 'Lightning Fast',
    description: 'Build workflows in minutes, not days. What used to take hours of coding now takes a conversation.'
  },
  {
    icon: '💡',
    title: 'No Code Required',
    description: 'You don't need to be a developer. If you can describe it, Flashh can build it.'
  },
  {
    icon: '🎯',
    title: 'Enterprise Ready',
    description: 'Built with security, scalability, and compliance in mind. Trusted by teams at every scale.'
  },
  {
    icon: '🔄',
    title: 'Always Learning',
    description: 'Our AI gets smarter with every interaction, continuously improving your workflow suggestions.'
  }
];

const Benefits = () => {
  return (
    <section id="benefits" aria-label="Benefits">
      <div className="container">
        <div className="section-header scroll-reveal">
          <span className="section-badge">Why Flashh</span>
          <h2 className="section-title">Built for How You Actually Work</h2>
          <p className="section-subtitle">
            Whether you're a startup founder or an enterprise architect, Flashh adapts to your workflow.
          </p>
        </div>

        <div className="benefits-grid stagger-children scroll-reveal">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card card-hover glass">
              <span className="benefit-icon-large">{benefit.icon}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;