  const express = require('express');
  const mongoose = require('mongoose');
  const cors = require('cors');
  const helmet = require('helmet');
  const morgan = require('morgan');
  require('dotenv').config();

  const app = express();

  app.use(helmet());
  app.use(morgan('dev'));
  app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:3000' }));
  app.use(express.json());

  // Routes
  app.use('/api/menu', require('./routes/menu'));
  app.use('/api/events', require('./routes/events'));
  app.use('/api/contact', require('./routes/contact'));

  // Health check
  app.get('/api/health', (req, res) => res.json({ status: 'Beans Paradise API is brewing ☕' }));

  // MongoDB connection
  const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/beans-paradise';
  mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.log('⚠️  MongoDB not connected, using mock data:', err.message));

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
