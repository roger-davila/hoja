const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

router.get('/notes/user', notesCtrl.getAllNotes);

router.get('/notes/user/:noteId', notesCtrl.findNote);

router.post('/notes/user', notesCtrl.createNote);


module.exports = router;