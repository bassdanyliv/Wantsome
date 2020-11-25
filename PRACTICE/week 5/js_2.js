//Ex1 : La ce index intalnim cuvantul 'trece', dar cuvantul 'javascript'? Scrieti si metodele folosite.
var str = "Daca te simti bine, nu te ingrijora, trece!";
console.log(str.indexOf("trece"))
console.log(str.indexOf("javascript"))
//Raspuns: "trece"  37
//         "javascript" -1

// Ex2.0: Returnati stringul Kiwi folosind metoda slice() cu indexi pozitivi si apoi negativi.
// Ex 2.1: Returnati toate fructele incepand de la 'Lemon'.
  var fruits = "Apple, Lemon, Plum, Kiwi";
console.log(fruits.indexOf("Kiwi"))
console.log(fruits.slice(20))
console.log(fruits.slice(-4))
console.log(fruits.slice(7))
  
// Ex 3: Returnati stringul 'Plum' folosind metoda substr()
   var moreFruits = "Apple, Lemon, Plum, Kiwi";
console.log(moreFruits.substr(14,4))
// Ex 4: Inlocuiti 'Mia Kalifa' cu numele vostru folosind o metoda pe stringuri
// bonus: Inlocuiti "Sasha" cu numele vostru in tot stringul de mai jos.
   var replaceName = "Eu sunt Mia Kalifa, doctor docent in matematica";
console.log(replaceName.replace("Mia Kalifa", "Daniel"))

   var bonusName = "Sasha este o persoana de nota 10, Sasha invata javascript(mai nou)"
   var regex = /Sasha/gi;
console.log(bonusName.replace(regex, "Daniel"))
   
// Ex5: Vreau ca toate literele sa fie intai cu caractere mici si apoi cu caractere mari
   var text = "24 de orE intr-o zi, 24 de beRi intr-o lAda. Vreo coincidenta?"
console.log(text.toLowerCase())   
console.log(text.toUpperCase())   
   
// Ex6: Vreau sa am la final un singur string cu toate celalte stringuri (indentati ca lumea, cu spatii unde e nevoie)
   var text1 = "Când ai un";
   var text2 = "ciocan";
   var text3 = "in mana toate lucrurile ti se par";
   var text4 = "cuie";
console.log(text1.concat(" ",text2," ", text3," ", text4))

// Ex7: Vreau sa stiu intai ce litera se afla pentru indexul 6, apoi ce unicode are aceasta litera, si apoi vreau sa o accesez cu 'property access'
  var word = "Mamaliga";
console.log(word.charAt(6))
console.log(word.charCodeAt(6))
console.log(word[6])
 
// Ex8: Vreau sa am o noua variabla care sa cotina un array format din toate stringurile de mai jos care sunt despartite de '|'
  var cars = "Toyota|Mazda|Tesla|Hyundai|Dacia";
  var array = cars.split("|");
console.log(array)
  
//Big BONUS 
// Se dau variabilele de mai jos, vreau sa ajung la rezultatul "NU EXISTA INTREBARI PROASTE" fara sa modific valorile celor 2 variabile;
  var firstWord = 'Nu exista';
  var secondWord = 'raspunsuri proaste';
  var newWord = 'intrebari';
  var result = firstWord.concat(" ", newWord," ", secondWord.substr(-7));
console.log(result.toUpperCase())
  