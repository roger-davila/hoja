const Notebook = require('../../models/notebook');
const Note = require('../../models/note');

module.exports = {
  getAllNotebooks,
  getNotebook,
  getAllNotesFromNotebook,
  createNotebook
}

async function getAllNotebooks(req, res) {
  const notebooks = await Notebook.find({ user: req.user._id }).sort('-updatedAt');
  return res.json(notebooks);
}

async function getNotebook(req, res) {
  const notebook = await Notebook.findById(req.params.notebookId);
  return res.json(notebook);
}

async function getAllNotesFromNotebook(req, res) {
  const notes = await Note.find({ notebook: req.params.notebookId}).populate('notebook');
  return res.json(notes);
}

async function createNotebook(req, res) {
  req.body.user = req.user._id;
  const notebook = await Notebook.create(req.body);
  return res.json(notebook);
}