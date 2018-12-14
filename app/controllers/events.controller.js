
const Event = require('../models/event');

module.exports = {
  showEvents: showEvents,
  showSingle: showSingle,
  seedEvents: seedEvents
}

function showEvents(req, res) {
  Event.find({}, (err, events) => {
    if (err) {
      res.status(404);
      res.send('Events not found');
    }

    res.render('pages/events', { events: events });
  })
}

function showSingle(req, res) {
  Event.findOne({ slug: req.params.slug }, (err, event) => {
    if (err) {
      res.status(404);
      res.send('Event not found');
    }

    res.render('pages/single', { event: event });
  });
}

function seedEvents(req, res) {
  const events = [
    { name: 'Basketball', description: 'Throwing into the basket' },
    { name: 'Swimmig', description: 'Fast fish' },
    { name: 'Weightlifting', description: 'Lifting heavy things' },
    { name: 'Ping Pong', description: 'Super fast paddles' }
  ];

  Event.remove({}, () => {
    events.map(event => {
      let newEvent = new Event(event);
      newEvent.save();
    });
  })

  res.send('Database seeded!');
}
