angular.module('mainApp').factory('Question', function(QuestionRestangular) {
	return QuestionRestangular.service('question');
});