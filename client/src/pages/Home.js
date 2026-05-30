import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const FEATURED_ITEMS = [
  { name: 'Classic Paradise Burger', desc: 'Soft buns, simple flavors, that perfect snack moment 💛', price: '₹89', emoji: '🍔', tag: 'Bestseller' },
  { name: 'Arabica Hazelnut Latte', desc: 'Premium Arabica beans with velvety hazelnut — a sip of paradise ☕', price: '₹149', emoji: '☕', tag: 'Signature' },
  { name: 'Cucumber Mojito', desc: 'Cool, crisp, refreshing — the perfect summer escape 🥒', price: '₹89', emoji: '🥤', tag: 'Bestseller' },
];

const VIBES = [
  { icon: '🎸', title: 'Live Music Nights', desc: 'Local artists, good vibes' },
  { icon: '🎨', title: 'Tattoo Pop-ups', desc: 'Art meets coffee culture' },
  { icon: '🎮', title: 'Game Nights', desc: 'Compete with your crew' },
  { icon: '🏗️', title: 'New Café Coming', desc: 'From stall to full café!' },
];

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
  }, []);

  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className={`hero-content ${heroVisible ? 'visible' : ''}`}>
          <div className="hero-badge">
            <span>📍</span> Ichalkaranji, Maharashtra
          </div>
          <h1 className="hero-title">
            Sip the 
            <br />
            <em> good times !!</em>
            <br />
           
          </h1>
          <p className="hero-subtitle">
            From the streets of Ichalkaranji — handcrafted burgers, specialty coffee,
            fresh mojitos, and memories made over every cup.
          </p>
          <div className="hero-actions">
            <Link to="/menu" className="btn-primary">Explore Our Menu →</Link>
            <Link to="/events" className="btn-outline">Upcoming Events</Link>
          </div>
          <div className="hero-stats">
            <div className="stat"><span className="stat-num">2+</span><span className="stat-label">Years of Crafting</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-num">20+</span><span className="stat-label">Menu Items</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-num">∞</span><span className="stat-label">Happy Customers</span></div>
          </div>
        </div>

        <div className={`hero-visual ${heroVisible ? 'visible' : ''}`}>
          <div className="coffee-circle">
            <div className="coffee-ring ring-1" />
            <div className="coffee-ring ring-2" />
            <div className="coffee-ring ring-3" />
            <div className="coffee-center">
              <span className="coffee-emoji">☕</span>
              <span className="coffee-label">Beans Paradise</span>
            </div>
          </div>
          <div className="floating-tag tag-1">🍔 Paradise Burger</div>
          <div className="floating-tag tag-2">🥤 Cucumber Mojito</div>
          <div className="floating-tag tag-3">☕ Arabica Hazelnut</div>
        </div>

        {/* Floating beans */}
        <div className="hero-beans">
          {['☕','🫘','🍃','✨','🫘','☕'].map((b,i) => (
            <span key={i} className={`bean bean-${i+1}`}>{b}</span>
          ))}
        </div>
      </section>

      {/* Story Banner */}
      <section className="story-banner">
        <div className="container">
          <div className="story-inner">
            <div className="story-icon">🏗️</div>
            <div className="story-text">
              <h3>We're Growing!</h3>
              <p>From a beloved street stall to a full-fledged café — Beans Paradise is levelling up. 
                 Stay tuned for our grand café opening in Ichalkaranji.</p>
            </div>
            <Link to="/about" className="btn-outline">Our Story →</Link>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">On The Menu</span>
            <h2>Our Signature Picks</h2>
            <p>Everything made with love, served with a smile</p>
          </div>
          <div className="featured-grid">
            {FEATURED_ITEMS.map((item, i) => (
              <div key={i} className="featured-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="card-emoji">{item.emoji}</div>
                <span className="card-tag">{item.tag}</span>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <div className="card-footer">
                  <span className="card-price">{item.price}</span>
                  <Link to="/menu" className="card-btn">View Menu →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/menu" className="btn-primary">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Vibes Section */}
      <section className="vibes-section">
        <div className="vibes-bg" />
        <div className="container">
          <div className="section-header light">
            <span className="section-label" style={{ color: 'var(--golden)' }}>More Than Coffee</span>
            <h2>The Beans Paradise Vibe</h2>
            <p>We're not just a café — we're a community</p>
          </div>
          <div className="vibes-grid">
            {VIBES.map((v, i) => (
              <div key={i} className="vibe-card" style={{ animationDelay: `${i * 0.12}s` }}>
                <span className="vibe-icon">{v.icon}</span>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/events" className="btn-primary">See All Events</Link>
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="instagram-section">
        <div className="container">
          <div className="insta-inner">
            <div className="insta-left">
              <span className="section-label">Follow Us</span>
              <h2>We're on Instagram</h2>
              <p>Follow <strong>@beans__paradise</strong> for daily specials, behind-the-scenes moments, event announcements, and drool-worthy food shots from Ichalkaranji.</p>
              <a href="https://www.instagram.com/beans__paradise/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                📸 Follow @beans__paradise
              </a>
            </div>
            <div className="insta-right">
              <div className="insta-grid">
                {['🍔','☕','🥤','🎸','🎮','🎨'].map((e, i) => (
                  <div key={i} className="insta-tile">
                    <span>{e}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <div className="container">
          <div className="location-inner">
            <div className="location-info">
              <span className="section-label">Find Us</span>
              <h2>Visit Beans Paradise</h2>
              <div className="location-details">
                <div className="loc-item"><span>📍</span><span>Ichalkaranji, Kolhapur District, Maharashtra</span></div>
                <div className="loc-item"><span>⏰</span><span>Daily: 07:00 AM – 11:00 PM</span></div>
                <div className="loc-item"><span>📱</span><span>@beans__paradise on Instagram</span></div>
              </div>
              <Link to="/contact" className="btn-primary" style={{ marginTop: '24px', display: 'inline-flex' }}>
                Get In Touch
              </Link>
            </div>
            <div className="location-map-placeholder">
              <span className="map-pin">📍</span>
              <h3>Ichalkaranji</h3>
              <p>Maharashtra, India</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
