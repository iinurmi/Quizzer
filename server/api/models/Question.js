var mongoose = require('mongoose');

// Create the Question.
var QuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  options: [],
  correct_answer: []
});

// Export the model.
module.exports = mongoose.model('question', QuestionSchema);