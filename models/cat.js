var catConstructor = function(name, age, color) {
	this.name = name;
	this.age = age;
	this.color = color;
};

module.exports = catConstructor;
//HOW COME WE NEVER HAVE TO CALL THE DOG CONSTRUCTOR ANYWHERE ELSE? DOES SERVER.JS GET IT WITH REQUIRE(path...)
/*var dogConstructor = function(name, color, breed) {
	this.name = name;
	this.color = color;
	this.breed = breed;
};*/

//module.exports = dogConstructor;
