const express = require('express');
const router = express.Router();
const notebooksCtrl = require('../../controllers/api/notebooks');

router.get('/user/notebooks', notebooksCtrl.getAllNotebooks);

router.post('/user/notebooks', notebooksCtrl.createNotebook);

router.get('/user/notebooks/:notebookId', notebooksCtrl.getNotebook);

router.get('/user/notebooks/:notebookId/notes', notebooksCtrl.getAllNotesFromNotebook);

module.exports = router;
