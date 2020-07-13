'use strict';

const express = require('express');
const router = express.Router();

// Middlewares //
const authMiddleware = require(__MIDDLEWARES + 'auth');

// Controllers //
const PostController = require(__CONTROLLERS + 'PostController');

// Post Routes //
router.post('/register', PostController.store);

router.get('/', authMiddleware, PostController.index);

module.exports = router;