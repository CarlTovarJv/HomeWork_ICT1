// Ejercicio 5.1: Escribe una función que divida dos números. Usa try...catch para manejar división por cero.

function div(a, b){

    try {
        
        if(b === 0){
            throw new Error ("No se puede dividir por 0")
        }
        return a / b

    } catch (error) {
        
        console.log(error.message)
        return null
    }

}

console.log(div(8, 4))