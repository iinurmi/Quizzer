'use strict';
angular
    .module('mainApp')
    .controller('ExampleCtrl', function($scope) {
		var questionObj = {
			question: 'What a fuck?',
			options: [
				'yes',
				'no'
			],
			correct_answer: [0]
		};

    });