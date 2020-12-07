function Book(title, author, status) {
  this.title = title;
  this.author = author;
  this.status = status;
}

var book1 = new Book("The Bridge on the Drina", "Ivo Andrić", "readed");
var book2 = new Book("Lykke-Per", "Henrik Pontoppidan", "readed");
var book3 = new Book("The Chronicles of Narnia", "C.S. Lewis", "readed");
var book4 = new Book("Antichi Maestri", "Thomas Bernhard", "unreaded");

var library = [book1, book2, book3, book4];

for (var i = 0; i < library.length; i++) {
  var values = Object.values(library[i]);
  console.log('"' + values[0] + '" by ' + values[1] + ", " + values[2]);
}
