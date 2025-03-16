// Ejercicio 4.3: Parsea el JSON '[{"id": 1, "producto": "Lápiz"}, {"id": 2, "producto": "Borrador"}]' y lista los productos.

const store = '[{"id": 1, "producto": "Lápiz"}, {"id": 2, "producto": "Borrador"}]';

const jsonToObject = JSON.parse(store);

console.log(jsonToObject[0].producto)
console.log(jsonToObject[1].producto)
