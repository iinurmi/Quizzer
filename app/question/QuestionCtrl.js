'use strict';
angular
    .module('mainApp')
.controller('QuestionCtrl', ['$scope', 'Question','$stateParams', function($scope, Question, $stateParams){
	console.log($stateParams.id)
	$scope.question = Question.one($stateParams.id).get().$object;

	$scope.answered = false;

	$scope.selectAnswer = function(answer) {
		console.log(answer);
		$scope.answered = true;
		if(answer.is_correct){
			console.log('jeah')
		}else{
			console.log('shit')
		}
	}
}]);