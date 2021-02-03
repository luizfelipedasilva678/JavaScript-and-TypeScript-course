const express = require('express');
const route = express.Router();

const formHome = require('./src/controllers/homeController');
const contato  = require('./src/controllers/contatosController');

route.get('/', formHome.form);
route.post('/', formHome.trataPost);

route.get('/contato', contato.fala)

module.exports = route;


