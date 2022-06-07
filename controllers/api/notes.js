const Note = require('../../models/note');

module.exports = {
  getAllNotes,
  createNote,
  findNote
}

async function getAllNotes(req, res) {
  const notes = await Note.find({ user: req.user._id }).sort('-updatedAt');
  return res.json(notes);
}

async function createNote(req, res) {
  const note = await Note.create({ user: req.user._id});
  return res.json(note);
}

async function findNote(req, res) {
  const note = await Note.findById(req.params.noteId);
  res.json(note);
}