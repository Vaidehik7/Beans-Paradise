const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }
  // In production: save to DB or send email
  console.log('📩 New contact message:', { name, email, message });
  res.json({ success: true, message: 'Message received! We\'ll get back to you soon ☕' });
});

module.exports = router;
