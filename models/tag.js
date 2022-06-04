const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  name: {
    type: String,
    minlength: 1,
    maxlength: 30
  }
}, {
  timestamps: true
});

module.exports = mongoose.Model('Tag', tagSchema);