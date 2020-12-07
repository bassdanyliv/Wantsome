// 1. Scrieti o functie de tip named function denumita greatestNrBetween care:
// - Primeste ca argumente doua numere
// - Returneaza numarul care este mai mare
// Apelati functia de doua ori si afisati pe ecran textul: “Numarul mai mare dintre 5 si 10 este 10“

function greatestNrBetween(n1, n2){
    if( n1 < n2){
        console.log( 'Numarul mai mare dintre ' + n1 + ' si ' + n2 + ' este ' + n2)
    } else if (n1 === n2 ){
        console.log('Numerele ' + n1 + ' si ' + n2 + ' sunt egale.')
    }
    else
    console.log( 'Numarul mai mare dintre ' + n1 + ' si ' + n2 + ' este ' + n1)
}

greatestNrBetween(10,7);

greatestNrBetween(2,2);

//2.Scrieti o functie de tip function expression asociata cu numele helloWorldInLang care:
// - Primeste ca argument codul unei limbi: “en”, “es”, “de”
// - Returneaza “Hello World” pentru limba corespunzatoare ( cel putin 3 limbi )
// - Daca limba nu este specificata, trebuie sa returneze textul pentru limba engleza
// Apelati functia pentru fiecare caz in parte.

function helloWorldInLang(code) {
    if(code === 'es'){
        console.log('Hola Mundo!')
    } else if (code === 'de'){
        console.log('Hallo Welt!')
    } else 
        console.log('Hello World!')
}

helloWorldInLang('es')

helloWorldInLang('en')

// 3. Scrieti o functie numita pluralizeWord care:
// - accepta doua argumente: un substantiv in engleza si un numar
// - returneaza numarul si forma de plural corespunzatoare substantivului, precum: “5 cats”, “1 dog”
// - adaugati cateva cazuri particulare pentru cuvinte precum “sheep” sau “geese” 

function pluralizeWord (text, number){

    if(number > 1 && text !== 'sheep' && text !== 'goose'){
        console.log(number + ' ' + text + 's')
    }else if( number> 1 && text === 'goose'){
        console.log(number + ' geese')
    }
    else
       console.log(number + ' ' + text)
}

pluralizeWord("goose", 2)


// 4.  Scrieti o functie care accepta ca argument venitul anual al unui angajat in dolari (ex: $30,000) si calculeaza taxa
// corespunzatoare considerand urmatoarele criterii:
// - daca angajatul castiga anual o suma mai mica de $30,000, taxa este 0%
// - daca venitul anual se situeaza intre $50,000 - $99,999, taxa calculata trebuie sa fie 35%
// - pentru venit mai mare de $100,000, taxa se calculeaza ca procentaj de 40%
// Returnati un text care sa aiba un format asemanator: “Pentru un venit anual de x, aveti de platit taxe in valoare de y”

var salary;
var taxes;

function tax (salary){
    if (salary < 30000){
        console.log('For an annual salary of '  + salary + ' you will be taxed 0% ')
    } else if ( salary >= 50000 && salary <= 99999){
        taxes = salary*35 / 100;
        console.log('For an annual salary of $'  + salary + ' you will be taxed $' + taxes)
    } else{
        taxes = salary*40 / 100;
    console.log('For an annual salary of $'  + salary + ', you will be taxed $' + taxes)
    }
}

tax(20000)