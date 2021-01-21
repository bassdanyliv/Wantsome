// 1.
// capitalize names

const names = ['andrei','daniel','marco'];

 const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);


 const capitalizeName = (arr) => {
      const result = arr.map(e => capitalize(e));
        return result;
// o alternativa solutie:
//    const test = [];
//    arr.forEach(e => test.push(capitalize(e)));
//    return test;
  
 } 
console.log(capitalizeName(names));

// 2.
// Scrieti codul corespunzator functiei care dubleaza fiecare element de tip valoare numerica dintr-un array specificat ca
// argument.

function doubleEachNumber(arr) {

    return arr.map((n) => {
        if (typeof(n) === 'number') { return n * 2 }
        return n;
    });
}
console.log(doubleEachNumber([2, '5', 100, '100', 'blalblala']));

// 3. 
// Get persons name from an array of objects.

function getPersonsNames(arr) {

    return arr.map(person => person.name + " " + person.surname);
}
console.log(getPersonsNames([
    {
        name: "Angelina",
        surname: "Jolie",
        age: 80
    },
    {
        name: "Eric",
        surname: "Jones",
        age: 27
    },
]));

// 4.
function computeExamPass(arr) {

    return arr.map((person) => {
        if (person.grade > 4) {
            return person.name + ' ' + person.surname + ' has passed the exam'
        }
        return person.name + ' ' + person.surname + ' has not passed the exam'
    })
}
console.log(computeExamPass([
    {
        name: "Angelina",
        surname: "Jolie",
        grade: 7
    },
    {
        name: "Eric",
        surname: "Jones",
        grade: 3
    },
]));

// 5. 

function getPersonsDomElements(arr) {

    return arr.forEach((person) => {
        const div = document.querySelector('div');
        const heading1 = document.createElement('h1');
        const heading2 = document.createElement('h2');
        heading1.innerHTML = person.name + ' ' + person.surname;
        heading2.innerHTML = 'age: ' + person.age;
        div.appendChild(heading1);
        div.appendChild(heading2);
    });

}
    console.log(getPersonsDomElements([
    {
        name: "Angelina",
        surname: "Jolie",
        age: 80
    },
    {
        name: "Eric",
        surname: "Jones",
        age: 27
    },
    ]));

