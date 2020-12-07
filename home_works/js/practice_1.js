// - calculati media aritmetica a unui array de numere;

var numbers = [2,5,7,55,77,100];
var length = numbers.length;
var sum = 0;

 for( var i = 0; i < length; i++){
     sum += numbers[i]; 
 }
 var average = sum/length;
 console.log(average);

 // - avand un array cu numere, valori boolene, obiejcte si stringuri calculati suma tuturor numerelor.
 // Ignorati toate valorile care nu sunt de tip numar.

 var mixedArray = [10, 'Hello!', 4 , false, 'five', 11, {make:'Honda', model:'Civic', doors:3} , 25];
 var sum = 0;
 for(var i = 0; i < mixedArray.length; i++){
     if(typeof mixedArray[i] == 'number'){
         sum += mixedArray[i];
     }
 } console.log(sum)

 // - creati un program care afiseaza primele 20 numere din sirul lui Fibonacci.

 function fibonacciSequence(n){
     var seq = [];
     for(var i = 0; i < n; i++){
         if(i <= 1) {
             seq[i] = i;   
         } else {
             seq[i] = seq[i-1] + seq[i-2];
         }
     } console.log(seq)
 }
 fibonacciSequence(20)