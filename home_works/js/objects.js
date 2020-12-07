// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name

var car = {
  name: "Testla",
  wheels: 4,
};
car.name = "Mercedes";
console.log(car);
delete car.name;
console.log(car);

//Ex2
// Creati un obiect cu 4 proprietati
// Stocati "key"-urile intr-o variabila noua
// intr-o alta variabila vreau sa am toate key-urile cu litere mari
// Stocati valorile intr-o variabila noua
// intr-o alta variabila vreau sa am toate valorile cu litere mici
// vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"

var doctor = {
  firstName: "Marco",
  lastName: "Raffaelli",
  specialty: "surgery",
  hospital: "A.Gemelli",
};
var keys = Object.keys(doctor);
console.log(keys);

var upperKeys = keys.map(function (up) {
  return up.toUpperCase();
});
console.log(upperKeys);

var values = Object.values(doctor);
console.log(values);

var lowerValues = values.map(function (lo) {
  return lo.toLowerCase();
});
console.log(lowerValues);

//Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.

var bicycle = {
  model: "Atala",
  color: "black",
  preview: function () {
    var values = Object.values(bicycle);
    console.log(values);
  },
};
bicycle.preview();

//Ex4
// Creati un obiect cu cateva proprietati
// "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocati-l intr-o alta variabila
// Pe obiectul nou adaugam 2 noi proprietati
// Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
myHouse = {
  rooms: 3,
  zone: "Bucium",
  animals: 1,
};

var dog = {
  breed: "Siberian husky",
  age: 4,
  color: "white",
};

var dog_copy = Object.assign({}, dog);
dog_copy.weight = "50 pounds";
dog_copy.name = "Oscar";

var house = Object.assign(myHouse, dog_copy);
console.log(house);

// Ex5
// Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
// Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
// transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"

var musician = {
  firstName: "Marcus",
  lastName: "Miller",
  instrument: "bass guitar",
  music_style: "jazz",
  address: {
    street: "1000 CHISHOLM TRAIL",
    state: "California",
  },
};
var k = Object.keys(musician.address);
console.log(k);
var result = k[0] + " si " + k[1] + " apartin obiectului musician.";
console.log(result);

// nu prea am inteles ultima cerinta!!! :(

//Ex6
// Avem obiectul :
myObject = {
  name: "John",
  surname: "Applegate",
};
//Adaugati o metoda care sa sorteze cele 2 valori ale numelui.

function sort(object) {
  return Object.values(object).sort();
}

sort(myObject);

//Ex7
//Faceti o functie constructor
// Cu functia constructor creati 3 obiecte cu valori diferite
// Pentru toate valorile din acele obiecte transformatile in litere mari.

function Dog(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
}

var dog1 = new Dog("Buck", "Rottweiler", "black");
var dog2 = new Dog("Coco", "Mastiff", "grey");
var dog3 = new Dog("Jack", "Bichon", "white");

var dog_values = Object.values(dog1);

var upperValues = dog_values.map(function (up) {
  return up.toUpperCase();
});
console.log(upperValues);
