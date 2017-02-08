//Everything below will be inside a function that runs until the game is reset after a win or loss

// Global variables


// array of movie titles
  var movieTitles = ['gladiator', 'twilight', 'cinderella', 'uninhabited', 'inception', 'frozen', 'hancock', 'dracula',
   'titanic', 'aladdin', 'armageddon', 'enchanted', 'taken', 'twins'];


//These get reset when a new word is chosen. win or loss..
// movie title chosen by game for the player to guess
var chosenMovie = movieTitles[Math.floor(Math.random()*movieTitles.length)];
numberOfRemainingGuesses = 10;
       // empty array which to push the user choices, in order to keep track of letters already chosen         
var isPushed = []; 
var guesses = '';

//Sets the inital blank title so the player can see how many characters are in the title
title = '';
for (i=0; i<chosenMovie.length; i++) {title += '_';};
document.querySelector('#blanks').innerHTML=title;


// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {


// Determine which key was pressed and converts all to lowercase
  var userGuess = event.key.toLowerCase();

// The following block of statements execute if the letter has not been chosen yet

   if (isPushed.indexOf(userGuess) === -1) {
   	    // push the user choices to the empty array
        isPushed.push(userGuess);
        title = '';
             

                //if the chosen letter is not in the movie title, then decrease the number of guesses remaining
                //and display the letter in the already guessed section
                 if (chosenMovie.indexOf(userGuess) === -1) {
                 	numberOfRemainingGuesses--;
                 	guesses += " " + userGuess;
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


        console.log(userGuess);
        console.log(isPushed);
        console.log(guesses);
        console.log(chosenMovie);
        console.log(title);
    }


    	  var html = "Number of Remaining Guesses: " + numberOfRemainingGuesses;
    	  document.getElementById('remaining-guesses').innerHTML=html;
          document.getElementById('alreadyGuessed').innerHTML=guesses;



}

