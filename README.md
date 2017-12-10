# Hangman-Game

### Overview
Hangman is a rendition of the classic game hangman with a movie title theme.  This application was created with Vanilla JS and is not mobile responsive.  This game must be played on a system that includes a keyboard.

### Functionality
The user is prompted to press any key to start the game.  The application chooses a random movie from an array of movie choices.   The user is then shown blank spaces equal in length to the chosen movie title.  The application validates which key is pressed, and only reacts to a key if it is a valid letter.  The chosen letter is only allowed to be pressed once. If the letter is in the title, the letter is displayed in the corresponding position and a "success" audio tone is emitted.

If the letter is not in the title, the letter is displayed in the dead letter section and a "fail" audio tone is emitted.  The user can make 10 wrong guesses.  The number of wrong guesses remaining is displayed in the results div.  If the user guesses all letters correctly, a "win" audio tone is emitted, and the win counter increases by one.  If the user guesses 10 wrong letters, a "lose" audio tone is emitted, and the lose counter increases by one.

Regardless of whether the user wins or loses, the movie title and poster are displayed in the results div after the round is completed.

This code was uploaded to Heroku and can be viewed here: [corey-hangman-game](https://corey-hangman-game.herokuapp.com/)
