const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notebookSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  name: {
    type: String,
    minlength: 1,
    maxlength: 50,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Notebook', notebookSchema);