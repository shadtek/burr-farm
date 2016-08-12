angular.module('burr')

.service('dataService', function () {

	this.testService = function() {
		var serviceTest = "...and Eggs"
		return serviceTest;
	}

});