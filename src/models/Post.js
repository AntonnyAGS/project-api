'use strict';

const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = model('Post', PostSchema);
