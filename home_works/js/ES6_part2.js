//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/

const sum = (n) => {
  if (typeof n === "number" && n !== null) {
    let i = 1;
    let result = 0;
    while (i <= n) {
      result += i;
      i++;
    }
    return result;
  }
  return "The input must be a number!";
};
console.log(sum(5));

/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/

const longestWord = (test) => {
  let words = test.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > result.length) {
      result = words[i];
    }
  }
  return result;
};

console.log(longestWord("I have a red bass guitar"));

/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/

const reverseStr = (test) => {
  if (test === "") return "";
  else return reverseStr(test.substr(1)) + test.charAt(0);
};

console.log(reverseStr("It's very beautiful!"));

/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
*/

const encode = (message) => {
  let encodeStr = "";

  if (typeof message !== "number" && message !== null) {
    for (let i = 0; i < message.length; i++) {
      let char = message[i];
      let c = message.charCodeAt(i);

      if (char.match(/[A-Z]/g)) {
        c += 1 % 26;
        if (c > 90) {
          c -= 26;
        }
      } else if (char.match(/[a-z]/g)) {
        c += 1 % 26;
        if (c > 122) {
          c -= 26;
        }
      }
      encodeStr += String.fromCharCode(c);
    }
  }
  return encodeStr;
};

console.log(encode("aBz"));

/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/

const convertToTime = (input) => {
  if (typeof input === "number" && input !== null) {

    let hours = Math.floor(input / 60);
    let minutes = input % 60;

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return hours + ":" + minutes;
  }
};
console.log(convertToTime(130));

/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/

const sortAlphabetically = (str) => {

  return [...str].sort((a, b) => a.localeCompare(b)).join("");
};

console.log(sortAlphabetically("afDTgdfgsaaABD"));

/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/

const verify = (str) => {

  let regex = /[a-z]\+/gi;

  if (str[0] !== '+') {
    return false;
  }
  if (str.match(regex).length === (str.length - 1) / 2) {
    return true;
  } 
  else return false;
};

console.log(verify("+a+c+B+c+"));
