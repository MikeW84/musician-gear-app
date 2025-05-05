const express = require('express');
const router = express.Router();
const Gear = require('../models/gear');

// GET all gear
router.get('/', async (req, res) => {
  try {
    const gear = await Gear.find();
    res.json(gear);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new gear
router.post('/', async (req, res) => {
  const gear = new Gear({
    name: req.body.name,
    category: req.body.category,
    brand: req.body.brand,
    purchaseDate: req.body.purchaseDate,
    notes: req.body.notes,
    photo: req.body.photo
  });
  try {
    const newGear = await gear.save();
    res.status(201).json(newGear);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update gear
router.put('/:id', async (req, res) => {
  try {
    const gear = await Gear.findById(req.params.id);
    if (!gear) return res.status(404).json({ message: 'Gear not found' });

    gear.name = req.body.name || gear.name;
    gear.category = req.body.category || gear.category;
    gear.brand = req.body.brand || gear.brand;
    gear.purchaseDate = req.body.purchaseDate || gear.purchaseDate;
    gear.notes = req.body.notes || gear.notes;
    gear.photo = req.body.photo || gear.photo;

    const updatedGear = await gear.save();
    res.json(updatedGear);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE gear
router.delete('/:id', async (req, res) => {
  try {
    const gear = await Gear.findByIdAndDelete(req.params.id);
    if (!gear) return res.status(404).json({ message: 'Gear not found' });
    res.json({ message: 'Gear deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;