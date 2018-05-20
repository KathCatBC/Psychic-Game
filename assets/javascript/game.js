<!DOCTYPE html>
<html lang="en-us">
<head>
	<meta charset="utf-8">
	<title>Psychic Game</title>
</head>
<body>

	<div id="game">
		<h1> The Psychic Game </h1>
		<p>Guess what letter I'm thinking of!</p>
		<p>Wins:</p>
		<p>Losses:</p>
		<p>Guesses Left:</p>
		<p>Your Guesses so far:</p>
	</div>

    <script type="text/javascript">
        var wins = 0;
		var losses = 0;
		var guesses = 5;
		var guessChoices = [];
		var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		document.onkeyup = function() {
            // This variable contains all the ltters that can be pressed that are valid options.
            var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
            // Variable that contains the user's key input.
		    var userGuess = event.key;
            // This makes it so the computer can grab a random letter from the computerChoices array.
		 	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];		 	
            // This if/else statement will go through the letters array and perform the following:
			if (letters.indexOf(userGuess) > -1) {
                // If the userGuess is equal to the computerGuess, a win will be added to win counter.
                // The amount of guesses the user has is 5.
                // The guess choices will be contained in an array.
				if (userGuess === computerGuess) {
					wins++;
					numGuesses = 5;
					guessChoices = [];
				}
                // If the userGuess is not equal to computerGuess then the amount of numGuesses will go down.
                // Whatever the player guesses will be stored in the guessChoices array above.
				if (userGuess != computerGuess) {
					numGuesses --;
					guessChoices.push(userGuess);
				}
                // If the player does not guess the correct letter than the loss counter will go up.
                // Again, the choices will get logged in the guessChoices array.
				if (numGuesses === 0) {
                    numGuesses = 5;
				    losses ++;
				    guessChoices = [];

				
			}

			var html = 
			"<h1> The Psychic Game </h1>" +
			"<p>Guess what letter I'm thinking of!</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + numGuesses + "</p>" +
			"<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

			document.querySelector("#game").innerHTML = html;

			
			}
		};

	</script>

</body>
</html>