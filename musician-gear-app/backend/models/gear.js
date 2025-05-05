const mongoose = require('mongoose');

const gearSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  purchaseDate: { type: Date, default: Date.now },
  notes: { type: String },
  photo: { type: String } // Optional, for a URL or file path later
});

module.exports = mongoose.model('Gear', gearSchema);