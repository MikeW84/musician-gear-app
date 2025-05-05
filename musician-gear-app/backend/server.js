const express = require('express');
const mongoose = require('mongoose');
const gearRoutes = require('./routes/gear');
const app = express();

app.use(express.json()); // Parse JSON requests

// Connect to MongoDB
mongoose.connect('mongodb://localhost/gear-tracker')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use gear routes
app.use('/api/gear', gearRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));