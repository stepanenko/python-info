
require('dotenv').config();

const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  expressLayouts = require('express-ejs-layouts'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  cookieParser = require('cookie-parser'),
  flash = require('connect-flash'),
  expressValidator = require('express-validator');

app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET,
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false
}));
app.use(flash());

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use(expressLayouts);

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator()); // should be after bodyParser, it uses it

app.use(require('./app/routes'));

app.listen(port, () => console.log(`Listening on port ${port}`));
