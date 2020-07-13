'use strict';

const userRouter = require(__ROUTES + 'userRouter');

module.exports = (app) => {
  app.use('/users', userRouter);
}