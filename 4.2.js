//1
let wiek = prompt("Podaj swój wiek:");

//2
wiek = Number(wiek);

//3
let message;

//4
if (wiek >= 21) {
    message = "Możesz wejść możesz kupić alkoholu";
}

//5
else if (wiek >= 19) {
    message = "Możesz wejść ale nie kupisz alkoholu";
}

//6
else {
    message = "Nie możesz wejść do lokalu.";
}
//7
console.log(message);