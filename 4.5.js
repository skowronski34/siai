//1
let prize = prompt("Wybierz liczbę z przedziału 0-10:");

//2
prize = Number(prize);

//3
let message = "Wybrana opcja to: ";

//4
switch (prize) {
    case 0:
        message += "Nic";
        break;
    case 1:
        message += "10zł";
        break;
    case 2:
        message += "25zł";
        break;
    case 3:
        message += "50zł";
        break;
    case 4:
        message += "100zł";
        break;
    case 5:
        message += "250zł";
        break;
    case 6:
        message += "500zł";
        break;
    case 7:
        message += "1000zł";
        break;
    case 8:
        message += "2500zł";
        break;
    case 9:
        message += "5000zł";
        break;
    case 10:
        message += "10000zł";
        break;
    default:
        message += "Nieprawidłowa liczba, spróbuj ponownie.";
}

//5
alert(message);