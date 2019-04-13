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

// options for user's guess
var correct = 0;
var incorrect = 0;
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

    // does this actually work?  Need to test. Thanks to May for suggesting this! 
    // for (var i=0; i<triviaArray.length; i++) {
    //     $("#question").html(triviaArray[i].question);
    //     for (var j = 0; j < triviaArray[i][answers].length; j++) {
    //         console.log("it worked");
    //     }
    // };

    // MY ORIGINAL FOR LOOP -- ONLY WAY I WAS ABLE TO GET THE Qs AND As TO PRINT ONTO THE SCREEN
    // I was told I should use a for each loop... whatever that is. 

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

// ========== PSUEDOCODING THE REST B/C I SPENT TOO MUCH TIME ON THE TIMER AND MY FOR LOOP =========================

// create a function showImage() to show image after a player answers a question
    // timer should stop when this happens 
    // correct answer should also be displayed

// create a function evaluateAnswer() to determine how the user's stats 
    // clearInterval to stop the timer 
    // if, else if, else statements 
        // if = player guesses correctly 
            // correct ++; 
        // else if = player guesses incorrectly 
            // incorrect ++; 
        // else = player runs out of time/doesn't answer 
            // unanswered ++; 

// create a function results() to reset the quiz (need up update HTML to have a retry ID)
    // $("#right").text("right guesses: " + rightGuesses);
    // $("#wrong").text("wrong guesses: " + wrongGuesses);
    // $("#unanswered").text("unanswered guesses: " + unanswered);
    // $("#retry").show(); 
    // $("#retry").click(startQuiz);
