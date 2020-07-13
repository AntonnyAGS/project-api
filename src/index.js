'use strict';

// Config Server //
const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

require(__dirname + '/globals.js')();
require(__CONFIG + 'mongodb');

const PORT = process.env.PORT || 3001;

// Routes //
const { userRouter, postRouter } = require(__ROUTES);

// Set Up Config //
app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRouter);
app.use('/posts', postRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
