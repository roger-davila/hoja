const Note = require('../../models/note');

module.exports = {
  getAllNotes,
  createNote,
  findNote,
  saveNote
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
  return res.json(note);
}

async function saveNote(req, res) {
  const note = await Note.findByIdAndUpdate(req.body.note._id, { markdown_text: req.body.note.markdown_text });
  return res.json(note);
}