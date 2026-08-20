import React from 'react';
import './Footer.css';

const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Docs'],
    Company: ['About', 'Blog', 'Careers', 'Press', 'Partners'],
    Resources: ['Community', 'Help Center', 'Templates', 'API Reference', 'Status'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies']
  };

  return (
    <footer aria-label="Footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span style={{width: '12px', height: '12px', borderRadius: '50%', background: 'var(--gradient-primary)', display: 'inline-block'}}></span>
              Flashh AI
            </div>
            <p>
              Build powerful workflows with simple text conversation. 
              Describe your idea, watch it come to life.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="footer-column">
              <h4>{category}</h4>
              <ul className="footer-links">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Get the latest updates on new features and product improvements.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" className="newsletter-input" placeholder="Your email" />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2025 Flashh AI. All rights reserved.</p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Twitter">𝕏</a>
            <a href="#" className="social-link" aria-label="GitHub">⌘</a>
            <a href="#" className="social-link" aria-label="LinkedIn">in</a>
            <a href="#" className="social-link" aria-label="YouTube">▶</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;