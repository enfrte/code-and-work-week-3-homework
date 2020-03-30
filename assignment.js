/**
### A3.1 Bulls and Cows

Bulls and Cows is a game for two players where the first one creates a secret word and the second one tries to guess it. After every guess, the first player tells whether the secret word and the guessed word have matching characters in right positions ("bulls") or wrong positions ("cows").

For example, if the secret word is `HEAT`, a guess of
 - `COIN` would result in `0 Bulls, 0 Cows` (all of the guessed letters are wrong),
 - `EATS` would result in `0 Bulls, 3 Cows` (since E, A, T are in the wrong positions),
 - `TEAL` would result in `2 Bulls, 1 Cow` (since E and A are in the right positions and T is in the wrong position) and
 - `HATE` would result in `1 Bull, 3 Cows`.

The game would continue until the second player scores `4 Bulls` for guessing `HEAT`.

Your task is to create this game as a command line program where the computer is the first player. 

(*Super extra*: If you're into making artificial intelligence for name-guessing, you're free to make it the other way around instead!)
*/
console.log("\n### A3.1 Bulls and Cows --------------------------------\n");

const getHint = (secret, guess) => {
  let bulls = 0;
  let cows = 0;

	[...secret].forEach( (secretChar, i) => {		
		// const charIsSame = secret.charAt(i).localeCompare(guess.charAt(i)) === 0; // alternative comparison
		
		// check for bulls and cows
		const charsMatchIndex = secretChar === guess[i];
		const charsFoundInString = secret.includes(guess[i]);

		if (charsMatchIndex) {
			// add to bulls
			bulls++;
		}
		else if (charsFoundInString) {
			// the index didn't match, but was the char was found in the string
			cows++;
		}
	});

  return `${bulls} BULLS and ${cows} COWS`;
}

// Test it
console.log(getHint("HEAT","COIN"));
console.log(getHint("HEAT","EATS"));
console.log(getHint("HEAT","TEAL"));
console.log(getHint("HEAT","HATE"));

/*
### A3.2 Circular airport

Suppose we have a circular airport with 36 runways that start from the center and end in the perimeter of the circle. The control tower in the middle. 

The 36 runways are given numbers determined by their direction, starting from 1 to 36. The runway number is determined by the bearing of the runway (i.e., the direction relative to the control tower) in degrees.

Write a program where the user inputs the bearing as a floating point number ranging from $`0^\circ`$ to $`360^\circ`$ and the program outputs the corresponding runway number.


- for $`360^\circ`$ and $`0-9.99999999^\circ`$, the runway number should be 1,
- for $`10-19.99999999^\circ`$, the runway number should be 2,
- and so on...
- and for $`350-359.99999999^\circ`$, the runway number should be 36.

*Extra:* What if there are another number of runways &mdash; for example, 20?

### A3.3 I swear this is the last maths-heavy exercise

A prime number is a number that is divisible only by two numbers: the number itself and 1.

For example, 6 is not a prime because it is divisible by 6 (the number itself), 3, 2 and 1.

What makes a number divisible by another? Because the result of the division $`6/3 = 2`$ is an integer, 6 is divisible by 3. This alone makes 6 not a prime!

In contrast, 7 is a prime: it is only divisible by 7 and 1 &mdash; $`7/7`$ and $`7/1`$ are integers.

So after this lengthy introduction, the task itself is to create a function that checks whether a given number is a prime.

The function should take in a `number` and return a string `[number] is prime` or `[number] is not prime`.

 */

