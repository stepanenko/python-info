
module.exports = {

  showEvents: (req, res) => {
    const events = [
      { name: 'Basketball', slug: 'basketball', description: 'Throwing into the basket' },
      { name: 'Swimmig', slug: 'swimming', description: 'Fast fish' },
      { name: 'Weightlifting', slug: 'weightlifting', description: 'Lifting heavy things' }
    ];

    res.render('pages/events', { events: events });
  },

  showSingle: (req, res) => {
    const event = { 
      name: 'Basketball',
      slug: 'basketball',
      description: 'Throwing into the basket' 
    };

    res.render('pages/single', { event: event });
  }

};
