//create a variable for the first person
//number must not exceed 6
//create a variable for the second person
//number must not exceed 6
//compare both values
//if player 2 guesses the same as player 1, tell player 2 he or she has won.
//obviously, if the guess is wrong, player 2 loses.

var playerOne = prompt ("Enter a number between 1-6");
if ((playerOne < 1) || (playerOne > 6) || isNaN(playerOne)){
	window.alert("Cmon bro");
  window.alert(words[Math.ceiling(Math.random)*6])
}
else {
	var playerTwo = prompt("Guess a number between 1-6");
  if (playerOne == playerTwo) {
  	window.alert("You Win!");
  }
  else {
  	window.alert("Player one's answer was " + playerOne);
    window.alert("You chose " + playerTwo);
  }
}
