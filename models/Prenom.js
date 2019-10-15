var mongoose = require('mongoose');

var prenomSchema = new mongoose.Schema({
  value: String,
  gender: {
    type: String,
    default: 'gender'
  },
  color: {
    type: String,
    default: 'purple'
  },
  namesake: [String]
});

prenomSchema.virtual('vane', {
  ref: 'Vane',
  localField: '_id',
  foreignField: 'prenoms'
});

module.exports = mongoose.model('prenom', prenomSchema);;
