// controllers/noteController.js
const Note = require('../models/noteModel');

exports.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

exports.createNote = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: 'Text is required' });

    const note = await Note.create({ text });
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: 'Note deleted' });
};

exports.toggleNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  note.done = !note.done;
  await note.save();
  res.json(note);
};
