var router = require('express').Router();

var mongoose = require('mongoose');
var global = require('./../global.js');
var utils = require('./../utils.js');

var Vane = require('./../models/Vane');


router.route('/')
.get(function(req,res){
	Vane.find(function(err, vanes){
        if (err){
            res.send(err);
        }
        res.render('vane/index.html', {vanes: vanes});
    });
})
.post(function(req,res){
      var vane = new Vane();
      vane.title = req.body.title;
      vane.number = req.body.number;
      vane.picture = req.body.picture;
      vane.description = req.body.description;
      vane.prenoms = req.body.prenoms;
      vane.save(function(err){
        if(err){
          res.send(err);
        }
        res.json({message : 'The Vane \'' + req.body.title + '\', has been added to the database'});
      });
    });


module.exports = router;
