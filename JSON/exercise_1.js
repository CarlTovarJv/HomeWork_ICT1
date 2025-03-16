// Ejercicio 4.1: Crea un objeto JavaScript que represente un libro (con título, autor y año) y conviértelo a JSON.

let book = {
    title: "Los 7 habitos de los adolescentes altamente efectivos",
    author: "Sean Covey",
    year: 1998
};

let jsonBook = JSON.stringify(book);

console.log(jsonBook);