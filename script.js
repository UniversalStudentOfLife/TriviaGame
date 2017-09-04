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
var countdownNumber = 60;
var intervalId;

//button trackers
var buttonClicked;


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'
// Objects
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

var triviaObj1 = {

	question: "What is the highest grossing anime film worldwide?",
	options: ["Spirited Away", "Howl's Moving Castle", "Your Name", "Pokemon The Movie"],
	answer: "Your Name", 

}


var triviaObj2 = {

	question: "What is an Otaku?",
	options: ["A type of sushi", "A type of anime fan", "A type of bullet train", "A type of bonsai"],
	answer: " type of anime fan", 

}

var triviaObj3 = {

	question: "What is historically the most popular professional sport in Japan?",
	options: ["Baseball", "Basketball", "Sumo Wrestling", "Marital Arts"],
	answer: "Baseball", 

}

triviaArray = [triviaObj1, triviaObj2, triviaObj3]; 




//++++++++++++++++++++++++++++++++++++++
// On-Click Events 
//++++++++++++++++++++++++++++++++++++++

//$("#startButton").on("click", triviaGenerator(triviaArray));
$("#startButton").on("click", function() {

		//alert("startButton clicked!");
		console.log(triviaArray);

	triviaGenerator(triviaArray);
	countdownTimer();

	//hide button afterwards
	$("#startButton").hide();

});

// handles the user button clicks
$("body").on("click", ".optionButton", function () {

	buttonClicked = this;
	console.log("button clicked:", buttonClicked);

	console.log("Container ID button is in:", $(this).parent().attr('id'));

	console.log("button has been clicked");

	//if user clicks on an option button, run the following
	if ($(this).parent().attr('id') === "optionsContainer") {

		buttonClicked = this;
		alert("button clicked in container", buttonClicked);
		
	}

});


//======================================
// Functions
//======================================


// this will be our countdown timer.
function countdownTimer () {

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
		countdownNumber = 60;
		countdownTimer();

		//move to the next trivia object.
		triviaGenerator(triviaArray);
    }


    //  Execute the run function.

//We will use this function to generate our array.
function triviaGenerator (arr) {

		console.log("made it into the triviaGenerator function");
		console.log("arr value", arr);

	var arrayOfTrivias = arr;

	//Go up one in the array (go to the next object in the array)
	j = j + 1;

	//Don't go beyond the end of the array, if we are at the end, go back to the beginning.
	j = j % arrayOfTrivias.length;

		console.log("arraryoftrivias value", arrayOfTrivias);

	//Loop through the arrary of trivia objects
	//for (var j = 0; j < arrayOfTrivias.length; j++) {
			//console.log("made it into the first forloop (arrayOfTrivias)");


		//Print the trivia's question to the page ===================================
		//Make sure the div is clear for the insertion of the trivia's  question
		$("#questionContainer").text("");

		//Insert the question for the trivia we are on
		var triviaQuestion = arrayOfTrivias[j].question;
		$("#questionContainer").append( "<h2>" + triviaQuestion + "</h2>");
		

		var optionsArray = arrayOfTrivias[j].options;
		console.log("options array value:", optionsArray);

		// Loop through the options array for this trivia and print//append them as buttons to the screen.
		$("#optionsContainer").text("");
		for (var i = 0; i < optionsArray.length; i++) {

					console.log("made it into the second forloop (append options)");

			  $("#optionsContainer").append("<button class='optionButton'>" + optionsArray[i] + "</h2> </button>");

		}

	
	//}

}

});