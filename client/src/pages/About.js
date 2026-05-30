import React, { useEffect, useState } from 'react';
import './About.css';

const MILESTONES = [
  { year: '2019', title: 'The First Cup', desc: 'Started as a small stall in Ichalkaranji, serving burgers and cold drinks to the local crowd.', emoji: '🫘' },
  { year: '2021', title: 'Going Viral Locally', desc: 'Word spread. Our Classic Burger and Cucumber Mojito became crowd favourites. Lines started forming!', emoji: '📣' },
  { year: '2023', title: 'Events Begin', desc: 'We started hosting live music nights, tattoo pop-ups, and game nights — building a real community around coffee.', emoji: '🎸' },
  { year: '2024', title: 'Instagram Famous', desc: 'Our @beans__paradise page blew up. People from across Maharashtra started making the trip to try our menu.', emoji: '📱' },
  { year: '2025', title: 'The Café Era', desc: "We're upgrading from our beloved stall to a full-fledged café. New space, same soul, bigger dreams.", emoji: '🏗️' },
];

const VALUES = [
  { icon: '💛', title: 'Simple Pleasures', desc: 'Soft buns, honest flavors, that perfect snack moment. We believe great food doesn\'t need to be complicated.' },
  { icon: '🌱', title: 'Community First', desc: 'From Ichalkaranji to the world — we started local and we\'ll always be local at heart.' },
  { icon: '🎨', title: 'Creative Soul', desc: 'Coffee meets culture. We host art, music, games — because a café should be a creative space.' },
  { icon: '☕', title: 'Quality Always', desc: 'Premium Arabica beans, fresh ingredients, carefully crafted drinks. Every cup, every time.' },
];

export default function About() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <main className={`about-page ${visible ? 'visible' : ''}`}>
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-inner">
            <div className="about-hero-text">
              <span className="section-label">Our Story</span>
              <h1>Born from a <em>Stall</em>, Built on <em>Love</em></h1>
              <p>Beans Paradise didn't start in a fancy kitchen. It started with a simple idea: make really good food, serve it with a genuine smile, and watch a community grow around it — one cup at a time.</p>
              <p>From the streets of Ichalkaranji, Maharashtra, we've been brewing something special. And now, we're ready to take it to the world. 🌍</p>
              <a href="https://www.instagram.com/beans__paradise/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                📸 Follow Our Journey
              </a>
            </div>
            <div className="about-hero-visual">
              <div className="about-big-logo">
                <span>☕</span>
                <h2>Beans Paradise</h2>
                <p>Ichalkaranji, Maharashtra</p>
                <span className="est">Est. 2019</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Stand For</span>
            <h2>The Beans Paradise Way</h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div key={i} className="value-card" style={{ animationDelay: `${i*0.1}s` }}>
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="timeline-bg" />
        <div className="container">
          <div className="section-header light">
            <span className="section-label" style={{ color: 'var(--golden)' }}>Our Journey</span>
            <h2>From Stall to Café</h2>
          </div>
          <div className="timeline">
            {MILESTONES.map((m, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} style={{ animationDelay: `${i*0.15}s` }}>
                <div className="timeline-content">
                  <span className="t-emoji">{m.emoji}</span>
                  <span className="t-year">{m.year}</span>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
                <div className="timeline-dot" />
              </div>
            ))}
            <div className="timeline-line" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-inner">
            <h2>Come Be Part of the Story</h2>
            <p>Whether you're grabbing a quick burger, sipping an Arabica Hazelnut Latte, or joining us for a music night — you're always welcome at Beans Paradise.</p>
            <div className="cta-buttons">
              <a href="/menu" className="btn-primary">See Our Menu</a>
              <a href="/events" className="btn-outline">Upcoming Events</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
