const express = require('express');
const UserController = require('../controllers/UserController');

const routes = express.Router();

routes.post('/', UserController.create);
routes.get('/', UserController.index);
routes.get('/:id', UserController.show);
routes.put('/:id', UserController.update);
routes.delete('/:id', UserController.delete);

module.exports = routes;
