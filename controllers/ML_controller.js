var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');
var multer = require('multer');

///// Route to Landing Page \\\\\
router.get('/', function (req, res) {
  res.redirect('/landing');
});


///// Route to Listing Page \\\\\
router.get('/list', function (req, res) {
  item.findAll()
  .then(function(res) {
    res.render('list', { items : res});
    //need a landing.handebars
    //this returns all items - does not differentiate
    // based on search criteria, date, or # of results per page
  });
});


///// Route from /post to /list \\\\\
router.post('/post/insertOne', function (req, res) {
  item.create({
    price: req.body.price,
    itemName: req.body.itemName,
    posterName: req.body.posterName,
    longDescription: req.body.longDescription,
    shortDescription: req.body.shortDescription
    // mainPic: /*UPDATE W/MULTER PARAMS*/,
    // pic2: /*UPDATE W/MULTER PARAMS*/,
    // pic3: /*UPDATE W/MULTER PARAMS*/,
    // pic4: /*UPDATE W/MULTER PARAMS*/,
  })
  .then(function() {
    res.redirect('/list');
    //Should we do some kind of 'post successful' redirect here
    // as an intermediary page between /post and redirect back to /list?
    // Or do another form of validation?
  });

});


///// router for getting info of a specific item for Item Page \\\\\
router.get('/item/:id', function(req, res) {
  var condition = 'id = '+req.params.id;

  item.

});


///// route from item page to update 'sold' field when purchased \\\\\
router.put('/item/updateSold/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;

  item.updateSold({
    sold: true
  },
  {
    where: {
      id:condition
    }
  }).then(function () {
    res.redirect('/list');
    //Do we want an intermediary validation page here so users
    // know that their purchase was successful?
    // Or another type of validation?
  });
});

/////


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
