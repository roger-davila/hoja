const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  title: {
    type: String,
    default: 'Untitled',
    required: true,
    minlength: 1,
    maxlength: 150
  },
  markdown_text: {
    type: String,
    maxlength: 65535 // 64kb of text
  },
  notebook: { type: Schema.Types.ObjectId, ref: 'Notebook' },
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }]
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

noteSchema.virtual('lastModified').get(function() {
  return new Date(this.updatedAt).toLocaleString();
});

module.exports = mongoose.model('Note', noteSchema);