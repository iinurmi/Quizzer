var Question = require("../models/Question.js");
var extend = require("extend");

var handlers = {
	queryAll: function(req, res){
		Question.find({}).limit(100)
		.then(function(result){
			// remove timeout when ready
			console.log('query all questions');
			res.send(result);
		}, function(error){
			res.status(400).send(error);
			console.log('query error questions');
		});
	},
	create: function(req, res){
		var question = new Question();
		extend(question, req.body);
		
		question.save()
		.then(function(result){
			res.send(result);
		}, function(error){
			res.status(400).send(error);
		});
	}
};
module.exports = handlers;