const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const noteRoutes = require('./routes/noteRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/notes', noteRoutes);
// Routes
app.use('/api/notes', noteRoutes);
app.use('/api', require('./routes/noteRoutes'));


// DB Connection
mongoose.connect('mongodb://127.0.0.1:27017/notesdb')
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(5000, () => {
      console.log('🚀 Server running at http://localhost:5000');
    });
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
