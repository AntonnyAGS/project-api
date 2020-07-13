const express = require('express');
const router = express.Router();

// Middlewares //
const userMiddleware = require(__MIDDLEWARES + 'creatingUser');

// Controllers //
const UserController = require(__CONTROLLERS + 'UserController');

// Routes //
// router.get('/', (req, res) => {
//   res.send('Hi world');
// });

// User Routes //
router.post('/', userMiddleware.validateRegister, UserController.store);
router.get('/:id', UserController.index);

module.exports = router;
