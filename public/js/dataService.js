angular.module('burr')

.service('dataService', function () {

	this.testService = function() {
		var serviceTest = "Service test."
		return serviceTest;
	}

});