
// timer functionality
// var quizClock = {
//     // initiate 30 seconds, and count down by the second
//     timeRemaining = 30,
  
//     // start the timer, hide the start page, show the questions
//     startTimer: function() {
//       $("#timer").text("Time remaining: " + quizClock.timeRemaining);
//       setInterval(quizClock.countdown, 1000);
//     },
  
//     // decrement the timer and update the UI; stop the timer at 0
//     countdown: function() {
//       quizClock.timeRemaining--;
//       $("#timer").text("Time remaining: " + quizClock.timeRemaining);
//       if (quizClock.timeRemaining === 0) {
//         clearInterval();
//         $("#time").hide();
//         $("#submit").hide();
//         resultsHolder;
//         $("#results").show();
//       }
//     },
// };


// timer functionality 
// var intervalID;

// define variable for the timer
// var timer = 0;

// // // timer functionality
// var quizClock = {
//     // initiate 30 seconds, and count down by the second
//     timeRemaining = 30,
  
//     // start the timer, hide the start page, show the questions
//     startTimer: function() {
//       $("#timer").text("Time remaining: " + quizClock.timeRemaining);
//       setInterval(quizClock.countdown, 1000);
//     },
  
//     // decrement the timer and update the UI; stop the timer at 0
//     countdown: function() {
//       quizClock.timeRemaining--;
//       $("#timer").text("Time remaining: " + quizClock.timeRemaining);
//       if (quizClock.timeRemaining === 0) {
//         clearInterval();
        
//       }
//     },
// };

// timer functionality 
// var intervalID;

// // INVESTIGATE: should I have an index of questions and answers? If so,
// var indexQandA = 0; 

// then the game should start w/ 0.
// var score = 0; 

// create a results page at the end instead ("<h3>this is how many you've guessed correctly " + correct + "! </h3>")
// jQuery manipulates HTML!


    // // gets all the questions then indexes the current questions
    // var questionContent = Object.values(triviaArray[i].question)[triviaArray[i].indexQandA];
    // $('#question').text(questionContent);

    // // an array of all the user options for the current question
    // var questionOptions = Object.values(triviaArray[i].answers)[triviaArray[i].indexQandA];

    // // creates all the trivia guess options in the html
    // $.each(questionOptions, function(index, key){
    // $('#options').append($('<button class="option btn btn-info btn-lg">'+key+'</button>'));
    // })


    // $("#question").html(triviaArray[0].question);
    // for (var i = 0; i < triviaArray.length; i++) {
    //     document.getElementById("answer").innerHTML += "<button>" + triviaArray.answers + "</button>";
    // };

    // correct = triviaGame[indexQandA].correct;
    // var question = triviaGame[indexQandA].question;
    // $('#question').html(question);
    // for (var i = 0; i < triviaGame.length; i++) {
    //     var answer = triviaGame[indexQandA].answer[i];
    //     $('.answers').append('<h4 class= answersAll id=' + i + '>' + answer + '</h4>');
    // }

     // function timer() {
    //     timer = setInterval(countdown, 10000 * 3)
    // };

    // create a function nextQuestion() and have a for loop to generate the next question.
    

//     var never = [1,2,3,4,7];

    // function please () {
    // for (var i = 0; i < never.length; i++) {
    // document.getElementById("more").innerHTML += "<button>" + never[i] + "</button>";
    //  }
    // }

    // please();



    //     $("#answer").append("<button>" + triviaArray[0].answers + "</button>")

        
        // var displayQ = triviaArray[count];
        // $("#question").html(displayQ.question);
        // for (var i = 0; i < question.answers.length; i++) {
        //     $(".choices").html(question.answers[i]);
        // };
        // console.log(triviaArray[0].question)

        // $("#question").html(triviaArray[0].question)

        // for (var i = 0; i < question.answers.length; i++); {
        //     $("#answer").append("<button>" + triviaArray[0].answers + "</button>")
        // }

        // triviaArray.forEach(function (answers) {
        //     var x = answers.[1] + 1;
        //     console.log(x);
        // })


        // for (var j=0; j < triviaArray.length; j++) {
        //     console.log(triviaArray[j])
        // };
    //     var question = triviaArray[] // what should go into here? 
    //     for (i=0, i<questions.length, i++); // should this line read i<triviaArray.length, or i<question.answers.length?

    //     $(".choices").append(triviaArray.answers) // how do I append answers into the buttons?
    // } 

    // nextQuestion(); // if I create a function, I have to execute it 

    // create a function to update player stats. 

        // if a player guesses correctly...

        // if player guesses incorrectly... 

        // if player runs out of time, they lose.
 
// });