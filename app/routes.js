
const express = require('express'),
  router = express.Router(),
  mainController = require('./controllers/main.controller'),
  eventsController = require('./controllers/events.controller');

module.exports = router;

router.get('/', mainController.showHome);

router.get('/events', eventsController.showEvents);

router.get('/events/:slug', eventsController.showSingle);
