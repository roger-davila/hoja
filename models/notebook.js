const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notebookSchema = new Schema({
  name: {
    type: String,
    minlength: 1,
    maxlength: 50
  }
}, {
    timestamps: true
});

module.exports = mongoose.Model('Notebook', notebookSchema);