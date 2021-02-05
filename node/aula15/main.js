require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('pronto')
    })
    .catch(err => console.error(err));

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');


const routes = require('./routes');
const path = require('path');
const middleware = require('./src/middleware/middleware');

app.use(express.urlencoded({ extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'asdfwerwefwefsafsfsdfasfsafwefwefwefwefsa',
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60  * 60 * 42 * 7,
        httpOnly: true
    }
})

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(middleware, routes);

app.on('pronto', () => {
    app.listen(3000); 
})
