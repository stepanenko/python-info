
const express = require('express'),
  router = express.Router(),
  mainController = require('./controllers/main.controller'),
  eventsController = require('./controllers/events.controller');

module.exports = router;

router.get('/', mainController.showHome);

router.get('/events', eventsController.showEvents);

router.get('/events/seed', eventsController.seedEvents);

router.get('/events/create', eventsController.showCreate);
router.post('/events/create', eventsController.processCreate);

router.get('/events/:slug/edit', eventsController.showEdit);
router.post('/events/:slug', eventsController.processEdit);

router.get('/events/:slug/delete', eventsController.deleteEvent);

router.get('/events/:slug', eventsController.showSingle);
