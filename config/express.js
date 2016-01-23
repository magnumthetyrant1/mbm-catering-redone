'use strict';
var
  path    = require('path'),
  swig    = require('swig');

module.exports = function(app){
  app.set('view cache', false);
   // To disable Swig's cache, do the following:
   swig.setDefaults({cache: false});
   // Needed to work with angular.js
   //swig.setDefaults({ varControls: ['<%=', '%>'] });

   // view engine setup - we using swig for the
   app.set('views', path.join(config.rootPath, 'views'));
   app.engine('html', swig.renderFile);
   app.set('view engine', 'html');
};
