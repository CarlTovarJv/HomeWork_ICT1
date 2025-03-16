// Ejercicio 1.3 (Desafío): Crea un triángulo con asteriscos usando bucles anidados:

let pyramid = 5;

for (let i = 1; i <= pyramid; i++) { 
    let pyra = ""; 
    for (let a = 1; a <= i; a++) { 
        pyra += "*"; 
    }
    console.log(pyra);
}