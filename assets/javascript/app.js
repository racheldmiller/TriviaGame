// ================================= GLOBAL VARIABLES ==========================================
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
        question: "This movie cost $8 million to make. How much of that money went to pay the actors' salaries?",
        answers: ["a. $6 million", "b. $4 million", "c. $5 million", "d. $8 million"],
        correctAnswer: "c"
    },
    {
        question: "When John Travolta was reviving Uma Thurman's character, which two board games are seen in the background?",
        answers: ["a. Game of Life, Operation", "b. Monopoly, Game of Life", "c. Candyland, Operation", "d. Scrabble, Operation"],
        correctAnswer: "a"
    },
];

// var indexQandA = 0;
// var correct; 

// user's guess is either right or wrong
var rightGuesses = 0;
var wrongGuesses = 0;
var unanswered = 0;

// ========================================= PROCESS ==========================================

var quizClock = {
        // initiate 30 seconds, and count down by the second
        timeRemaining : 30,
      
        // start the timer, hide the start page, show the questions
        startTimer: function() {
          $("#timer").text("Time remaining: " + quizClock.timeRemaining);
          setInterval(quizClock.countdown, 1000);
        },
      
        // decrement the timer and update the UI; stop the timer at 0
        countdown: function() {
          quizClock.timeRemaining--;
          $("#timer").text("Time remaining: " + quizClock.timeRemaining);
          if (quizClock.timeRemaining === 0) {
    
          }
        },
    };

$(document).ready(function() {

    $("#start").on("click", quizClock.startTimer);
    $("#start").click(function(){
        $("#timer").show();
    });

    // I was told I should use a for each loop since my general for loop didn't work.
    // ... And I don't know how to do that. :( My overall for loop wouldn't work.

    $("#question").html(triviaArray[0].question);
    for (var i = 0; i < triviaArray[0].answers.length; i++) {
        document.getElementById("answer").innerHTML += "<button>" + triviaArray[0].answers[i] + "</button>";
    };

    // $("#question").html(triviaArray[1].question);
    // for (var i = 0; i < triviaArray[1].answers.length; i++) {
    //     document.getElementById("answer").innerHTML += "<button>" + triviaArray[1].answers[i] + "</button>";
    // };

    // $("#question").html(triviaArray[2].question);
    // for (var i = 0; i < triviaArray[2].answers.length; i++) {
    //     document.getElementById("answer").innerHTML += "<button>" + triviaArray[2].answers[i] + "</button>";
    // };

    // $("#question").html(triviaArray[3].question);
    // for (var i = 0; i < triviaArray[3].answers.length; i++) {
    //     document.getElementById("answer").innerHTML += "<button>" + triviaArray[3].answers[i] + "</button>";
    // };

    // List out everything that needs to be hidden before starting the quiz.
    $("#question").hide();
    // $(".choices").hide();
    $("#answer").hide();
    $("#timer").hide();
    
    //  When I click the button. it should start the trivia quiz.
    $("#btn4").on("click", startQuiz);

});

// create a function startQuiz() to start the game. 
    function startQuiz() {

        // the following represents the Results page... meaning I have to create a results page. 
        $("#startQuiz").empty();
        $("#right").empty();
        $("#wrong").empty();
        $("unanswered").empty();

        rightGuesses = 0;
        wrongGuesses = 0;
        unanswered = 0;

        // whatever I hid, now I have to show it: 
        $("#question").show();
        // $(".choices").show();
        $("#answer").show();
        $("#timer").show();
    };