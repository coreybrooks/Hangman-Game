//Everything below will be inside a function that runs until the game is reset after a win or loss

// Global variables
// empty array which to push the user choices, in order to keep track of letters already chosen         
  var isPushed = []; 


// array of movie titles
  var movieTitles = ['gladiator', 'twilight', 'cinderella', 'uninhabited', 'inception', 'frozen', 'hancock', 'dracula',
   'titanic', 'aladdin', 'armageddon', 'enchanted', 'taken', 'twins'];


//These get reset when a new word is chosen. win or loss..
// movie title chosen by game for the player to guess
var chosenMovie = movieTitles[Math.floor(Math.random()*movieTitles.length)];


// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {


// Determine which key was pressed
  var userGuess = event.key;

// The following if statement executes if the letter has not been chosen yet

   if (isPushed.indexOf(userGuess) === -1) {
   	    // push the user choices to the empty array
        isPushed.push(userGuess);
        title = '';


            for (i=0; i<chosenMovie.length; i++) {
            	//if the chosen letter is in the isPushed array, then concatentate the letter to title
	           if (isPushed.indexOf(chosenMovie.charAt(i)) !== -1) {
			        title += chosenMovie.charAt(i);
			    }
			    //otherwise add "-" to the character space in title
	           else {
		            title += "-"
	            }
            }


        console.log(userGuess);
        console.log(isPushed);
        console.log(chosenMovie);
        console.log(title);



}
}

