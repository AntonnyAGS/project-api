'use strict';

const mongoose = require('mongoose');

const connection = mongoose.connect(`mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0-k8ryt.mongodb.net/project?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = connection;