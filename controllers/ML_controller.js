var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');
var connection = require('../config/connection.js');
var models = require('../models');
var multer = require('multer');

///// Route to Landing Page \\\\\
router.get('/', function (req, res) {
  res.redirect('/landing');
  //need a landing.handebars
});


///// Route to Available Items List Page \\\\\
router.get('/listA', function (req, res) {
  models.available.findAll({})
  .then(function(data) {
    res.render('listA', { available : data});
    //this returns all available items
    // need model for available items
  });
});

///// Route to Wanted Items List Page \\\\\
router.get('/listW', function (req, res) {
  models.wanted.findAll({})
  .then(function(data) {
    res.render('listW', { wanted : data});
    //this returns all wanted items
    // need model for wanted items
  });
});


///// Route from /post/insertOne to /list \\\\\
router.post('/post/available', function (req, res){

  models.available.create({
    price: req.body.price,
    itemName: req.body.itemName,
    posterName: req.body.posterName,
    longDescription: req.body.longDescription,
    shortDescription: req.body.shortDescription,
    sold: false
    // mainPic: /*UPDATE W/MULTER PARAMS*/,
    // pic2: /*UPDATE W/MULTER PARAMS*/,
    // pic3: /*UPDATE W/MULTER PARAMS*/,
    // pic4: /*UPDATE W/MULTER PARAMS*/,
  })
  .then(function() {
    res.redirect('/listA');
    //Should we do some kind of 'post successful' redirect here
    // as an intermediary page between /post and redirect back to /list?
    // Or do another form of validation?
  });

});

///// Route from /post/wanted to /list \\\\\
router.post('/post/wanted', function (req, res){

  models.wanted.create({
    price: req.body.price,
    itemName: req.body.itemName,
    posterName: req.body.posterName,
    longDescription: req.body.longDescription,
    shortDescription: req.body.shortDescription,
    found: false
    // mainPic: /*UPDATE W/MULTER PARAMS*/,
    // pic2: /*UPDATE W/MULTER PARAMS*/,
    // pic3: /*UPDATE W/MULTER PARAMS*/,
    // pic4: /*UPDATE W/MULTER PARAMS*/,
  })
  .then(function() {
    res.redirect('/listW');
    //Should we do some kind of 'post successful' redirect here
    // as an intermediary page between /post and redirect back to /list?
    // Or do another form of validation?
  });

});


///// router for getting info of a specific Available Item for ItemA Page \\\\\
router.get('/itemA/:id', function(req, res) {
  var id = req.params.id;
  var condition = 'id = '+id;

  models.available.findById(id)
  .then(function(data){
    res.render('itemA', {available : data});
  });

});


///// route from item page to update 'sold' field when purchased \\\\\
router.put('/itemA/sold/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;

  models.available.updateSold({
    sold: true
  },
  {
    where: {
      id:condition
    }
  }).then(function () {
    res.redirect('/listA');
    //Do we want an intermediary validation page here so users
    // know that their purchase was successful?
    // Or another type of validation?
  });
});

///// router for getting info of a specific Wanted Item for ItemW Page \\\\\
router.get('/itemW/:id', function(req, res) {
  var id = req.params.id;
  var condition = 'id = '+id;

  models.wanted.findById(id)
  .then(function(data){
    res.render('itemW', {wanted : data});
  });

});


///// route from item page to update 'found' field when an item is found - i think in theory this would lead to connecting the two users so they can coordinate on how to complete the transaction independently \\\\\
router.put('/itemW/found/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;

  models.wanted.updateFound({
    found: true
  },
  {
    where: {
      id:condition
    }
  }).then(function () {
    res.redirect('/listW');
    //Do we want an intermediary validation page here so users
    // know that their purchase was successful?
    // Or another type of validation?
  });
});


///// in case we need a delete/remove item option \\\\\
// router.delete('/item/deleteOne/:id', function (req, res) {
//     //sequelize update
//   var condition = 'id = ' + req.params.id;

//   item.deleteOne({
//     where: {
//       id:condition
//     }
//   }).then(function () {
//     res.redirect('/list');
//   });
// });


module.exports = router;
