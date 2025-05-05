# Gear Inventory: MongoDB Schema and Express Routes

Since you're new to databases, I'll keep this simple and explain each part. We'll create a MongoDB schema for gear using Mongoose (a beginner-friendly library) and set up Express routes for CRUD operations. MongoDB is a NoSQL database, meaning it stores data like flexible JSON objects, perfect for our gear data.

## 1. MongoDB Schema (models/gear.js)
This defines how gear data is stored in MongoDB. Think of it as a blueprint for each gear item.

```javascript
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
```

**Explanation**:
- `mongoose.Schema`: Defines the structure of a gear item.
- Fields like `name`, `category`, `brand` are required strings.
- `purchaseDate` defaults to today’s date if not provided.
- `notes` and `photo` are optional.
- `mongoose.model` creates a "Gear" collection in MongoDB.

## 2. Express Routes (routes/gear.js)
These are API endpoints to handle gear data (Create, Read, Update, Delete).

```javascript
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
    const gear = await Gear.findById(req.params.id);
    if (!gear) return res.status(404).json({ message: 'Gear not found' });
    await gear.remove();
    res.json({ message: 'Gear deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
```

**Explanation**:
- `router.get('/')`: Fetches all gear items from MongoDB.
- `router.post('/')`: Adds a new gear item using data from the request body.
- `router.put('/:id')`: Updates a gear item by its ID, only changing provided fields.
- `router.delete('/:id')`: Deletes a gear item by its ID.
- `async/await`: Handles database operations safely, with error catching.

## 3. Connect MongoDB to Express (server.js)
Update your Express server to connect to MongoDB.

```javascript
const express = require('express');
const mongoose = require('mongoose');
const gearRoutes = require('./routes/gear');
const app = express();

app.use(express.json()); // Parse JSON requests

// Connect to MongoDB
mongoose.connect('mongodb://localhost/gear-tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use gear routes
app.use('/api/gear', gearRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
```

**Explanation**:
- `mongoose.connect`: Links to a local MongoDB database called "gear-tracker".
- `app.use('/api/gear')`: Makes gear routes available at `/api/gear`.
- `express.json()`: Lets Express handle JSON data from API requests.

## Setup Instructions
1. **Install MongoDB**:
   - Download and install MongoDB Community Server (https://www.mongodb.com/try/download/community).
   - Start MongoDB locally (e.g., run `mongod` in a terminal).
2. **Install Dependencies**:
   - In your backend folder, run:
     ```bash
     npm install mongoose express
     ```
3. **Folder Structure**:
   ```
   backend/
     ├── models/
     │   └── gear.js
     ├── routes/
     │   └── gear.js
     └── server.js
   ```
4. **Run the Server**:
   - Run `node server.js` in the backend folder.
   - Check console for "Connected to MongoDB" and "Server running on port 5000".
5. **Test Routes**:
   - Use a tool like Postman or curl to test:
     - GET `http://localhost:5000/api/gear`
     - POST `http://localhost:5000/api/gear` with JSON like:
       ```json
       {
         "name": "Fender Strat",
         "category": "Guitar",
         "brand": "Fender",
         "notes": "Great tone"
       }
       ```

## Next Steps
- Test the API endpoints using Postman to ensure they work.
- Start building React components (GearList, GearForm, GearItem) to interact with these endpoints.
- Let me know if you want code for the React components next or help testing the API!