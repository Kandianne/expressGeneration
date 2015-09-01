//-------------CATS DATABASE----------------
var cat = require("./cat");
var catDatabase = [];


catDatabase.push(new cat("Mittens", "Cornish Rex", "Orange"));
catDatabase.push(new cat("Socks", "Siamese", "Blue"));
catDatabase.push(new cat("Leo", "Lion", "Green"));


module.exports = catDatabase;
