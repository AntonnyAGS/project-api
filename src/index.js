'use strict';

// Config Server //
const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

require(__dirname + '/globals.js')();
require(__CONFIG + 'mongodb');

const PORT = process.env.PORT || 3001;
require('./router')(app);

// Set Up Config //
app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
