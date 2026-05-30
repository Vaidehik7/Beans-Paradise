const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  type: {
    type: String,
    enum: ['music', 'tattoo', 'games', 'special', 'other'],
    required: true
  },
  emoji: { type: String, default: '🎉' },
  isUpcoming: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
