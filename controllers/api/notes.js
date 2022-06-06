const Note = require('../../models/note');

module.exports = {
  getAllNotes
}

async function getAllNotes(req, res) {
  const notes = await Note.find({ user: req.user._id }).sort('updatedAt');
  return res.json(notes);
}