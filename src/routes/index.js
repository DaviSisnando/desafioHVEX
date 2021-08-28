const express = require('express');
const UserRouter = require('./userRouter');

const routes = express.Router();

routes.use('/users', UserRouter);

module.exports = routes;