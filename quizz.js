var quizQuestions = [
  {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Madrid", "Rome"],
      correctAnswer: "Paris"
  },
  // Add more questions here
];

var currentQuestionIndex = 0;
var selectedOptionIndex;
var correctAnswersCount = 0;

function loadQuestion() {
  if (currentQuestionIndex < quizQuestions.length) {
      var element = document.getElementById('quiz-container');
      element.innerHTML = '<p>' + quizQuestions[currentQuestionIndex].question + '</p>';

      var options = quizQuestions[currentQuestionIndex].options;
      for (var i = 0; i < options.length; i++) {
          element.innerHTML += '<input type="radio" name="option" value="' + i + '">' + options[i] + '<br>';
      }

      selectedOptionIndex = undefined;
      document.getElementById('submit-button').disabled = false;
  } else {
      showResults();
  }
}

function submitAnswer() {
  selectedOptionIndex = document.querySelector('input[name="option"]:checked').value;
  document.getElementById('submit-button').disabled = true;

  if (quizQuestions[currentQuestionIndex].options[selectedOptionIndex] === quizQuestions[currentQuestionIndex].correctAnswer) {
      correctAnswersCount++;
  }

  currentQuestionIndex++;
  loadQuestion();
}

function showResults() {
  var resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = '<h2>Quiz Results</h2>';

  var results = 'You got ' + correctAnswersCount + ' out of ' + quizQuestions.length;
  resultsContainer.innerHTML += '<p>' + results + '</p>';
}

loadQuestion();

document.getElementById('submit-button').addEventListener('click', submitAnswer);