angular.module('mainApp', [
	'ui.router'
]);

angular.module('mainApp').config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/",
      templateUrl: "index.html"
    })
    .state('card', {
      url: "/card",
      templateUrl: "quizCard/quiz-card.html"
    });
    
});
