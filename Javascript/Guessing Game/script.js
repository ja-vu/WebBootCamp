//create secretNumber
var secretNumber=4;


//ask user for guess
var stringGuess= prompt("Guess a number")
var guess = Number(prompt("Guess a number"));

//check if guess is right

if(guess === secretNumber){
	alert("You got it right!");
}

//Otherwise check if higher
else if(guess>secretNumber) {
	alert("Too high. Guess again!");
}


//Check if lower

else {
	alert("Too low. Guess again!");
}
