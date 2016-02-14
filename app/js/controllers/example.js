'use strict';
angular
    .module('mainApp')
.controller('ExampleCtrl', function($scope, Question, $location) {
	$scope.question = {};
	$scope.question.question = '';
	$scope.question.options = [
		{
			option: '',
			is_correct: false
		},
		{
			option: '',
			is_correct: false
		},
		{
			option: '',
			is_correct: false
		},
		{
			option: '',
			is_correct: false
		}
	]
	$scope.saveQuestion = function() {
		Question.post($scope.question).then(function() {
		  $location.path('/');
		});
	};

});