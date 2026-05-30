import React, { useState, useEffect } from 'react';
import './Events.css';

const EVENTS = [
  {
    title: 'Live Acoustic Night',
    description: 'Chill out with live acoustic music while sipping your favourite brew. Local artists take the stage for an intimate evening of soul and strings.',
    date: 'Feb 15, 2025',
    time: '7:00 PM – 10:00 PM',
    type: 'music', emoji: '🎸',
    highlights: ['Local artists', 'Special event drinks', 'Free entry'],
    color: '#c8860a'
  },
  {
    title: 'Tattoo Showcase & Pop-Up',
    description: 'Talented local tattoo artists set up at Beans Paradise. Get inked, get inspired, or just enjoy the incredible art on display.',
    date: 'Feb 22, 2025',
    time: '2:00 PM – 8:00 PM',
    type: 'tattoo', emoji: '🎨',
    highlights: ['Local tattoo artists', 'Art exhibition', 'Live demonstrations'],
    color: '#9b3a8c'
  },
  {
    title: 'Game Night Extravaganza',
    description: 'Board games, card games, console battles — gather your crew and compete for the Beans Paradise trophy! Prizes for top scorers.',
    date: 'Mar 1, 2025',
    time: '5:00 PM – 11:00 PM',
    type: 'games', emoji: '🎮',
    highlights: ['Board games', 'Console gaming', 'Prizes & trophies'],
    color: '#1a7ab0'
  },
  {
    title: 'Café Grand Opening 🥂',
    description: "We're levelling up from our beloved stall to a full-fledged café! Come celebrate this massive milestone with us. Food, music, and memories.",
    date: 'Coming Soon',
    time: '11:00 AM onwards',
    type: 'special', emoji: '🥂',
    highlights: ['Grand celebration', 'Special menu', 'Live music', 'Giveaways'],
    color: '#c8860a',
    isSpecial: true
  },
];

const TYPE_ICONS = { music: '🎸', tattoo: '🎨', games: '🎮', special: '⭐' };

export default function Events() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <main className={`events-page ${visible ? 'visible' : ''}`}>
      <section className="events-hero">
        <div className="container">
          <span className="section-label">What's On</span>
          <h1>Events & <em>Experiences</em></h1>
          <p>We're more than a café — we create moments. Join us for music, art, games, and everything in between.</p>
        </div>
        <div className="events-floating">
          {['🎸','🎨','🎮','🥂','🎵','✨'].map((e,i) => (
            <span key={i} style={{ animationDelay: `${i*0.6}s` }}>{e}</span>
          ))}
        </div>
      </section>

      <section className="events-section">
        <div className="container">
          <div className="events-list">
            {EVENTS.map((event, i) => (
              <div key={i} className={`event-card ${event.isSpecial ? 'special' : ''}`} style={{ '--event-color': event.color, animationDelay: `${i*0.12}s` }}>
                <div className="event-emoji-col">
                  <div className="event-emoji-wrap">
                    <span className="event-big-emoji">{event.emoji}</span>
                  </div>
                  {i < EVENTS.length - 1 && <div className="event-line" />}
                </div>
                <div className="event-content">
                  {event.isSpecial && <span className="event-special-badge">🌟 Coming Soon</span>}
                  <div className="event-meta">
                    <span className="event-date">📅 {event.date}</span>
                    <span className="event-time">⏰ {event.time}</span>
                  </div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <div className="event-highlights">
                    {event.highlights.map((h, j) => (
                      <span key={j} className="highlight-chip">{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="events-update">
        <div className="container">
          <div className="update-inner">
            <div>
              <h2>Never Miss an Event</h2>
              <p>Follow us on Instagram <strong>@beans__paradise</strong> for real-time event announcements, last-minute additions, and behind-the-scenes moments.</p>
            </div>
            <a href="https://www.instagram.com/beans__paradise/" target="_blank" rel="noopener noreferrer" className="btn-primary">
              📸 Follow Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
