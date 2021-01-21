// ex 1.
// Faceti o functie numita composedValue care ia ca argumente 2 functii si returneaza valoarea lor - // f1(f2(value))
// ex composedValue(square, double, 5);  // 100
// functia square returneaza patratul numarului iar double - dublul numarului

const square = (n) => { return Math.pow(n, 2) }
const double = (n) => { return n * 2 }
const composedValue = (f1, f2, value) => {
    return f1(f2(value));
}

console.log(composedValue(square, double, 5));
console.log(composedValue(double, square, 5));


// ex.2
// faceti o functie 'compose' care atunci cand va fi apelata returneaza rezultatul altor 2 functii;
// exemplu const myFunction = compose(square, double) 
// myFunction(5)  --> 100
// myFunction(10) --> 400  ...etc

const compose = (f1, f2, number) => {
    return f1(f2(number));
}
const myFunction = (n) => {
    return compose(square, double, n);
};

console.log(myFunction(5));
console.log(myFunction(10));


// ex.3
// faceti o functie find care ia ca parametrii un array si o functie care testeaza arrayul si returneaza doar elmentele care trec testele.
// find([1,2,3,4,5], isOdd); returneaza 1 3 5

const isOdd = (array) => {
    return array.filter(n => n % 2 === 1);
}

const find = (array, f1) => {
    return f1(array);
}

console.log(find([1, 2, 3, 4, 5], isOdd));
