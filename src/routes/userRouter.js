'use strict';

const express = require('express');
const router = express.Router();

// Middlewares //
const userMiddleware = require(__MIDDLEWARES + 'creatingUser');

// Controllers //
const UserController = require(__CONTROLLERS + 'UserController');

// User Routes //
router.post('/register', userMiddleware.validateRegister, UserController.store);
router.post('/authenticate', UserController.authenticate);

router.get('/:id', UserController.index);

module.exports = router;
