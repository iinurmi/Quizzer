var mongoose = require('mongoose');

// Create the Question.
var QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: [{"option":String, is_correct:Boolean}]
});

// Export the model.
module.exports = mongoose.model('question', QuestionSchema);