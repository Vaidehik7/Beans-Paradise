import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/api/contact', form);
      setStatus({ type: 'success', msg: res.data.message });
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus({ type: 'error', msg: 'Oops! Something went wrong. Try reaching us on Instagram.' });
    }
    setLoading(false);
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <main className={`contact-page ${visible ? 'visible' : ''}`}>
      <section className="contact-hero">
        <div className="container">
          <span className="section-label">Get In Touch</span>
          <h1>Let's <em>Connect</em> Over Coffee</h1>
          <p>Have a question, feedback, or just want to say hi? We'd love to hear from you ☕</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Info */}
            <div className="contact-info">
              <h2>Find Us</h2>
              <div className="info-cards">
                {[
                  { icon: '📍', title: 'Location', content: 'Ichalkaranji, Kolhapur District\nMaharashtra, India — 416115' },
                  { icon: '⏰', title: 'Hours', content: 'Daily: 10:00 AM – 11:00 PM\nOpen all 7 days' },
                  { icon: '📸', title: 'Instagram', content: '@beans__paradise\nDM us for quick replies!' },
                ].map((c, i) => (
                  <div key={i} className="info-card">
                    <span className="info-icon">{c.icon}</span>
                    <div>
                      <h4>{c.title}</h4>
                      <p style={{ whiteSpace: 'pre-line' }}>{c.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-section">
                <h3>Follow Us</h3>
                <a href="https://www.instagram.com/beans__paradise/" target="_blank" rel="noopener noreferrer" className="instagram-link">
                  <span>📸</span>
                  <div>
                    <strong>@beans__paradise</strong>
                    <span>Follow for updates, events & food porn</span>
                  </div>
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-wrap">
              <h2>Send a Message</h2>
              <p>We reply to every message — usually within 24 hours.</p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Your Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What do we call you?" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us anything — feedback, collaboration ideas, or just say hi..." rows={5} required />
                </div>
                {status && (
                  <div className={`form-status ${status.type}`}>
                    {status.type === 'success' ? '✅' : '❌'} {status.msg}
                  </div>
                )}
                <button type="submit" className="btn-primary submit-btn" disabled={loading}>
                  {loading ? '☕ Brewing...' : 'Send Message ✉️'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
