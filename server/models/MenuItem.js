const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ['burgers', 'beverages', 'mocktails', 'coffee', 'snacks', 'desserts'],
    required: true
  },
  isVeg: { type: Boolean, default: true },
  isBestseller: { type: Boolean, default: false },
  isNew: { type: Boolean, default: false },
  emoji: { type: String, default: '🍽️' },
  available: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('MenuItem', menuItemSchema);
