const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  archived: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const TodoItem = mongoose.model('TodoItem', itemSchema);

module.exports = TodoItem;