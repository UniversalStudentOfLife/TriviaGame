/* 
#####################################################################
++++++++++++++++++++++++ List of stuff to do ++++++++++++++++++++++++ 

div in the center of the page that can dynamically change content

time remaining countdown 
	- timer automatically starts
	- timer counts down
	- if timer hits 0 display answer, wait x amount of time, and move to next page.

Trivia question 
	- build trivia array


Options 
	- build option array (Might not need option array, if we make each trivia activity an object)
	- make answers clickable buttons
		 - buttons need to have "on hovers" to change their color 
	- After buttons are clicked display answer, determine if guessed correctly, start countdown, move to next page
	- Create an append function to append all of the options in an Triva Object to the page
	- 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
changes made in trouble shooting.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

removed extra "," off of the objects properties

######################################################################
*/

//Run these functions once the page loads
$( document ).ready(function() {

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Global variables
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


//This is the array we will use to store our trivia objects.
var triviaArray = [];

// Set the start of the array. We will also use this to keep track of our place is the array.
// Set it to minus so we can go to the first objext (0) in the array when we begin
var j = -1;

//Countdown timer variables
var countdownNumber = 15;
var intervalId;

//button trackers
var buttonClicked;

//comparison variables
var triviaAnswer; 

//score variables
var correctAnswers = 0;
var incorrectAnswers = 0;
var noAnswers = 0;


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'
// Objects
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

var triviaObj1 = {

	question: "What is the highest grossing anime film worldwide?",
	options: ["Spirited Away", "Howl's Moving Castle", "Your Name", "Pokemon The Movie"],
	answer: "Your Name" 

}

var triviaObj2 = {

	question: "What is an Otaku?",
	options: ["A type of sushi", "A type of anime fan", "A type of bullet train", "A type of bonsai"],
	answer: "A type of anime fan" 

}	

var triviaObj3 = {

	question: "What is historically the most popular professional sport in Japan?",
	options: ["Baseball", "Basketball", "Sumo Wrestling", "Marital Arts"],
	answer: "Baseball" 

}

triviaArray = [triviaObj1, triviaObj2, triviaObj3]; 


//++++++++++++++++++++++++++++++++++++++
// On-Click Events 
//++++++++++++++++++++++++++++++++++++++

$("#startButton").on("click", function() {

		//console.log(triviaArray);

	// pass the array of triviaObjects to the triviaGenerator
	triviaGenerator(triviaArray);

	//Start the countdown/timer
	countdownTimer();

	//Hide start button afterward pressed, we won't need it anymore
	$("#startButton").hide();

});

// handles the user button clicks
$("body").on("click", ".optionButton", function () {

	buttonClicked = this.innerText.trim();
	//if user clicks on an option button, run the following
	if ($(this).parent().attr('id') === "optionsContainer") {

	console.log("button clicked:", buttonClicked);
	console.log("triviaAnswer:", triviaAnswer);


		//Run the comparison, check the buttons text and the "answer" from the object.
		if (buttonClicked.toLowerCase() === triviaAnswer.toLowerCase().trim()) {

			alert("CORRECT");
			correctCounter()

		} else {

			alert("WRONG");
			incorrectCounter() 

		}

		
	}

});


//======================================
// Functions
//======================================

function correctCounter() {

	correctAnswers = ++correctAnswers;
	$("#questionContainer").html( "<h2>" + "Correct!" + "</h2>");
	revealAnswer();

}

function incorrectCounter() {

	incorrectAnswers = ++incorrectAnswers;
	$("#questionContainer").html( "<h2>" + "Incorrect!!" + "</h2>");
	revealAnswer();

}

function noAnswerCounter() {

	noAnswers = ++noAnswers;
	$("#questionContainer").html( "<h2>" + "Times Up!" + "</h2>");
	revealAnswer();
}


function revealAnswer() {

	$("#optionsContainer").html("");
	$("#optionsContainer").append("The correct answer was:", "<h2>", String(triviaAnswer) ,"</h2>");
}

// this will be our countdown timer.
function countdownTimer() {
	intervalId = setInterval(decrement, 1000);

}

// The decrement function.
function decrement() {

    // Decrease number by one.
	countdownNumber--;

	//Show the number in the countdown div.
	$("#countdown").html("<h2>" + countdownNumber + "</h2>");


	 //Once number hits zero run gameover function.
	if (countdownNumber === 0) {

	//run the gameOver function.
	 timesUp();
  }
}

    function timesUp() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
     	clearInterval(intervalId);

      	 // Alert the user that time is up.
			//alert("Times Up!");
		
		//reset and restart the countdown.
		countdownNumber = 15;
		countdownTimer();
		noAnswerCounter()

		//move to the next trivia object.
		triviaGenerator(triviaArray);
    }


//We will use this function to generate our array.
function triviaGenerator (arr) {

		//console.log("made it into the triviaGenerator function");
		//console.log("arr value", arr);

	var arrayOfTrivias = arr;

	//Go up one in the array (go to the next object in the array)
	j = j + 1;

	//Don't go beyond the end of the array, if we are at the end, go back to the beginning.
	j = j % arrayOfTrivias.length;

		//console.log("arraryoftrivias value", arrayOfTrivias);

		//assign the trivia's answer to a global variable so we can do a comparrison against the users answer
		//triviaAnswer = triviaAnswer += arrayOfTrivias[j].answer;
		triviaAnswer = arrayOfTrivias[j].answer;

		//console.log("the answer is:", triviaAnswer);

		//Print the trivia's question to the page ================================
		//Insert the question for the trivia we are on
		var triviaQuestion = arrayOfTrivias[j].question;
		$("#questionContainer").html( "<h2>" + triviaQuestion + "</h2>");
		

		var optionsArray = arrayOfTrivias[j].options;
		//console.log("options array value:", optionsArray);

		// Loop through the options array for this trivia and print//append them as buttons to the screen.
		$("#optionsContainer").text("");
		for (var i = 0; i < optionsArray.length; i++) {

					//console.log("made it into the second forloop (append options)");

			  $("#optionsContainer").append("<button class='optionButton btn btn-default'>" + "<h2>" + optionsArray[i] + "</h2> </button>");

		}

	
	//}

}

});