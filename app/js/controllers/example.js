'use strict';
angular
    .module('mainApp')
.controller('ExampleCtrl', function($scope, Question, $location) {
	$scope.question = {};
	$scope.saveQuestion = function() {
		Question.post($scope.question).then(function() {
		  $location.path('/');
		});
	};

});