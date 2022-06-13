const Note = require('../../models/note');

module.exports = {
  getAllNotes,
  createNote,
  findNote,
  saveNote,
  deleteNote
}

async function getAllNotes(req, res) {
  const notes = await Note.find({ user: req.user._id }).sort('-updatedAt').populate('notebook');
  return res.json(notes);
}

async function createNote(req, res) {
  const note = await Note.create({ user: req.user._id });
  return res.json(note);
}

async function findNote(req, res) {
  const note = await Note.findById(req.params.noteId).populate('notebook');
  return res.json(note);
}

async function saveNote(req, res) {
  let note;
  if (req.body.note.notebook) note = await Note.findByIdAndUpdate(req.body.note._id, req.body.note, { new: true }).populate('notebook');
  else note = await Note.findByIdAndUpdate(req.body.note._id, { $unset: { notebook: '' } }, { new: true });
  return res.json(note);
}

async function deleteNote(req, res) {
  const note = await Note.findByIdAndDelete(req.params.noteId);
  return res.json(note);
}