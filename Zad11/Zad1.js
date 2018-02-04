function minutesForHours(countofminut){
    var hour = 60;
    var hours = countofminut / hour;
    hours = Math.floor(hours);
    var minutes = countofminut % hour;
    console.log("godzin" + hours + " " + "minut" + minutes);
}
minutesForHours(200);

//zad 2

function double(){
    var array = [1, 3, -2, -7];
    var newarray = array.map(function(x) {
        if (x < 0) { return 0; }
        return x * 2;
    })
    return newarray;
}
console.log(double());

//Zad 3

function addarray(a, b){
    var c = a.concat(b);
return c;
}
console.log(addarray([1, 7], [2, 5]));

//Zad4

function cutnonumber(){
    var array = ["ala", "kot", 2, 7];
    
