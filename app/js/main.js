angular.module('mainApp', [
	'ui.router',
	'restangular'
]);

angular.module('mainApp').config(function($stateProvider, $urlRouterProvider, RestangularProvider) {
  // Set the base URL for Restangular.
  RestangularProvider.setBaseUrl('http://localhost:3000/api_v1');
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('/', {
      url: "/",
      templateUrl: "index.html"
    })
    .state('add-question', {
      url: "/create/question",
      templateUrl: "quizCard/quiz-card.html"
    });
});

angular.module('mainApp').factory('QuestionRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
	  RestangularConfigurer.setRestangularFields({
	    id: '_id'
	  });
	});
});
angular.module('mainApp').factory('Question', function(QuestionRestangular) {
	return QuestionRestangular.service('questions');
});
