var router = require('express').Router();

var mongoose = require('mongoose');
var global = require('./../global.js');
var utils = require('./../utils.js');

var Vane = require('./../models/Vane');
router.get('/', (req, res) => {
  console.log("la lala" );
// mongoose.connect(global.mongoDBurl, function(error, db) {
//       if (error) {
//   			console.log(error);
//   		} else {
//   	    console.log("Connecté à la base de données '" + global.mongoDBurl + "'");
//
  			// db.collection("vane").find({}).toArray(function (error, results) {
  			// 		if (error) {
  			// 			console.log("error : "  + error );
  			// 			throw error;
  			// 		} else {
  			// 			console.log("vane : " );
        //
  			// 			results.forEach(function(res) {
  			// 				console.log(res + " ==> " + res._id + " ObjectId : "  + res.title );
  			// 			});
        //
        //       res.render('vane/index.html', {vanes: results})
  			// 		}
  			// });
  // 		}
  //

  // Récupérer toutes les vanes
 Vane.find({}).populate('prenoms').then(vanes => {
   utils.logH1(vanes);
   res.render('vane/index.html', {vanes: vanes})
 });
});




module.exports = router;
