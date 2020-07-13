'use strict';

const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  birthDate: {
    type: Date,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isCordinator: {
    type: Boolean,
    default: false,
  }
});

module.exports = model('User', UserSchema);
