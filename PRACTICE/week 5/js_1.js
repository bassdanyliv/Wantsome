//Ex1
//Scrieti o functie multiplyByTen care atunci cand o apelam cu console.log(multiplyByTen(6)) sa avem 60 rezultat.

function multiplyByTen(number) {
    var result = number*10;
    return (result);
  }
  console.log(multiplyByTen(6))
  
  //Ex2
  //Scrieti o functie myNameIs care sa ia un singur parametru si cand o apelam cu numele nostru sa returneze "Numele meu este ___"
  
  function myNameIs(name) {
    var result = "Numele meu este "+ name;
    return (result);
  }
  console.log(myNameIs("Daniel"))
  
  
  //Ex3 
  //Scrieti o functie care sa transforme un numar in string.
  
  function transform(number){
    var result = "" + number + "";
    return (result);
  }
  console.log(transform(3))
  //Ex4 
  //Scrieti o functie care sa returneze patratul numarului pe care-l dam ca si argument.
  
  function square(number){
    return(number*number);
  
  }
  console.log(square(3))
  //Ex5
  //Scrieti o functie numita aflaViitorul care sa aiba 4 parametrii -  numele jobului, compania, in cati ani, si cati bani - ar trebui sa returnam "Eu voi fi job in x ani la compania y si voi face z bani pe ora"
  //Chemati/invocati/apelati acea functie de 3 ori cu diferite argumente.
  
  function aflaViitorul(job,company,time,money){
    return("Eu voi fi " + job + " in " + time + " la " + company + " si voi face " + money + " pe ora.");
  }
  console.log(aflaViitorul("programator","Intersystem",2,"40€"))
  
  //Ex6
  //Scrieti o functie care sa calculeze cati ani are o pisica in ani pisicesti avand in vedere ca 1 an de om = 7 ani de pisica.
  // functia are 1 singur parametru - deci va accepta 1 singur argument.
  // Rezultatul trebuie sa fie "Pisica mea are xx ani in ani pisicesti"
  //BONUS - adaugati un alt parametru care reprezinta varsta noastra si obtinem la final varsta pisciii relatata la varsta noastra.
  
  function catAge (number){
    var age = number * 7;
    return("Pisica mea are " + age + " in ani pisicesti")
  }
  console.log(catAge(7))
  
  
  //Ex7
  // Vreau sa scriu o functie ce sa calculeze pentru urmatorii X ani cate cani de cafea voi bea
  // Functia accepta ca parametrii years si coffePerDay.
  // Rezultatul va fi "In urmatorii X ani voi bea in total Y cani de cafea"
   function cupsOfCoffe(years, coffePerDay) {
    return(years * 365 * coffePerDay);
  }
  console.log(cupsOfCoffe(2,3))
  
  //EX8 BONUS 
  // Faceti 2 functii una calculateCelsiusToFarenheit() si una calculateFarenheitToCelsius() unde sa facem conversia dintre celsius si farenhite.
  // rezultatul trebuie sa fie "X grade Celsius reprezinta Y grade Farenhite"
  // folositi https://www.mathsisfun.com/temperature-conversion.html ca si referinta pentru calcul.
  
  function calculateCelsiusToFarenheit(tempCelsius){

    var tempFahr = (tempCelsius * 9 / 5 + 32);
    console.log(tempCelsius + '\xB0C is ' + tempFahr + '\xB0F')
  }
  calculateCelsiusToFarenheit(30)

  
  function calculateFarenheitToCelsius(tempFahr) {

    var tempCelsius = (tempFahr - 32) * 5 / 9;
    console.log(tempFahr + '\xB0F is ' + tempCelsius + '\xB0C')
  }
  calculateFarenheitToCelsius(86)