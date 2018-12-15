
const Event = require('../models/event');

module.exports = {
  showEvents: showEvents,
  showSingle: showSingle,
  seedEvents: seedEvents,
  showCreate: showCreate,
  processCreate: processCreate,
  showEdit: showEdit,
  processEdit: processEdit,
  deleteEvent: deleteEvent
}

function deleteEvent(req, res) {
  Event.remove({ slug: req.params.slug }, (err) => {
    if (err) throw err;

    req.flash('success', 'Event deleted');
    res.redirect('/events');
  });

}

function processEdit(req, res) {
  req.checkBody('name', 'Specify a name').notEmpty();
  req.checkBody('description', 'Give some description').notEmpty();

  const errors = req.validationErrors();
  if (errors) {
    req.flash('errors', errors.map(err => err.msg));
    return res.redirect(`/events/${req.params.slug}/edit`);
  }

  Event.findOne({ slug: req.params.slug }, (err, event) => {
    event.name = req.body.name;
    event.description = req.body.description;

    event.save(err => {
      if (err) throw err;
      
      req.flash('success', 'Successfully updated event');
      res.redirect('/events');
    });
  });
}

function showEdit(req, res) {
  Event.findOne({ slug: req.params.slug }, (err, event) => {
    res.render('pages/edit', {
      event: event,
      errors: req.flash('errors')
    });
  })
}

function showCreate(req, res) {
  res.render('pages/create', {
    errors: req.flash('errors')
  });
}

function processCreate(req, res) {
  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('description', 'Description is required').notEmpty();

  const errors = req.validationErrors();
  if (errors) {
    req.flash('errors', errors.map(err => err.msg));
    return res.redirect('/events/create');
  }

  const event = new Event({
    name: req.body.name,
    description: req.body.description
  });

  event.save((err) => {
    if (err) throw err;

    req.flash('success', 'Successfully created event!');

    res.redirect(event.slug);
  });
}

function showEvents(req, res) {
  Event.find({}, (err, events) => {
    if (err) {
      res.status(404);
      res.send('Events not found');
    }

    res.render('pages/events', { 
      events: events,
      success: req.flash('success')
    });
  });
}

function showSingle(req, res) {
  Event.findOne({ slug: req.params.slug }, (err, event) => {
    if (err) {
      res.status(404);
      res.send('Event not found');
    }

    res.render('pages/single', { 
      event: event,
      success: req.flash('success')
    });
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
