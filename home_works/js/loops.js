// 1.Scrieti o functie care accepta ca argument o valoare numerica si afiseaza de atatea ori pe ecran textul: “Sunt la iteratia numarul [index]”
//- Scrieti codul in doua variante

function print(number) {
  for (var i = 0; i <= number; i++) {
    console.log("Sunt la iteratia numarul " + "[" + i + "]");
  }
}
print(5);

var j = 0;
function print_v2(number) {
  while (j <= number) {
    console.log("Sunt la iteratia numarul " + "[" + j + "]");
    j++;
  }
}

print_v2(5);

// 2. Scrieti o functie care accepta ca argument un array si afiseaza in consola elementele acestuia prin parcurgerea sa - Scrieti codul in doua variante

var numbersArray = [2, 6, 9, 10];
var carsArray = ["Honda", "Audi", "Mazda", "Tesla"];

function print_elements(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
print_elements(numbersArray);
print_elements(carsArray);

function print_elements_v2(array) {
  var j = 0;
  while (j < array.length) {
    console.log(array[j]);
    j++;
  }
}
print_elements_v2(carsArray);

// 3. Scrieti o functie care accepta ca argument un obiect si afiseaza in consola elementele acestuia prin parcurgerea sa
// - scrieti codul in doua variante

var car = {
  make: "Honda",
  model: "Civic",
  color: "black",
  doors: 3,
};

function iterateObj(obj) {
  var objKeys = Object.keys(obj);
  var objValues = Object.values(obj);

  for (var i = 0; i < objKeys.length; i++) {
    console.log("Object key is: " + objKeys[i]);
  }

  for (var j = 0; j < objValues.length; j++) {
    console.log("Object value is: " + objValues[j]);
  }
}

iterateObj(car);

function iterateObj_v2(obj) {
  var i = 0;
  var objKeys = Object.keys(obj);
  var objValues = Object.values(obj);

  while (i < objKeys.length) {
    console.log("Object key is: " + objKeys[i]);
    i++;
  }
  var j = 0;
  while (j < objValues.length) {
    console.log("Object value is: " + objValues[j]);
    j++;
  }
}
iterateObj_v2(car);

function iterateObj_v3(object) {
  for (var [key, value] of Object.entries(object)) {
    console.log(`${key}: ${value}`);
  }
}
iterateObj_v3(car);
