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


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Global variables
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

var triviaArray = [];



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'
// Objects
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

var triviaObj1 = {

	question: "What is the highest grossing anime film worldwide?",

	option1: "Spirited Away",
	option2: "Howl's Moving Castle",
	option3: "Your Name",
	option4: "Pokemon The Movie",

	answer: "Your Name", 

}


var triviaObj2 = {

	question: "What is an Otaku?",

	option1: "A type of sushi",
	option2: "A type of anime fan",
	option3: "A type of bullet train",
	option4: "A type of bonsai",

	answer: " type of anime fan", 

}

var triviaObj3 = {

	question: "What is historically the most popular professional sport in Japan?",

	option1: "Baseball",
	option2: "Basketball",
	option3: "Sumo Wrestling",
	option4: "Marital Arts",

	answer: "Baseball", 

}

triviaArray = [triviaObj1, triviaObj2, triviaObj3]; 




//++++++++++++++++++++++++++++++++++++++
// On-Click Events 
//++++++++++++++++++++++++++++++++++++++





//======================================
// Functions
//======================================
