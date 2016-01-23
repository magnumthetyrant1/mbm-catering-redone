var
    express = require('express'),
    swig    = require('swig'),
    favicon = require('express-favicon'),
    port    = process.env.PORT || 5000,
    app     = express();
  // serve static files
//===================================================
app.use(express.static(__dirname + '/public'));


// Serve favicon
//===================================================
app.use(favicon(__dirname + '/public/favicon.ico'));


// Set the template engine
//===================================================
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/public/views');
app.set('view cache', false);
swig.setDefaults({ cache: false });

//Importing the routes from /config/routes
require('./config/routes')(app);
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
