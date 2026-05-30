import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <span>☕</span>
                <div>
                  <span className="f-logo-main">Beans Paradise</span>
                  
                  <span className="f-logo-sub">Ichalkaranji, Maharashtra</span>
                </div>
              </div>
              <p>From a beloved street stall to a full café — we're brewing something special, one cup at a time.</p>
              <a href="https://www.instagram.com/beans__paradise/" target="_blank" rel="noopener noreferrer" className="footer-insta">
                📸 @beans__paradise
              </a>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                {[['/', 'Home'], ['/menu', 'Menu'], ['/events', 'Events'], ['/about', 'Our Story'], ['/contact', 'Contact']].map(([to, label]) => (
                  <li key={to}><Link to={to}>{label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="footer-menu-preview">
              <h4>On The Menu</h4>
              <ul>
                {['🍔 Classic Paradise Burger', '☕ Arabica Hazelnut Latte', '🥤 Cucumber Mojito', '🍟 Masala Fries', '🍫 Brownie + Ice Cream'].map((item, i) => (
                  <li key={i}><Link to="/menu">{item}</Link></li>
                ))}
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Visit Us</h4>
              <div className="f-contact-items">
                <p>📍 Ichalkaranji, Kolhapur District<br />Maharashtra, India</p>
                <p>⏰ Daily: 10 AM – 11 PM</p>
                <p>📸 DM us on Instagram for the fastest response</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p>© 2025 Beans Paradise. Made with ☕ in Ichalkaranji.</p>
            <p className="footer-tagline">Made by vaidehi_vaze💛</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
