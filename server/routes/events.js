const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

const MOCK_EVENTS = [
  {
    title: 'Live Acoustic Night',
    description: 'Chill out with live acoustic music while sipping your favourite brew. Local artists, good vibes, great coffee.',
    date: new Date('2025-02-15'),
    time: '7:00 PM – 10:00 PM',
    type: 'music',
    emoji: '🎸',
    isUpcoming: true
  },
  {
    title: 'Tattoo Showcase & Pop-Up',
    description: 'Talented local tattoo artists set up at Beans Paradise. Get inked, get inspired, or just enjoy the art.',
    date: new Date('2025-02-22'),
    time: '2:00 PM – 8:00 PM',
    type: 'tattoo',
    emoji: '🎨',
    isUpcoming: true
  },
  {
    title: 'Game Night Extravaganza',
    description: 'Board games, card games, console battles — gather your crew and compete for the Beans Paradise trophy!',
    date: new Date('2025-03-01'),
    time: '5:00 PM – 11:00 PM',
    type: 'games',
    emoji: '🎮',
    isUpcoming: true
  },
  {
    title: 'Café Grand Opening',
    description: 'We\'re growing from a beloved stall to a full-fledged café! Come celebrate this new chapter with us.',
    date: new Date('2025-03-15'),
    time: '11:00 AM onwards',
    type: 'special',
    emoji: '🥂',
    isUpcoming: true
  },
];

router.get('/', async (req, res) => {
  try {
    let events;
    try {
      events = await Event.find({ isUpcoming: true }).sort({ date: 1 });
      if (events.length === 0) throw new Error('empty');
    } catch {
      events = MOCK_EVENTS;
    }
    res.json({ success: true, data: events });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.post('/seed', async (req, res) => {
  try {
    await Event.deleteMany({});
    await Event.insertMany(MOCK_EVENTS);
    res.json({ success: true, message: `Seeded ${MOCK_EVENTS.length} events` });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
