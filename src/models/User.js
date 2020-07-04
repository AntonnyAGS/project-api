'use strict';

const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = model('Users', UserSchema);
