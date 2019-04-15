const express = require("express");

const routes = express.Router();

const UserController = require('../controllers/UserController')

routes.get('/users/:id', UserController.findById);
routes.get('/users', UserController.list);
routes.post('/users', UserController.store);

module.exports = routes;