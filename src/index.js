'use strict';

// Config Server //
const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

const http = require('http');
const server = http.Server(app);

require('./config/mongodb');
require(__dirname + '/globals.js')();

const PORT = process.env.PORT || 3001;
const router = require('./router');


// Set Up Config //
app.use(cors());
app.use(bodyParser.json());

app.use(router);

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
