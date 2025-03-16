// Ejercicio 2.1: Dado el array [3, 7, 2, 9, 5], calcula su suma usando for o for...of.

let array = [3, 7, 2, 9, 5];

let sum = 0;

for (let numb of array){
    sum += numb
}

console.log(sum)