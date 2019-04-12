// ================================= GLOBAL VARIABLES ==========================================

// define questions for the trivia game
var questions = [
    "How many times is 'f*ck' used in Pulp Fiction?", 
    "How many days did Bruce Willis work on the film?", 
    "This movie cost $8 million to make. How much of that money went to pay the actors' salaries?", 
    "When John Travolta was reviving Uma Thurman's character, which two board games are seen in the background?"
    ];

// define answer options for users
var answers = [["a. 252 times", "b. 265 times", "c. 287 times", "d. 301 times"],
            ["a. 28 days", "b. 42 days", "c. 14 days", "d. 18 days"],
            ["a. $6 million", "b. $4 million", "c. $5 million", "d. $8 million"],
            ["a. Game of Life, Operation", "b. Monopoly, Game of Life", "c. Candyland, Operation", "d. Scrabble, Operation"]
    ];

// define correct answers for questions
var correctAnswer = ["b", "d", "c", "a"];

// user's guess is either right or wrong
var rightGuesses = 0;
var wrongGuesses = 0; 
var unanswered = 0;

// define variable for the timer
var timer = 0; 

// timer functionality 
var intervalID;

// then the game should start w/ 0.
var score = 0; 

// ========================================= PROCESS ==========================================

// GOOD HOUSEKEEPING: Make sure that HTML div tags are created and represented.
// Try to figure out where I can console.log stuff.

$(document).ready(function() {

    //  When I click the button. it should start the trivia quiz.
    $(document).on("click", "#startQuiz", startQuiz);

    // create a function startQuiz() to start the game. 
    // Remember: everything in the initial state should be 0. 

    function startQuiz() {
        // $("#right").hide();
        // $("#wrong").hide();
        // $("#unanswered").hide();
        rightGuesses = 0;
        wrongGuesses = 0;
        unanswered = 0; 

        // The timer should start running.
        // If the timer starts running, the button should disappear and the question should display.
    }
    
    // create a function nextQuestion() and have a for loop to generate the next question. 

    // create a function to update player stats. 

        // if a player guesses correctly...

        // if player guesses incorrectly... 

        // if player runs out of time, they lose.

});
