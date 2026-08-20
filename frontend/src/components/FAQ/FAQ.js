import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: "What is Flashh AI?",
    answer: "Flashh AI is a conversational workflow automation platform. Simply describe what you want to automate in plain language, and our AI builds the workflow for you — no coding required."
  },
  {
    question: "Do I need any technical or coding skills?",
    answer: "Not at all! Flashh was designed for everyone. If you can describe your idea in words, you can build workflows. Our visual editor helps you refine things further if needed, but it's entirely optional."
  },
  {
    question: "How does Flashh handle my data?",
    answer: "We take security seriously. All data is encrypted in transit and at rest. We're SOC 2 compliant, never use your data for model training, and offer enterprise-grade access controls including SSO and audit logs."
  },
  {
    question: "Which integrations do you support?",
    answer: "We support 100+ integrations including Slack, Gmail, Google Sheets, Notion, Jira, GitHub, Salesforce, HubSpot, Zapier, Make, and many more. We add new integrations monthly based on user requests."
  },
  {
    question: "Can I try Flashh before committing?",
    answer: "Absolutely! Our free plan lets you create up to 5 workflows with basic integrations. No credit card required to get started. Upgrade anytime when you're ready for more power."
  },
  {
    question: "Is there a team or enterprise plan?",
    answer: "Yes! Our Enterprise plan includes SSO, dedicated account management, custom SLAs, audit logs, on-premise deployment options, and custom AI model training. Contact our sales team for pricing details."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" aria-label="FAQ">
      <div className="container">
        <div className="section-header scroll-reveal">
          <span className="section-badge">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about Flashh AI.
          </p>
        </div>

        <div className="faq-container stagger-children scroll-reveal">
          {faqData.map((item, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;