(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ["HomeFactory"];

	function HomeController(HomeFactory) {
		var vm = this;
		vm.title = 'Welcome to Creating Stuff!';

		vm.createCat = function(name, age, color ){
			vm.catCreated = {};
			vm.catCreated.name = name;
			vm.catCreated.age = age;
			vm.catCreated.color = color;
			HomeFactory.createCat(vm.catCreated);

		}

		vm.createDish = function(named, type, yumminess){
			vm.dishCreated = {};
			vm.dishCreated.named = named;
			vm.dishCreated.type = type;
			vm.dishCreated.yumminess = yumminess;

			HomeFactory.createDish(vm.dishCreated);
		}

		vm.createDog = function(){
			HomeFactory.createDog();
		}
	}



})();