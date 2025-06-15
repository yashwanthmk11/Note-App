// routes/noteRoutes.js
const express = require('express');
const router = express.Router();
const {
  getNotes,
  createNote,
  deleteNote,
  toggleNote
} = require('../controllers/noteController');

router.get('/notes', getNotes);
router.post('/notes', createNote);
router.delete('/notes/:id', deleteNote);
router.put('/notes/:id/toggle', toggleNote);

module.exports = router;
