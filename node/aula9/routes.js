const express = require('express');
const route = express.Router();

const formHome = require('./controllers/homeController');
const contato  = require('./controllers/contatosController');

route.get('/', formHome.form);
route.post('/', formHome.trataPost);

route.get('/contato', contato.fala)

module.exports = route;


