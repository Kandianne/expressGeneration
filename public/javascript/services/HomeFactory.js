(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['$http', '$q'];

	function HomeFactory($http, $q) {
		var o = {};
		
		o.getCats = function() {
			$http.get("/cats").success(function(res){
				console.log(res);
			});
		};

		o.createCat = function(catCreated) {
			$http.post("/cats", catCreated).success
			(function(res){
				console.log(res);
			});
		};

		//----------DOGS---------------------------------

		o.getDogs = function() {
			$http.get("/dogs").success(function(res){
				console.log(res);
			});
		};

		o.createDog = function(){
			$http.post("/dogs").success
			(function(res){
				console.log(res);
			});
		};

		//----------FOOD---------------------------------

		o.getDish = function() {
			$http.get("/dishes").success(function(res){
				console.log(res);
			});
		};

		o.createDish = function(dishCreated) {
			$http.post("/dishes", dishCreated).success(function(res){
				console.log(res);
			});
		}

		o.getDish();
		o.getDogs();
		o.getCats();

		return o;
	}

})();