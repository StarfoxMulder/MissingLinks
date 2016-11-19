var express = require('express');
var bodyParser = require('body-parser');
var models = require('./models');
var methodOverride = require('method-override');
var path = require('path');
var exphbs = require('express-handlebars');
var router = require('./controllers/ML_controller.js');
var multer = require('multer');

var app = express();
var upload = multer();

models.sequelize.sync({});
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
// handlebars setup
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', router);


var port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log('Listening on PORT ' + port);
});
