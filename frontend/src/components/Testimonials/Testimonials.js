import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "I went from idea to automated workflow in 10 minutes. I couldn't believe it was real. This is the future of productivity.",
    author: "Sarah Chen",
    role: "Product Manager",
    company: "Stripe",
    initial: "S"
  },
  {
    quote: "Flashh replaced three different tools for us. The natural language interface is incredibly intuitive — even our non-technical team members love it.",
    author: "Marcus Rivera",
    role: "CTO",
    company: "Scale AI",
    initial: "M"
  },
  {
    quote: "We built a customer onboarding system that used to take two engineers a month. It took me an afternoon with Flashh. Absolute game changer.",
    author: "Priya Sharma",
    role: "Head of Operations",
    company: "Notion",
    initial: "P"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" aria-label="Testimonials">
      <div className="container">
        <div className="section-header scroll-reveal">
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">Loved by Teams Worldwide</h2>
          <p className="section-subtitle">
            Don't just take our word for it — hear from teams who've transformed their workflows with Flashh.
          </p>
        </div>

        <div className="testimonials-grid stagger-children scroll-reveal">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card card-hover">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonial.initial}</div>
                <div className="testimonial-info">
                  <h4>{testimonial.author}</h4>
                  <span>{testimonial.role}, {testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;