//Zad 1
function pow (a, b){
    var result = a;
    for ( var i = 0; i< b-1; i++) {
        result = result * a;
    }
    return result;
}
console.log(pow(2, 3));

//Zad 3

function idealNumber(x){
    var result= 0;
    for(var i=1; i<x; i++) {
        if(x%i == 0){
            result = result + i;
        }
 
    }
    return result === x;
}
console.log(idealNumber(28));

//Zad 7

function hightNumber(array){
    var max = array[0];
    for(var i = 0; i < array.length; i++ ){
    if(array[i] > max){
    max=array[i]
    }
}
return max; 
}
console.log(hightNumber([7, 2, 3, 9, 4,]));

//zad 5
function takeMyMoney(){
    var money = 13;
    var array= [5, 2, 1];
    var result= {};
    var rest = value;
    for(var i = 0; i < array.length; i++){
        var countofArray = parseInt(rest / array[i]);
        rest = rest % array[i];
        result[array[1]] = countofArray;
    }  
    return result;
}

//zad 6

function splitWords(str ){
   return str.split(" ");
}
var str = "Zdanie do podziału";
console.log(splitWords(str));


//Zad 7

function replaceThing(str){
    return str.replace("@", "[at]")
}
var str ="a.kowalski@onet.pl";
console.log(replaceThing(str));

//zad 8

function cutVowel(str){
    return str.slice(1, 3);
}
var str ="Kodowanie";