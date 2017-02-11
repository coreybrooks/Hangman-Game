//Everything below will be inside a function that runs until the game is reset after a win or loss

// Global variables

//function to play a sound




// array of movie titles
  var movieTitles = ['gladiator', 'twilight', 'cinderella', 'uninhabited', 'inception', 'frozen', 'hancock', 'dracula',
   'titanic', 'aladdin', 'armageddon', 'enchanted', 'taken', 'twins', 'avatar', 'transformers', 'frankenstein'];

  var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
   "V", "W", "X", "Y", "Z"];


//These get reset when a new word is chosen. win or loss..
// movie title chosen by game for the player to guess
var chosenMovie = movieTitles[Math.floor(Math.random()*movieTitles.length)];
numberOfRemainingGuesses = 10;
       // empty array which to push the user choices, in order to keep track of letters already chosen         
var isPushed = []; 
var guesses = '';
var wins = 0, losses = 0, newPrompt = 'GUESS THE LETTERS <br> IN THE MOVIE TITLE';
var totalClickCount = 0;
var sound = new Audio('assets/images/sound38.mp3');
var soundClicks = new Audio('assets/images/click.mp3');
var fail = new Audio('assets/images/fail.wav');
var badLetter = new Audio('assets/images/badLetter.mp3');



//Sets the inital blank title so the player can see how many characters are in the title
title = '';
for (i=0; i<chosenMovie.length; i++) {title += '_';};
document.querySelector('#blanks').innerHTML=title;


// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {


// Determine which key was pressed and converts all to lowercase
  var userGuess = event.key.toLowerCase();

//begins counting the total number of times a key is clicked, to help clear the original prompt
totalClickCount++

// The following block of statements will execute if the letter has not been chosen yet
// .. also executes the first time any key is pressed

   if (isPushed.indexOf(userGuess) === -1) {


        //The press any key prompt will change the first time a player presses any key
        document.getElementById('topLeft').innerHTML = newPrompt;
        document.getElementById('topLeft').style.color = 'green';

        //The following block of statements will execute if more than one button has been pressed, AND the letter is in the letter array

      if ((totalClickCount > 1) && (letters.indexOf(userGuess.toUpperCase()) >= 0)) {


   	    // push the user choices to the empty array
        isPushed.push(userGuess);
        title = '';
             

                //if the chosen letter is not in the movie title, then decrease the number of guesses remaining
                //and display the letter in the already guessed section
                 if (chosenMovie.indexOf(userGuess) === -1) {
                  badLetter.play();
                 	numberOfRemainingGuesses--;
                 	guesses += " " + userGuess;
                 }
                else {
                soundClicks.play();
                }

                
            for (i=0; i<chosenMovie.length; i++) {
            	//if the chosen letter is in the isPushed array, then concatentate the letter to title, converts all to uppercase
	           if (isPushed.indexOf(chosenMovie.charAt(i)) !== -1) {
			        title += chosenMovie.charAt(i).toUpperCase();
			    }
			    //otherwise add "-" to the character space in title
	           else {
		            title += "_"
	            }
            }

        //displays the progress in the blanks div and alreadyGuessed div
        document.querySelector('#blanks').innerHTML=title;
    }


        var html = "<p>Remaining Guesses: " + numberOfRemainingGuesses + "</p>";
    	  document.getElementById('remaining-guesses').innerHTML=html;
          document.getElementById('alreadyGuessed').innerHTML=guesses.toUpperCase();
console.log(chosenMovie);


// The section below resets the play area and adds a win to the win counter if the player gets all the letters

        if (title.indexOf('_') === -1) {    //if no more blanks are in the title
         // PlaySound
          sound.play();
        	wins++;
          var source = 'assets/images/' + chosenMovie + '.jpg'; //uses the current chosenMovie to set a variable
                                                                //to change the movie image and title in side panel
          document.getElementById('movieImage').src = source;
          document.getElementById('placeholder').innerHTML = chosenMovie.toUpperCase();

	       	chosenMovie = movieTitles[Math.floor(Math.random()*movieTitles.length)];  //choose a new movie
	    	isPushed = [];   //clear the variables that are used for tracking progress
	        guesses = '';
	        numberOfRemainingGuesses=10;
	        title = ''; 

	        var winsDisplay = "<p>WINS: " + wins + "</p>" + "<p>LOSSES: " + losses + "</p>"; 
	        document.getElementById('winsDiv').innerHTML=winsDisplay;  //reset the display areas
	           for (i=0; i<chosenMovie.length; i++) {
	           	title += "_";
	           }
	        document.getElementById('blanks').innerHTML=title;  
	        document.getElementById('alreadyGuessed').innerHTML=guesses.toUpperCase();
	            	  var html = "<p>Remaining Guesses: " + numberOfRemainingGuesses + "</p>";
	        document.getElementById('remaining-guesses').innerHTML=html;
  	    }

// The section below resets the play area and in the case that the player uses all of their guesses

        if (numberOfRemainingGuesses === 0) {

            fail.play();
            losses++;
          var source = 'assets/images/' + chosenMovie + '.jpg'; //uses the current chosenMovie to set a variable
          console.log(source);                                  //to change the movie image and title in side panel
          document.getElementById('movieImage').src = source;
          document.getElementById('placeholder').innerHTML = chosenMovie.toUpperCase();
  
	       	chosenMovie = movieTitles[Math.floor(Math.random()*movieTitles.length)];  //choose a new movie
	    	isPushed = [];   //clear the variables that are used for tracking progress
	        guesses = '';
	        numberOfRemainingGuesses=10;
	        title = ''; 

          var winsDisplay = "<p>WINS: " + wins + "</p>" + "<p>LOSSES: " + losses + "</p>"; 
	        document.getElementById('winsDiv').innerHTML=winsDisplay;  //reset the display areas


	           for (i=0; i<chosenMovie.length; i++) {
	           	title += "_";
	           }
	        document.getElementById('blanks').innerHTML=title;  
	        document.getElementById('alreadyGuessed').innerHTML=guesses.toUpperCase();
                  var html = "<p>Remaining Guesses: " + numberOfRemainingGuesses + "</p>";
	        document.getElementById('remaining-guesses').innerHTML=html;
  	    }
   }
}



