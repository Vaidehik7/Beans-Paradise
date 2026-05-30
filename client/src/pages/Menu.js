import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Menu.css';

const CATEGORIES = [
  { id: 'all', label: 'All Items', emoji: '🍽️' },
  { id: 'burgers', label: 'Burgers', emoji: '🍔' },
  { id: 'coffee', label: 'Coffee', emoji: '☕' },
  { id: 'mocktails', label: 'Mocktails', emoji: '🥤' },
  { id: 'snacks', label: 'Snacks', emoji: '🍟' },
  { id: 'desserts', label: 'Desserts', emoji: '🍫' },
];

const MENU_DATA = [
  { name: 'Classic Paradise Burger', description: 'Soft buns, fresh veggies, our signature sauce — easy, light, and actually satisfying 💛', price: 89, category: 'burgers', isVeg: true, isBestseller: true, emoji: '🍔' },
  { name: 'Spicy Crunch Burger', description: 'Crispy patty with jalapeño mayo and pickled onions on a toasted sesame bun', price: 99, category: 'burgers', isVeg: true, emoji: '🌶️' },
  { name: 'Double Decker Burger', description: 'Double the joy — two layers with cheese and house-made chutney', price: 119, category: 'burgers', isVeg: true, emoji: '🍔' },

  { name: 'Arabica Hazelnut Latte', description: 'Premium Arabica beans with velvety hazelnut syrup — a sip of paradise in every cup', price: 149, category: 'coffee', isVeg: true, isBestseller: true, emoji: '☕' },
  { name: 'Cold Brew', description: 'Slow-steeped cold brew coffee, bold and smooth over ice', price: 129, category: 'coffee', isVeg: true, emoji: '🧊' },
  { name: 'Cappuccino', description: 'Classic espresso with perfectly frothed milk', price: 99, category: 'coffee', isVeg: true, emoji: '☕' },
  { name: 'Caramel Macchiato', description: 'Espresso, steamed milk and a sweet caramel drizzle', price: 139, category: 'coffee', isVeg: true, emoji: '☕' },
  { name: 'Dalgona Coffee', description: 'Whipped coffee magic over chilled milk — fluffy and irresistible', price: 119, category: 'coffee', isVeg: true, isNew: true, emoji: '🥤' },

  { name: 'Cucumber Mojito', description: 'Fresh cucumber, mint, lime, soda — cool, crisp, and refreshing 🥒', price: 89, category: 'mocktails', isVeg: true, isBestseller: true, emoji: '🥤' },
  { name: 'Watermelon Cooler', description: 'Blended watermelon with lemon zest and a pinch of black salt', price: 79, category: 'mocktails', isVeg: true, emoji: '🍉' },
  { name: 'Blue Lagoon', description: 'Blue curacao syrup, lemonade and mint — the most photogenic drink on the menu', price: 99, category: 'mocktails', isVeg: true, isNew: true, emoji: '💙' },
  { name: 'Virgin Piña Colada', description: 'Coconut cream, pineapple juice, crushed ice — tropical vibes in a glass', price: 109, category: 'mocktails', isVeg: true, emoji: '🍍' },

  { name: 'Masala Fries', description: 'Crispy fries tossed with chaat masala, lemon, and coriander', price: 59, category: 'snacks', isVeg: true, isBestseller: true, emoji: '🍟' },
  { name: 'Cheese Garlic Bread', description: 'Toasted bread loaded with garlic butter and molten mozzarella', price: 79, category: 'snacks', isVeg: true, emoji: '🧀' },
  { name: 'Veg Puff', description: 'Flaky pastry stuffed with spiced potato filling', price: 35, category: 'snacks', isVeg: true, emoji: '🥐' },

  { name: 'Brownie with Ice Cream', description: 'Warm chocolate brownie with a scoop of vanilla ice cream', price: 119, category: 'desserts', isVeg: true, emoji: '🍫' },
  { name: 'Oreo Milkshake', description: 'Thick, creamy, crushed Oreo blended into the ultimate comfort shake', price: 129, category: 'desserts', isVeg: true, isBestseller: true, emoji: '🥛' },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const filtered = MENU_DATA.filter(item => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                        item.description.toLowerCase().includes(search.toLowerCase());
    const matchVeg = !vegOnly || item.isVeg;
    return matchCat && matchSearch && matchVeg;
  });

  return (
    <main className={`menu-page ${visible ? 'visible' : ''}`}>
      {/* Header */}
      <section className="menu-hero">
        <div className="container">
          <span className="section-label">Our Menu</span>
          <h1>Every Bite, <em>Every Sip</em></h1>
          <p>Crafted with love, served with warmth — from Ichalkaranji to the world 🌍</p>
        </div>
        <div className="menu-hero-beans">
          {['🍔','☕','🥤','🍟','🍫'].map((e,i) => (
            <span key={i} style={{ animationDelay: `${i*0.8}s` }}>{e}</span>
          ))}
        </div>
      </section>

      {/* Controls */}
      <div className="menu-controls">
        <div className="container">
          <div className="controls-inner">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search menu..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <button className={`veg-toggle ${vegOnly ? 'active' : ''}`} onClick={() => setVegOnly(!vegOnly)}>
              <span className="veg-dot" /> Veg Only
            </button>
          </div>

          <div className="category-tabs">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`cat-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.emoji}</span> {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <section className="menu-grid-section">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="empty-state">
              <span>🤔</span>
              <p>Nothing found — try a different search!</p>
            </div>
          ) : (
            <div className="menu-grid">
              {filtered.map((item, i) => (
                <div key={i} className="menu-card" style={{ animationDelay: `${(i % 6) * 0.06}s` }}>
                  <div className="menu-card-top">
                    <span className="menu-emoji">{item.emoji}</span>
                    <div className="menu-badges">
                      {item.isBestseller && <span className="badge bestseller">⭐ Bestseller</span>}
                      {item.isNew && <span className="badge new">🆕 New</span>}
                      <span className={`veg-badge ${item.isVeg ? 'veg' : 'nonveg'}`}>
                        <span className="veg-square" />
                      </span>
                    </div>
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="menu-card-price">
                    <span className="price">₹{item.price}</span>
                    <button className="add-btn">+ Add</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer note */}
      <div className="menu-note">
        <div className="container">
          <p>📝 Menu and prices may vary. Visit us or DM <strong>@beans__paradise</strong> on Instagram for the latest.</p>
        </div>
      </div>
    </main>
  );
}
