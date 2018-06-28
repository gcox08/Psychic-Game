// You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:
// Guess what letter I'm thinking of
// Wins: (# of times the user has guessed the letter correctly)
// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
// Guesses Left: (# of guesses left. This will update)
// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).


var wins = 0;
var losses = 0;
var guessesLeft = 5;

window.onload = function wins(){
    document.getElementById('wins').innerHTML = 0;
    document.getElementById('losses').innerHTML = 0;
    document.getElementById('guesses-left').innerHTML = 5;
    };

var compGuesses = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
];

var random = Math.floor(Math.random() * compGuesses.length);
var compGuess = compGuesses[random];

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();

    console.log(compGuess, userGuess)

    if (userGuess === compGuess) {
        console.log("They Match")
        // If they match the wins should update +1 and the comp guess should reset
        wins++
        random
        guessesLeft = 5
        document.getElementById("wins").innerHTML = wins
        document.getElementById("guesses-left").innerHTML = guessesLeft
    }

    if (userGuess !== compGuess) {
        console.log("They Don't Match")
        // If they don't match the guesses left should update -1. Check to see how many guesses are left. If guesses left = 0 game is over and losses update +1 and guesses left resets to 5.
        guessesLeft--
        document.getElementById("guesses-left").innerHTML = guessesLeft
    }
        
        if (guessesLeft === 0) {
            losses++
            guessesLeft = 5
            document.getElementById("losses").innerHTML = losses
            document.getElementById("guesses-left").innerHTML = guessesLeft = 5
        }

        if (userGuess === compGuess) {
       // ResetGame will be a function
       function ResetGame() {
        wins = 0;
        losses = 0;
        guessesLeft = 5;
        }
    }
 
    

}
