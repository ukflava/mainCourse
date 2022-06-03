let prompt = require("prompt-sync")();
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0; let answer = prompt("Guess a number 1-100: ");
let previous = 0;
while (answer !== secretNumber) {
  if (isNaN(answer) || answer === "") {
    console.log("Not a number! Try again!"); answer = prompt("Guess a number 1-10: ");
  } else if (answer > secretNumber && answer !== previous) {
    console.log("Too High!"); attempts += 1; previous = answer; answer = prompt("Guess a number 1-10: ");
  } else if (answer < secretNumber && answer !== previous) {
    console.log("Too Low!"); attempts += 1; previous = answer; answer = prompt("Guess a number 1-10: ");
  } else if (answer === previous) {
    console.log("Already Guessed!"); answer = prompt("Guess a number 1-10: ");
  }
    
}
attempts += 1;

if (attempts === 1) {
  console.log("You got it! You took " + attempts + " attempt!");
} else {
  console.log("You got it! You took " + attempts + " attempts!");
}
// Guess a number:
// > 12
// Too Low!
// Guess a number:
// > 65
// Too High!
// Guess a number:
// > 65
// Already Guessed!
// Guess a number:
// > asdf
// Not a number! Try again!
// Guess a number:
// > 42
// You got it! You took 3 attempts!