// Our Missing Links controller
// =====================

// This file uses Sequelize to manage data manipulation
// for all apropos http requests.


var express = require('express');
var router = express.Router();
// edit available and wanted models to match sequelize
var available = require('../models/')["available"];
var wanted = require('../models/')["wanted"];

//get route -> index
router.get('/', function(req,res) {
    // send us to the next get function instead.
    res.redirect('/index')
});




// get route, edited to match sequelize
router.get('/available', function(req,res) {
    // replace old function with sequelize function
    available.findAll({include:{model: available}})
    // use promise method to pass the available items...
    .then(function(available_data){
        console.log(available_data);
        // into the main index, updating the page
        return res.render('index', {available_data})
    })
});

// get route, edited to match sequelize
router.get('/wanted', function(req,res) {
    // replace old function with sequelize function
    wanted.findAll({include:{model: wanted}})
    // use promise method to pass the available items...
    .then(function(wanted_data){
        console.log(wanted_data);
        // into the main index, updating the page
        return res.render('index', {wanted_data})
    })
});







// post route to add available items
router.post('/available/create', function(req, res) {
    // create a new item
    available.create({price: req.body.available_price mainPic: req.body.available_mainPic  pic2: req.body.available_pic2
    pic3: req.body.available_pic3 pic4: req.body.available_pic4 itemName: req.body.available_itemName 
    posterName: req.body.available_posterName  posterContactNumber: req.body.available_posterContactNumber
    longDescription: req.body.available_longDescription   sold: req.body.available_sold datePosted: req.body.available_datePosted
    })

    // pass the result of our call
    .then(function(newAvailable ){
        // log the result to our terminal/bash window
        console.log(newAvailable);
        // redirect
        res.redirect('/');
    });
});

// post route to add wanted items
router.post('/available/create', function(req, res) {
    // create a new item
    wanted.create({price: req.body.wanted_price mainPic: req.body.wanted_mainPic  pic2: req.body.wanted_pic2
    pic3: req.body.wanted_pic3 pic4: req.body.wanted_pic4 itemName: req.body.wanted_itemName 
    posterName: req.body.wanted_posterName  posterContactNumber: req.body.wanted_posterContactNumber
    longDescription: req.body.wanted_longDescription   sold: req.body.wanted_sold datePosted: req.body.wanted_datePosted
    })

    // pass the result of our call
    .then(function(newWanted){
        // log the result to our terminal/bash window
        console.log(newWanted);
        // redirect
        res.redirect('/');
    });
});




module.exports = router;