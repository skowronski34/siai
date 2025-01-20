//1.
let randomNumber = Math.floor(Math.random() * 6);

//2
let pytanie = prompt("Zadaj pytanie do szklanej kuli:");

//3
let odpowiedz;
switch (randomNumber) {
    case 0:
        odpowiedz = "Tak, zdecydowanie!";
        break;
    case 1:
        odpowiedz = "Nie jestem pewny, spróbuj ponownie.";
        break;
    case 2:
        odpowiedz = "Odpowiedź jest niejednoznaczna.";
        break;
    case 3:
        odpowiedz = "Zdecydowanie nie.";
        break;
    case 4:
        odpowiedz = "Zgodnie z przewidywaniami, tak!";
        break;
    case 5:
        odpowiedz = "Możesz na to liczyć.";
        break;
    default:
        odpowiedz = "Spróbuj ponownie.";
}

// 4
alert("Twoje pytanie: " + pytanie + "\nOdpowiedź: " + odpowiedz);