// Zadanie 1

function CalculateAreOfSquare(a) {
    return a * a;
}
var squerarea = CalculateAreOfSquare(5);
console.log(squerarea);

// Zadanie 2

function AddWordsTogether(a, b, c) {

    console.log(a + " " + b + " " + c + ".");
}
AddWordsTogether("Ala", "ma", "kota");

//Zadanie 3

function HowOldAreYou(age) {
    var status;
    if (age < 18) {
        status = "Masz " + age + " " + "więc nie jesteś pełnoletni";
    } else {
        status = "Możesz wejść";
    }
    return status;
}
console.log(HowOldAreYou(12));
console.log(HowOldAreYou(18));

// Zadanie 4
function siedem(a, b) {
    var status;
    if ((a == 7) || (b == 7)) {
        return true;
    } else if ((a + b == 7) || (a - b == 7) || (b - a == 7)) {
        return true;
    }
    return false;
}
console.log(siedem(4, 7));

