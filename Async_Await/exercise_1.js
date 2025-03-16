// Ejercicio 6.1: Crea una función esperarSegundos(segundos) que use setTimeout con async/await.

function esperarSegundos(segundos) {
    return new Promise(resolve => setTimeout(resolve, segundos * 1000));
}

async function horario() {
    console.log("Me despierto temprano");
    
    await esperarSegundos(1);
    console.log("Me levanté al siguiente");

    console.log("Un poco más tarde que temprano");

    await esperarSegundos(5);
    console.log("Good night");

    console.log("Dormí todo el día");
}

horario();