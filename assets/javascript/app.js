// ================================= GLOBAL VARIABLES ==========================================

// define questions for the trivia game
// INVESTIGATE: is this the best method to display the q & a? 

var triviaArray = [
    { question: "How many times is 'f*ck' used in Pulp Fiction?", 
    answers: ["a. 252 times", "b. 265 times", "c. 287 times", "d. 301 times"],
    correctAnswer: "b"
    },
    { question: "How many days did Bruce Willis work on the film?", 
    answers: ["a. 28 days", "b. 42 days", "c. 14 days", "d. 18 days"],
    correctAnswer: "d"
    },
    { question: "This movie cost $8 million to make. How much of that money went to pay the actors' salaries?", 
    answers: ["a. $6 million", "b. $4 million", "c. $5 million", "d. $8 million"],
    correctAnswer: "c"
    },
    { question: "When John Travolta was reviving Uma Thurman's character, which two board games are seen in the background?",
    answers:  ["a. Game of Life, Operation", "b. Monopoly, Game of Life", "c. Candyland, Operation", "d. Scrabble, Operation"],
    correctAnswer: "a"
    },
];

// user's guess is either right or wrong
var rightGuesses = 0;
var wrongGuesses = 0; 
var unanswered = 0;

// define variable for the timer
var timer = 0; 

// timer functionality 
var intervalID;

// INVESTIGATE: should I have an index of questions and answers? If so,
var indexQandA = 0; 

// then the game should start w/ 0.
var score = 0; 

// ========================================= PROCESS ==========================================

// GOOD HOUSEKEEPING: Make sure that HTML div tags are created and represented.
// Try to figure out where I can console.log stuff.

$(document).ready(function() {

    //  When I click the button. it should start the trivia quiz.
    $(document).on("click", "#startQuiz", startQuiz);

    // create a function startQuiz() to start the game. 
    function startQuiz() {

        console.log("are you ready?!") 
        
        // INVESTIGATE: I saw these jQuery stuff in other examples. Why is this necessary?
        
        $("#right").empty();
        $("#wrong").empty();
        $("unanswered").empty();
        rightGuesses = 0;
        wrongGuesses = 0;
        unanswered = 0; 

        // The timer should start running.
        // If the timer starts running, the button should disappear and the question should display.
    }
    
    // create a function nextQuestion() and have a for loop to generate the next question.
    function nextQuestion() {
        var question = triviaArray[] // what should go into here? 
        for (i=0, i<questions.length, i++); // should this line read i<triviaArray.length, or i<question.answers.length?
        
        $(".choices").append(triviaArray.answers) // how do I append answers into the buttons?
    } 

    nextQuestion();

    // create a function to update player stats. 
    

        // if a player guesses correctly...

        // if player guesses incorrectly... 

        // if player runs out of time, they lose.

});


// questions = [
//     "How many times is 'f*ck' used in Pulp Fiction?", 
//     "How many days did Bruce Willis work on the film?", 
//     "This movie cost $8 million to make. How much of that money went to pay the actors' salaries?", 
//     "When John Travolta was reviving Uma Thurman's character, which two board games are seen in the background?"
//     ];

// // define answer options for users
// var answers = [["a. 252 times", "b. 265 times", "c. 287 times", "d. 301 times"],
//             ["a. 28 days", "b. 42 days", "c. 14 days", "d. 18 days"],
//             ["a. $6 million", "b. $4 million", "c. $5 million", "d. $8 million"],
//             ["a. Game of Life, Operation", "b. Monopoly, Game of Life", "c. Candyland, Operation", "d. Scrabble, Operation"]
//     ];

// // define correct answers for questions
// var correctAnswer = ["b", "d", "c", "a"];