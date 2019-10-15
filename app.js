// Personals modules
var global = require('./global.js');
var utils = require('./utils.js');

// Modules
var express = require('express');
var mongoose = require('mongoose');
var nunjucks = require('nunjucks');

//var uri = "mongodb+srv://AsTekDBUser:@sT3kDB!@cluster0-xzpwc.gcp.mongodb.net/test?retryWrites=true&w=majority";

utils.logH1(" LANCEMENT DE L'APPLICATION");

mongoose.connect(global.mongoDBurl, function(error, db) {
    if (error) {
			console.log(error);
		} else {
	    console.log("Connecté à la base de données '" + global.mongoDBurl + "'");
		}
});

require('./models/Vane');
require('./models/Prenom');


var app = express();

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/prenoms', require('./routes/prenoms'))
app.use('/', require('./routes/vanes'))

nunjucks.configure('views', {
	autoescape: true,
	express: app
});

console.log(global.serverName + ' lancée sur le port ' + global.port);
app.listen(global.port);
