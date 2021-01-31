// Adaugati un tag script la final

// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"

document.body.style.backgroundColor = '#BCE6EB';
document.body.style.fontFamily = 'Arial, sans-serif';

// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi

document.getElementById('name').innerHTML = 'Daniel';
document.getElementById('fav-drink').innerHTML ='grapefruit juice';
document.getElementById('born-place').innerHTML ='Romania';

// Iterati prin fiecare "li" si puneti clasa "listitem". Adaugati un tag style(in head) care seteaza o regula pentru .listitem sa aiba culoarea rosie

const list = document.getElementsByTagName('li');
for(let i = 0; i < list.length; i++){
    list[i].classList.add('listitem');
}
// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net. Puneti acest element(append) la pagina noastra

const photo = document.createElement('img');
photo.setAttribute('src', 'https://lovinlife.com/wp-content/uploads/2019/04/gj.jpg');
document.body.appendChild(photo);