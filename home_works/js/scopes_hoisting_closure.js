//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100

function myFunction (n1, n2) {
    if ( n1 !== n2){
        return n1 + n2;
    } 
     return (n1 + n2) *5 ;
    
}
console.log(myFunction(3,3));
console.log(myFunction(3,10));


//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false

function test(n1, n2) {
    if (n1+n2 === 30 || n1 === 30 && n2 === 30 ) {
        return true;
    } 
    return false;
}
console.log(test (30,30));
console.log(test(12,18));
console.log(test(1,2))


//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

function verifyAdd_JS(test) {

    if(test !== null && test.startsWith('JS')){
        return test;
    } if (test === null){
        return 'JS';
    }
    else
        return 'JS' + test; 
}

console.log(verifyAdd_JS('JSisAwsome'));
console.log(verifyAdd_JS('isEasy'));
console.log(verifyAdd_JS(null));


//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

function eliminateDuplicate(test) {
    let result = [];
    for (let i = 0; i < test.length-1; i++){
        if (test[i] === test[i+1])
                    result.push(test[i]);
    }
    return result;
}

console.log(eliminateDuplicate(45558899))


//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

function findTheLongestString(test){
    let text = test.split(' ');
    let longestWord = [];
    for (let i = 0; i < text.length; i++){
        if (text[i].length > longestWord.length){
          longestWord = text[i];
        }
  
    }
    return longestWord;
}

console.log(findTheLongestString('Wantsome is Awsomeeee today'));


//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

function stars(times) {
    let stars = [];
    for (var i = 0; i < times; i++) {
        stars += ' * ';
        console.log(stars);
      }
}
stars(5);


//ex7

const negativeNumbers = [];

 // append any negative numbers found in the numbers array 
// into the negativeNumbers array constant variable above

function extractNegativeNumbers(numbers) {

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negativeNumbers.push(numbers[i]);
        }
    }
    return negativeNumbers;
 
}
console.log(extractNegativeNumbers([1,2,-5,4,-6]))


//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2

function calculate(n1, n2, operator){

    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        console.log('The input must be a number!')
    } else {
        switch (operator){
        case 'add':
            console.log(n1 + n2);
            break;
        case 'substract':
            console.log(n1 - n2);
            break;
        case 'multiply':
            console.log(n1 * n2);
            break;
        case 'divide':
            console.log(n1 / n2);
            break;
        default: 
            console.log('Sorry! Provide a valid operator expression!')
      }
    }   
}

calculate(3,2,'add');
calculate(5,3,'substract');
calculate(3,3, 'multiply');
calculate(30,5, 'divide');
calculate(3,4,'minus')




//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

function verifyDivNumber(n) {

    if (n % 15 === 0){
        return 'BOTH';
    } if (n % 5 === 0){
        return 'FIVE';
    } if (n % 3 === 0){
        return 'THREE';
    }  
    return n;
}

console.log(verifyDivNumber(30));
console.log(verifyDivNumber(10));
console.log(verifyDivNumber(9));
console.log(verifyDivNumber(11));


//Master exercises
//Ex9 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38

function getDateTime(date){

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Duminica";
    break;
  case 1:
    day = "Luni";
    break;
  case 2:
    day = "Marti";
    break;
  case 3:
    day = "Miercuri";
    break;
  case 4:
    day = "Joi";
    break;
  case 5:
    day = "Vineri";
    break;
  case  6:
    day = "Sambata";
}

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+ minutes : minutes;
    var strTime ='Ora este: ' + hours + ' ' + ampm  + ' : ' + minutes + ' : ' + seconds;

  return console.log('Astazi este: ' + day + ',' + '\n'  + strTime)
        
}

getDateTime(new Date);


//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

function verifyPin(test) {
    let pin = parseInt(test);
    console.log(pin.length)
    if(pin.toString() === test && test.length === 4){
        return true;
    } return false;
}

console.log(verifyPin('67778'));

//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"

function removeVowels(test) {
    return test.replace(/[aeiou]/ig, '')
}

console.log(removeVowels("Hey I am developer"))

//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false

function isSquareNumber(n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
}

console.log(isSquareNumber(-1));
console.log(isSquareNumber(25));
console.log(isSquareNumber(36));
console.log(isSquareNumber(3));

//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true

function anagrams(str1, str2){

    let s1 = str1.toLowerCase().split('').sort().join('').trim();

    let s2 = str2.toLowerCase().split('').sort().join('').trim();

    if(s1 === s2){
        return true;
    }
    return false;

}

console.log(anagrams("School master", "The class room"))
console.log(anagrams("silent", "listen" ))

