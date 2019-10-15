// Personals modules
var global = require('./global.js');
var utils = require('./utils.js');

utils.logH1(" Application Start");

// Modules
var express = require('express');
var mongoose = require('mongoose');
var nunjucks = require('nunjucks');
var bodyParser = require("body-parser");

//var uri = "mongodb+srv://AsTekDBUser:@sT3kDB!@cluster0-xzpwc.gcp.mongodb.net/test?retryWrites=true&w=majority";
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

mongoose.connect(global.mongoDBurl, options);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error when trying to connect to the DataBase'));
db.once('open', function (){  console.log("Connected to the DataBase");});

require('./models/Vane');
require('./models/Prenom');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/prenoms', require('./routes/prenoms'))
app.use('/', require('./routes/vanes'))

nunjucks.configure('views', {
	autoescape: true,
	express: app
});

console.log(global.appName + ' started on the port ' + global.port);
app.listen(global.port);
