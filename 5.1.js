// 1
let maxNumber = 5; // 

// 2
let secretNumber = Math.floor(Math.random() * maxNumber) + 1;
// console.log(secretNumber);
// 3
let isCorrect = false;

// 4
while (!isCorrect) {
  let userInput = prompt(`Zgadnij liczbę od 1 do ${maxNumber}:`);

  let userGuess = Number(userInput);
  
  // 5
  if (userGuess === secretNumber) {
    isCorrect = true; 
    alert("Brawo! Odgadłeś liczbę.");
  } else {

    if (userGuess < secretNumber) {
      alert("Za mało! Spróbuj ponownie.");
    } else {
      alert("Za dużo! Spróbuj ponownie.");
    }
  }
}
