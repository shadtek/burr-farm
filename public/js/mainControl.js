angular.module('burr')

.controller('mainController', function ($scope, dataService) {
	$scope.controllerTest = "Farm Fresh Goats Milk";
	
	$scope.serviceTest = dataService.testService()


});