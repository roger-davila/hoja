const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

router.get('/user/notes', notesCtrl.getAllNotes);

router.get('/user/notes/:noteId', notesCtrl.findNote);

router.post('/user/note', notesCtrl.createNote);

router.put('/user/notes/note', notesCtrl.saveNote);


module.exports = router;