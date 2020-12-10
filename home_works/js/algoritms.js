//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"

var myEmail = "bassman@gmail.com";

function secureEmail(email) {
  var parts = email.split("@");
  var firstPart = email.substr(0, parts[0].length / 2);
  var result = firstPart + "....@" + parts[1];
  console.log(result);
}
secureEmail(myEmail);

//Ex2
//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"

function capitalizeFirstLetter(test) {
  var result = test.split(" ");

  for (var i = 0; i < result.length; i++) {
    result[i] = result[i].charAt(0).toUpperCase() + result[i].substring(1);
  }
  console.log(result.join(" "));
}

capitalizeFirstLetter(" home is where you're loved!");

//Ex3
// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"

function changeLettersCase(test) {
  var result = test.split("");
  console.log(result);

  for (var i = 0; i < result.length; i++) {
    if (result[i] === result[i].toUpperCase()) {
      result[i] = test[i].toLowerCase();
    } else {
      result[i] = result[i].toUpperCase();
    }
  }
  console.log(result.join(""));
}

changeLettersCase("DDDeeeMMM");

//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"

function concatenate(test, times) {
  var result = [];
  for (var i = 0; i < times; i++) {
    result += test;
  }
  console.log(result);
}

concatenate("Wantsome", 4);

//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante

function isPalindrome(test) {
  var cleanedStr = test.toLowerCase().match(/[a-z]/gi);
  var length = test.length - 1;

  for (var i = 0; i < test.length / 2; i++) {
    if (test[i].toLowerCase() !== test[length - i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("Step on no pets"));

function isPalindrom_v2(test) {
  var cleanedStr = test.toLowerCase().match(/[a-z]/gi);

  return cleanedStr.join("") === cleanedStr.reverse().join("");
}

console.log(isPalindrom_v2("Step on no pets"));

//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care
//contine ca si elemente cele mai mari numere din fiecare array

var numbers = [
  [8, 11, 1, 3],
  [10, 25, 18, 28],
  [42, 35, 50, 88],
  [1000, 2000, 873, 1],
];

function biggestNumbers(array) {
  let result = new Array(array.length).fill(0);

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (array[i][j] > result[i]) {
        result[i] = array[i][j];
      }
    }
  }
  return result;
}
console.log(biggestNumbers(numbers));

function biggestNumbers_v2(array) {
  var result = [];

  for (var i = 0; i < array.length; i++) {
    var biggestNumber = array[i].sort((a, b) => a - b).reverse();
    result.push(biggestNumber[0]);
  }
  return result;
}

console.log(biggestNumbers_v2(numbers));

//Ex7
// Implementati o functie care face reverse la un string
var text = "Sono perduto nel buio!";

function reverseStr(test) {
  var result = "";
  for (var i = test.length - 1; i >= 0; i--) {
    result += test[i];
  }
  return result;
}
console.log(reverseStr(text));

function reverseStr_v2(test) {
  return test.split("").reverse().join("");
}
console.log(reverseStr_v2(text));


function reverseString(str) {
  if (str === "") return "";
  else return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString(text));
reverseString("hello");

//Ex8
// Implementati o functie care calculeaza factorialul unui numar

function factorial(n) {
  if (n < 0) {
    return false;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(4));

//Ex9
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma

var text = "I have done many things wrong!";
var text2 = "wrong!";

function verifyStrings(str_1, str_2) {
  if (str_1.split("").splice(str_1.length - str_2.length).join("") === str_2.split("").join("")) {
    return true;
  }
  return false;
}
console.log(verifyStrings(text, text2));

//Ex10
// Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care
//trece testul specificat

const isPrime = function(n) {
    if(n < 2){
        return false;
    }
    for( var i = 2; i < n; i++){
        if(n % 2 === 0) {
            return false;
        }
    } return true;
}

isPrime(12);

function firstPrime (arr,isPrime ){
     for(var i = 0; i , arr.length; i++){
         if( isPrime(arr[i])){
             return arr[i];
         }
     }
}
console.log(firstPrime([1,4,13,8,2], isPrime))



//Ex11
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea
//string

function containLetters(str_1, str_2) {
  for (var i = 0; i < str_2.length; i++) {
    if (str_1.indexOf(str_2[i]) === -1) {
      return false;
    }
  }
  return true;
}

console.log(containLetters("Brian Broomber is a great musican!", "amber"));

// Ex 12
// Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana
//cand intalneste elementul cu valoarea specificata

function displayPriorElements(array, element) {
  var i = 0;
  while (true) {
    if (i < array.length) {
      console.log(array[i]);
      i++;
    }
    if (array[i] === element) break;
  }
}

displayPriorElements([2, 4, 6, 7, 55, 9, 10], 9);

// Ex 13
// Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN

var arr = [1,2,null,undefined,3,NaN,3,"",,10,,0,[],,{},,50,,6,,null,,];

function cleanArray(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(cleanArray(arr));

// Ex 14
// Scrieti o functie care repeta un string de n ori specificate

function repeatString(string, n) {
  if (n < 0) return "";
  if (n === 1) return string;
  else return string + repeatString(string, n - 1);
}

console.log(repeatString(text, 3));
