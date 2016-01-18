
window.console = window.console || (function(){
    var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(s){};
    return c;
})();
///////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
     return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
  // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
  // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
  // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
  /* YOUR CODE HERE */
  var winner;
  if (playerMove === computerMove) {
    winner = 'tie';
  } else if (playerMove === 'scissors' && computerMove === 'rock') {
    winner = 'Computer';
  } else if (playerMove === 'paper' && computerMove === 'rock') {
    winner = 'Player';
  } else if (playerMove === 'rock' && computerMove === 'paper') {
    winner = 'Computer';
  } else if (playerMove === 'rock' && computerMove === "scissors") {
    winner = 'Player';
  } else if (playerMove === 'paper' && computerMove === 'scissors') {
    winner = 'Computer';
  } else {
    winner = 'Player'; 
  }

  return winner;
}
function playToFive() {
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 && computerWins < 5) {

      console.log("\n\n Let's play Rock, Paper, Scissors\n\n");
      console.log ('The score is currently ' + playerWins + '(Player)' + ' to ' + computerWins + '(Computer).\n');
      var playerMove = getPlayerMove(getInput());
      var computerMove = getComputerMove(randomPlay());
      var winner = getWinner(playerMove, computerMove);

      if (winner === 'Player') {
        playerWins += 1;

        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '.');
        console.log('Player wins this round.');
      } else if (winner === 'Computer') {
        computerWins += 1;

        console.log('Computer chose ' + computerMove + ' while Player chose ' + playerMove + '.');
        console.log('Computer wins this round.');
      } else if (winner === 'tie') {

        console.log('Player and Computer both chose ' + playerMove + '.');
        console.log('This is a tie.\n');
      } else {
          break;
      }
    }
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    console.log ('Good game!\n');
    return [playerWins, computerWins];

}
playToFive();
