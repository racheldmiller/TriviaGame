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

// define variable for the timer
var timer = 0; 

// then the game should start w/ 0.
var score = 0; 

// hold the current index of questions.
var questionIndex = 0; 

// ========================================= PROCESS ==========================================

// GOOD HOUSEKEEPING: Make sure that HTML div tags are created and represented.
// Try to figure out where I can console.log stuff.

$(document).ready(function() {

    // create a function startGame() to start the game. 

    // Remember: everything in the initial state should be 0 or empty. 

    // The timer should start running. 

    // If the timer starts running, the button should disappear and the question should display.

    // create a function nextQuestion() and have a for loop to generate the next question. 

    // create a function to update player stats. 

        // if a player guesses correctly...

        // if player guesses incorrectly... 

        // if player runs out of time, they lose.

});


// create a function to render the question
function renderQuestion() {

    // if there's more questions, render the next one. 
    if (questionIndex <= (questions.length-1)) {
        document.querySelector("#question").innerHTML = questions[questionIndex].q;
    }
    // if there's no other questions, end the game.
    else {
        document.querySelector("#question").innerHTML = "Game Over!";
        document.querySelector("#score").innerHTML = "Your score is " + score + " out of" + questions.length;
       }
};

// Create a function to update the score 
function updateScore() {
    document.querySelector("#score").innerHTML = "Score: " + score; 
};

// // create a function to start the trivia session
// $("#questions").click(chooseAnswer)

// // create a for loop that'll loop through the questions 
// for (i = 0; i < questions.length, i++)


// they are a winner if they get through all of the questions without running out of time


// loser if they run out of time OR if they answer a question incorrectly 

// ===================================== MAIN PROCESS ==========================================

// call on the function that you created previously 
renderQuestion();
updateScore();

// When a user presses a key, it'll run this: 
document.onkeyup = function(event) {
    // if there's no more questions, stop the function.
    if (questionIndex === questions.length) {
        return;
    }

    // if the user guesses the right answer, increase their score.
    if (userInput === questions[questionIndex].a) {
        alert("Correct!");
        score++;
        updateScore();
    }
    // else { will have to define how to stop the game 
    //     stopgame 
    // }
};

// the user should be able to click on the answer 
