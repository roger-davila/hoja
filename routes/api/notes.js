const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

router.get('/notes/user', notesCtrl.getAllNotes);

module.exports = router;