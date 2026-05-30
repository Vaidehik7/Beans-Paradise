const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

const MOCK_MENU = [
  // Burgers
  { name: 'Classic Paradise Burger', description: 'Soft buns, fresh veggies, our signature sauce — easy, light, and actually satisfying 💛', price: 89, category: 'burgers', isVeg: true, isBestseller: true, emoji: '🍔' },
  { name: 'Spicy Crunch Burger', description: 'Crispy patty with jalapeño mayo and pickled onions on a toasted sesame bun', price: 99, category: 'burgers', isVeg: true, emoji: '🌶️' },
  { name: 'Double Decker Burger', description: 'Double the joy — two layers of goodness with cheese and house-made chutney', price: 119, category: 'burgers', isVeg: true, emoji: '🍔' },

  // Coffee
  { name: 'Arabica Hazelnut Latte', description: 'Premium Arabica beans with velvety hazelnut syrup — a sip of paradise in every cup', price: 149, category: 'coffee', isVeg: true, isBestseller: true, emoji: '☕' },
  { name: 'Cold Brew', description: 'Slow-steeped cold brew coffee, bold and smooth over ice', price: 129, category: 'coffee', isVeg: true, emoji: '🧋' },
  { name: 'Cappuccino', description: 'Classic espresso with perfectly frothed milk — the original way to start your day', price: 99, category: 'coffee', isVeg: true, emoji: '☕' },
  { name: 'Caramel Macchiato', description: 'Espresso, steamed milk and a sweet caramel drizzle that hits just right', price: 139, category: 'coffee', isVeg: true, emoji: '☕' },
  { name: 'Dalgona Coffee', description: 'Whipped coffee magic over chilled milk — fluffy, frothy, irresistible', price: 119, category: 'coffee', isVeg: true, isNew: true, emoji: '🥤' },

  // Mocktails
  { name: 'Cucumber Mojito', description: 'Fresh cucumber, mint, lime, and a splash of soda — cool, crisp, and refreshing 🥒', price: 89, category: 'mocktails', isVeg: true, isBestseller: true, emoji: '🥤' },
  { name: 'Watermelon Cooler', description: 'Blended watermelon with lemon zest and a pinch of black salt — pure summer', price: 79, category: 'mocktails', isVeg: true, emoji: '🍉' },
  { name: 'Blue Lagoon', description: 'Blue curacao syrup, lemonade and mint — the most photogenic drink on the menu', price: 99, category: 'mocktails', isVeg: true, isNew: true, emoji: '💙' },
  { name: 'Virgin Piña Colada', description: 'Coconut cream, pineapple juice, crushed ice — tropical vibes in a glass', price: 109, category: 'mocktails', isVeg: true, emoji: '🍍' },

  // Snacks
  { name: 'Masala Fries', description: 'Crispy fries tossed with chaat masala, lemon, and coriander — street-style snacking', price: 59, category: 'snacks', isVeg: true, isBestseller: true, emoji: '🍟' },
  { name: 'Cheese Garlic Bread', description: 'Toasted bread loaded with garlic butter and molten mozzarella', price: 79, category: 'snacks', isVeg: true, emoji: '🧀' },
  { name: 'Veg Puff', description: 'Flaky pastry stuffed with spiced potato filling — the classic tea-time companion', price: 35, category: 'snacks', isVeg: true, emoji: '🥐' },

  // Desserts
  { name: 'Brownie with Ice Cream', description: 'Warm chocolate brownie with a scoop of vanilla ice cream — indulge yourself', price: 119, category: 'desserts', isVeg: true, emoji: '🍫' },
  { name: 'Oreo Milkshake', description: 'Thick, creamy, crushed Oreo blended into the ultimate comfort shake', price: 129, category: 'desserts', isVeg: true, isBestseller: true, emoji: '🥛' },
];

// GET all menu items
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    let items;
    try {
      const query = category ? { category, available: true } : { available: true };
      items = await MenuItem.find(query).sort({ isBestseller: -1, createdAt: 1 });
      if (items.length === 0) throw new Error('empty');
    } catch {
      items = category ? MOCK_MENU.filter(i => i.category === category) : MOCK_MENU;
    }
    res.json({ success: true, data: items });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET categories
router.get('/categories', (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 'all', label: 'All Items', emoji: '🍽️' },
      { id: 'burgers', label: 'Burgers', emoji: '🍔' },
      { id: 'coffee', label: 'Coffee', emoji: '☕' },
      { id: 'mocktails', label: 'Mocktails', emoji: '🥤' },
      { id: 'snacks', label: 'Snacks', emoji: '🍟' },
      { id: 'desserts', label: 'Desserts', emoji: '🍫' },
    ]
  });
});

// Seed route
router.post('/seed', async (req, res) => {
  try {
    await MenuItem.deleteMany({});
    await MenuItem.insertMany(MOCK_MENU);
    res.json({ success: true, message: `Seeded ${MOCK_MENU.length} items` });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
