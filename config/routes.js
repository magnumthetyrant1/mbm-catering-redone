var
  express = require('express'),
  app     = express()
;

module.exports = function(app){

  // Route for the home page
  //===================================================
  app.get('/', function(req, res){
      res.render('index', {
          title : 'MBM Catering - Home',
          class : 'active'
      });
  });

  // Route for the contact page
  //===================================================
  app.get('/contact', function(req, res){
    res.render('contact', {
        title : 'MBM Catering - Contact',
        class : 'active'
    });
  });

  // Route for the events page
  //===================================================
  app.get('/events', function(req, res){
    res.render('events', {
      title : 'MBM Catering - Events',
      class : 'active'
    });
  });

  // Route for the portfolio page
  //===================================================
  app.get('/portfolio', function(req, res){
    res.render('portfolio', {
      title: 'MBM Catering - Portfolio',
      class : 'active'
    });
  });

  // Route for the success page
  //===================================================
  app.get('/success', function(req, res){
    res.render('success', {
      title : 'MBM Catering - Success',
      class : 'active'
    });
  });

  // Route for the success page
  //===================================================
  app.get('/testimonials', function(req, res){
    res.render('testimonials', {
      title : 'MBM Catering - Testimonials',
      class : 'active'
    });
  });

  // Route for the 404 page
  //===================================================
  app.get('/*', function(req, res){
    res.render('404', {
      title : 'Mbm Catering - 404 page'
    });
  });
};// End of routes.js
