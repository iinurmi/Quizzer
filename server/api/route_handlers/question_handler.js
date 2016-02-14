var Question = require("../models/Question.js");
var extend = require("extend");
var validator = require("validator");

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
	query: function(req, res){
		var searchQuery;
		if(validator.isMongoId(req.params.id)){
			searchQuery = { _id: validator.toString(req.params.id) };
		} else {
			searchQuery = { url_name: validator.toString(req.params.id) };
		}
		Question.findOne(searchQuery)
		.then(function(result){
			console.log(result);
			var parsedResult = {	
				_id:result._id,
				question:result.question
			};

			parsedResult.options = [];
			for (var i = 0; i < result.options.length; i++) {
				parsedResult.options.push(result.options[i]);
			};

			res.send(parsedResult);
		}, function(error){
			res.status(400).send(error);
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
	},
	update: function(req, res){
		var searchQuery;
		
		if(validator.isMongoId(req.params.id)){
			searchQuery = { _id: validator.toString(req.params.id) };
		} else {
			searchQuery = { url_name: validator.toString(req.params.id) };
		}

		// Update
		Question.findOne(searchQuery)
		.then(function(result){
			// Extend existing record with the data from the UI
			extend(result, req.body);
			return result.save();
		}, function(error){
			res.status(400).send(error);
		})
		.then(function(result){
			res.send(result);
		}, function(error){
			res.status(400).send(error);
		});
	},
	delete: function(req, res){
		var searchQuery;
		
		if(validator.isMongoId(req.params.id)){
			searchQuery = { _id: validator.toString(req.params.id) };
		} else {
			searchQuery = { url_name: validator.toString(req.params.id) };
		} 
		
		Question.remove(searchQuery)
		.then(function(result){
			res.send(result);
		}, function(error){
			res.status(400).send(error);
		});
	}
};
module.exports = handlers;