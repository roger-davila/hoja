const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  name: {
    type: String,
    minlength: 1,
    maxlength: 30
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Tag', tagSchema);