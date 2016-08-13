angular.module('burr')

.controller('mainController', function ($scope, dataService, firebaseService) {
	$scope.controllerTest = "Farm Fresh Goats Milk";
	
	$scope.serviceTest = dataService.testService();

	$scope.goats = firebaseService.getGoats();


});