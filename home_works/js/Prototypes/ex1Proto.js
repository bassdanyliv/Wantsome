var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;

}

//Creati un obiect numit Trainer care sa fie derivat din obiectul Person 
//si implementati o metoda teach() ce primeste un string numit subject si printeaza
// [nume trainer] is now teaching [subject]

function Trainer (course) {
    this.course = course;

    this.teach = function (){
        return this.name + ' is now teaching ' + course + '.';
    }
}

Trainer.prototype = new Person();
const newTrainer = new Trainer('music');
newTrainer.initialize('Alex', 45);
console.log(newTrainer);


console.log(newTrainer.teach());


