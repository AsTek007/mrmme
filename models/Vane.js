var mongoose = require('mongoose');

var vaneSchema = new mongoose.Schema({
  title: String,
  number: Number,
  description: String,
  picture: String,
  prenoms: [{type: mongoose.Schema.Types.ObjectId,
             ref: 'Prenom'}]
});

module.exports = mongoose.model('vane', vaneSchema);
