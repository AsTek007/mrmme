var mongoose = require('mongoose');

var vaneSchema = new mongoose.Schema({
  value: String
});

var prenomSchema = new mongoose.Schema({
  value: String
});

var Vane = mongoose.model('mrmme', vaneSchema);
var Prenom = mongoose.model('mrmme', prenomSchema);

//module.exports = Vane;
//module.exports = Prenom;
