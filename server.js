var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;


app.set('views', path.join(__dirname, 'views'));
//set the view engine that will render HTML from the server to the client
app.engine('.html', require('ejs').renderFile);
//Allow for these directories to be usable on the client side
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
//we want to render html files
app.set('view engine', 'html');
app.set('view options', {
	layout: false
});

//middleware that allows for us to parse JSON and UTF-8 from the body of an HTTP request
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//on homepage load, render the index page
app.get('/', function(req, res) {
	res.render('index');
});

var cat = require("./models/cat.js");
var cats = require("./models/db.js");

var dish = require("./models/dish.js");
var dishes = require("./models/dishDB.js");


//WHY IS THERE A DOT BEFORE MODELS
var dog = require("./models/dog.js");
var dogs = require("./models/dbD.js");



app.get("/cats", function(req,res){
	var myCat = new cat("Mittens", "30", "blue");
	res.send(cats);
});

app.post("/cats", function(req, res){
	console.log(req.body);
	var newCat = new cat(req.body.name, req.body.age, req.body.color);
	cats.push(newCat);
	console.log(cats);
	res.send(cats);
});

//---------------------------DISHES----------------------------------------
app.get("/dishes", function(req, res){
	var myDish = new dish("Lasagna", "Italian", "300");
	res.send(dishes);
});

app.post("/dishes", function(req, res){
	var newDish = new dish(req.body.named, req.body.type, req.body.yumminess);
	dishes.push(newDish);
	console.log(dishes);
	res.send(dishes);
})

//---------------------------DOGS-----------------------------------------------------
app.get("/dogs", function(req,res){
	var myDog = new dog("JJ", "purple", "gangster");
	res.send(dogs);
});

app.post("/dogs", function(req, res) {
	var newDog = new dog(req.body.name, req.body.color, req.body.breed);
	dogs.push(newDog);
	console.log(dogs);
	res.send(dogs);
});

//----------THIS IS WHERE YOU SEND INFO TO SERVER AND THEN ALLOW THE LOCAL HOST TO RUN

var server = app.listen(port, function() {
	var host = server.address().address;
	console.log('Example app listening at http://localhost:' + port);
});