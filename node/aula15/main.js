require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('pronto')
    })
    .catch(err => console.error(err));



const routes = require('./routes');
const path = require('path');
const middleware = require('./src/middleware/middleware');

app.use(express.urlencoded({ extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(middleware, routes);

app.on('pronto', () => {
    app.listen(3000); 
})
