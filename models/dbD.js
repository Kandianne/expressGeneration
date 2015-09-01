//-------------DOGS DATABASE----------------
var dog = require("./dog");
var dogDatabase = [];

dogDatabase.push(new dog("Jetta", "black", "Fox Terrier"));
dogDatabase.push(new dog("Jay Jay", "brown", "Chow"));
dogDatabase.push(new dog("Koda", "blue", "Bear"));

module.exports = dogDatabase;