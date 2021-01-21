//ex.1.
// Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// de exemplu moveLetters('hello') // => 'ifmmp'
// moveLetters('abcxy') // => "bcdyz"
//hint : String.fromCharCode() String.charCodeAt()

const moveLetters = function (string) {

    return string.split('')
        .map(c => c.charCodeAt() + 1)
        .map(c => String.fromCharCode(c))
        .reduce((a, b) => a + b);

}

console.log(moveLetters('hello'));
console.log(moveLetters('abcxy'));


// ex2
// Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
// changeWordCase('hey ppl, lets learn javascript together sometime') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"

let changeWordCase = function (string) {
    
    return string.split(' ').map((w, i) => i % 2 === 0 ? w.toUpperCase() : w.toLowerCase()).join(' ');
}

console.log(changeWordCase('hey ppl, lets learn javascript together sometime'));


// ex3
// Faceti astfel incat toate variabilele de mai jos sa returneze ceea ce zice numele

const arr = [
    { name: 'sasha', sex: 'f', age: 7, species: 'cat' },
    { name: 'john', sex: 'm', age: 133, species: 'human' },
    { name: 'titus', sex: 'm', age: 62, species: 'human' },
    { name: 'kalifa', sex: 'f', age: 255, species: 'human' },
    { name: 'oreo', sex: 'm', age: 21, species: 'cat' },
];


let allCats = arr.filter(x => x.species === 'cat');
console.log(allCats);

let allHumans = arr.filter(x => x.species === 'human');
console.log(allHumans);

let allFemales = arr.filter(x => x.sex === 'f');
console.log(allFemales);

let totalOfAllAges = arr.map(x => x.age).reduce((a, b) => a + b);
console.log(totalOfAllAges);

let averageAgeOfCats = allCats.map(x => x.age).reduce((a, b) => a + b) / allCats.length;
console.log(averageAgeOfCats);

let averageAgeOfHumans = allHumans.map(x => x.age).reduce((a, b) => a + b) / allHumans.length;
console.log(averageAgeOfHumans);

let avgLengthOfNames = arr.map(x => x.name.length).reduce((a, b) => a + b) / arr.length;
console.log(avgLengthOfNames);




