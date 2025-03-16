// Ejercicio 4.2: Dado el JSON '{"nombre": "Ana", "edad": 30, "ciudad": "Madrid"}', conviértelo a objeto y muestra la edad.

const person = '{"nombre": "Ana", "edad": 30, "ciudad": "Madrid"}';

const jsonToObject = JSON.parse(person);

console.log(jsonToObject.edad);