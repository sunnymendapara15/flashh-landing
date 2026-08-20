import React from 'react';
import './ProductShowcase.css';

const ProductShowcase = () => {
  return (
    <section id="showcase" aria-label="How it works">
      <div className="container">
        <div className="product-showcase-bg-orb"></div>

        <div className="showcase-grid">
          <div className="showcase-content scroll-reveal">
            <h2>
              Talk About Your Idea.<br />
              <span className="gradient-text">We Handle The Rest.</span>
            </h2>

            <p className="showcase-description">
              Just describe what you want in plain language. Flashh AI understands your intent, 
              builds the workflow, and lets you refine it visually — no code, no complexity.
            </p>

            <ul className="feature-list stagger-children scroll-reveal">
              <li className="feature-item">
                <span className="feature-check">✓</span>
                <div className="feature-item-text">
                  <strong>Instant Workflow Generation</strong>
                  <span>Describe your idea and get a working workflow in seconds</span>
                </div>
              </li>
              <li className="feature-item">
                <span className="feature-check">✓</span>
                <div className="feature-item-text">
                  <strong>Visual Refinement Mode</strong>
                  <span>Fine-tune every step with our intuitive drag-and-drop editor</span>
                </div>
              </li>
              <li className="feature-item">
                <span className="feature-check">✓</span>
                <div className="feature-item-text">
                  <strong>Smart Error Handling</strong>
                  <span>AI detects potential issues and suggests improvements automatically</span>
                </div>
              </li>
              <li className="feature-item">
                <span className="feature-check">✓</span>
                <div className="feature-item-text">
                  <strong>One-Click Deployment</strong>
                  <span>Deploy to cloud or run locally with a single click</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="demo-window glass scroll-reveal">
            <div className="demo-conversation">
              <div className="chat-bubble chat-user">
                <div className="chat-label">You</div>
                <div>When a new lead fills the form, save it to Sheets and notify our sales channel on Slack</div>
              </div>

              <div className="chat-bubble chat-ai">
                <div className="chat-label">Flashh AI</div>
                <div>✓ I'll build that for you! Here's your workflow:</div>
              </div>

              <div className="chat-workflow">
                <span className="workflow-node">📋 Form Submit</span>
                <span className="workflow-arrow">→</span>
                <span className="workflow-node">📊 Google Sheets</span>
                <span className="workflow-arrow">→</span>
                <span className="workflow-node">💬 Slack Alert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;