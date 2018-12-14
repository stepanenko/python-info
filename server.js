
require('dotenv').config();

const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  expressLayouts = require('express-ejs-layouts'),
  mongoose = require('mongoose');


app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use(expressLayouts);

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

app.use(require('./app/routes'));

app.listen(port, () => console.log(`Listening on port ${port}`));
