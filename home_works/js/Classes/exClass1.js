//1. Creati o clasa Person care sa aiba firstName si lastName in constructor
//2. Adagati o metoda displayPersonName care sa returneze numele complet
//3. Creati o persoana cu noua clasa unde dati un nume si-un prenume si apelati metoda respectiva

class Person {

    firstName;
    lastName;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    displayPersonName() {
        console.log(`${this.firstName} ${this.lastName}`);

    }
}

let newPerson = new Person('Alec', 'Baldwin');
newPerson.displayPersonName();