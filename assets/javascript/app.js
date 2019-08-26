// ---------------------------------- GLOBAL VARIABLES -----------------------------------------
// For timer
var timer;
var count = 30;

// Answer results
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// Represents where the quiz will be in
var quizArea = $("#quizArea");

// ----------------------------------- CLICK EVENTS --------------------------------------

$(document).on("click", "#start", function() {
  triviaGame.start();
});

$(document).on("click", "#done", function() {
  triviaGame.done();
});

// --------------------------------- QUESTIONS & ANSWERS -----------------------------------------
var triviaArray = [
  {
    question: "How many times is 'f*ck' used in Pulp Fiction?",
    answers: ["a. 252 times", "b. 265 times", "c. 287 times", "d. 301 times"],
    correctAnswer: "b"
  },
  {
    question: "How many days did Bruce Willis work on the film?",
    answers: ["a. 28 days", "b. 42 days", "c. 14 days", "d. 18 days"],
    correctAnswer: "d"
  },
  {
    question:
      "This movie cost $8 million to make. How much of that money went to pay the actors' salaries?",
    answers: [
      "a. $6 million",
      "b. $4 million",
      "c. $5 million",
      "d. $8 million"
    ],
    correctAnswer: "c"
  },
  {
    question:
      "When John Travolta was reviving Uma Thurman's character, which two board games are seen in the background?",
    answers: [
      "a. Game of Life, Operation",
      "b. Monopoly, Game of Life",
      "c. Candyland, Operation",
      "d. Scrabble, Operation"
    ],
    correctAnswer: "a"
  }
];

// ------------------------------------ QUIZ FUNCTIONALITY ------------------------------------

// wrap everything in a variable called triviaQuiz
var triviaGame = {
  correct: 0,
  incorrect: 0,
  count: 30,

  // Function for starting quiz. User should see Qs, As, + working timer.
  start: function() {
    // represented in milliseconds
    timer = setInterval(triviaGame.countdown, 1000);
    $("#subContainer").prepend(
      // span id: what HTML displays... Needs to match my count value
      "<h2>Time Remaining: <span id='numberCount'>30</span> Seconds</h2>"
    );
    // Remove the start button, replace w/ triviaArray & append answers to radio buttons
    $("#start").remove();
    for (var i = 0; i < triviaArray.length; i++) {
      quizArea.append("<h2>" + triviaArray[i].question + "</h2>");
      for (var j = 0; j < triviaArray[i].answers.length; j++) {
        quizArea.append(
          "<input type='radio' name='question-" +
            i +
            "' value='" +
            triviaArray[i].answers[j] +
            "''>" +
            triviaArray[i].answers[j]
        );
      }
    }
    // Create a "done" button for user to submit their result
    // Otherwise, the when timer = 0, it'll automatically render the results
    quizArea.append(
      "<br><button class='btn btn-primary' id='done'>I'm Finished!</button>"
    );
  },

  // Function for timer counting down. User should be stopped once timer hits 0.
  countdown: function() {
    triviaGame.count--; // Time left decrements
    $("#numberCount").html(triviaGame.count); // numberCount represents the area where the timer is counting down
    if (triviaGame.count <= 0) {
      // In case something funky happens with the timer... like going into the negatives
      console.log("YOU RAN OUT OF TIME! :(");
      // Run done function
      triviaGame.done();
    }
  },

  // Function for ending quiz.
  // Evaluate that user has selected radio buttons, and from there, if it's correct/incorrect/unanswered.
  done: function() {
    // $.each($('input[name="question-0]":checked')), function(){
    //   if($(this).val()==triviaArray[0].correctAnswer){
    //     triviaGame.correct++;
    //   }
    //   else {
    //     triviaGame.incorrect++;
    //   }
    //   }
    // },
    // $.each($('input[name="question-1]":checked')), function(){
    //   if($(this).val()==triviaArray[1].correctAnswer){
    //     triviaGame.correct++;
    //   }
    //   else {
    //     triviaGame.incorrect++;
    //   }
    //   }
    // },
    // $.each($('input[name="question-2]":checked')), function(){
    //   if($(this).val()==triviaArray[2].correctAnswer){
    //     triviaGame.correct++;
    //   }
    //   else {
    //     triviaGame.incorrect++;
    //   }
    //   }
    // },
    // $.each($('input[name="question-3]":checked')), function(){
    //   if($(this).val()==triviaArray[3].correctAnswer){
    //     triviaGame.correct++;
    //   }
    //   else {
    //     triviaGame.incorrect++;
    //   }
    //   }
    // },
    var userInputs = quizArea.children("input:checked");
    for (var i = 0; i < userInputs.length; i++) {
      if ($(userInputs[i]).val() === triviaArray[i].correctAnswer) {
        triviaGame.correct++;
      } else {
        triviaGame.incorrect++;
      }
    }
    // Run result function
    this.result();
  },

  // Function to remove timer & show quiz results.
  result: function() {
    clearInterval(timer);

    $("#subContainer h2").remove();

    quizArea.html("<h2>Thanks for playing! Here's your results:</h2>");
    quizArea.append("<h3>Correct Answers: " + this.correct + "</h3>");
    quizArea.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    // UNANSWERED = subtract # of Qs user answered from how many Qs exist
    quizArea.append(
      "<h3>Unanswered: " +
        (triviaArray.length - (this.correct + this.incorrect)) +
        "</h3>"
    );
  }
};
