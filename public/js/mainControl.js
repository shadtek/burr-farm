angular.module('burr')

.controller('mainController', function ($scope, dataService) {
	$scope.controllerTest = "Controller test.";
	
	$scope.serviceTest = dataService.testService()


});