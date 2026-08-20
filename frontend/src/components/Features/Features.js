import React from 'react';
import './Features.css';

const features = [
  {
    icon: '💬',
    title: 'Natural Language Engine',
    description: 'Speak your idea in plain English. Our AI understands context and builds workflows that match your intent perfectly.'
  },
  {
    icon: '🎨',
    title: 'Visual Workflow Builder',
    description: 'Refine and customize your workflow with an intuitive drag-and-drop interface alongside AI-generated suggestions.'
  },
  {
    icon: '🔗',
    title: '100+ Integrations',
    description: 'Connect Slack, Gmail, Notion, Google Sheets, Jira, GitHub, and 100+ more tools your team already uses daily.'
  },
  {
    icon: '⚡',
    title: 'AI-Powered Automation',
    description: 'Smart triggers, conditional logic, error handling, and auto-optimization — all powered by advanced AI models.'
  },
  {
    icon: '👥',
    title: 'Real-Time Collaboration',
    description: 'Build workflows together with your team live. See changes instantly, leave feedback, and iterate as a unit.'
  },
  {
    icon: '🚀',
    title: 'Deploy Anywhere',
    description: 'Run locally, deploy to the cloud, or embed directly in your apps. One workflow, infinite possibilities.'
  }
];

const Features = () => {
  return (
    <section id="features" aria-label="Features">
      <div className="container">
        <div className="section-header scroll-reveal">
          <span className="section-badge">Features</span>
          <h2 className="section-title">Everything You Need to Automate Work</h2>
          <p className="section-subtitle">
            From idea to automation in minutes. Flashh AI combines natural language understanding 
            with powerful visual tools to make workflow creation effortless.
          </p>
        </div>

        <div className="features-grid stagger-children scroll-reveal">
          {features.map((feature, index) => (
            <div key={index} className="feature-card card-hover">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;