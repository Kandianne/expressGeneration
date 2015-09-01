var dishConstructor = function(named, type, yumminess) {
	this.named = named;
	this.type = type;
	this.yumminess = yumminess;
};

var dishDatabase = [];

module.exports = dishConstructor;