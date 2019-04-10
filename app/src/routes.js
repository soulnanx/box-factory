const express = require("express");

const routes = express.Router();

const BoxController = require('./controllers/BoxController')


routes.get('/boxes', (req, res) => {
    return res.send('hello rocket docker');
});

routes.post('/boxes', BoxController.store);


module.exports = routes;