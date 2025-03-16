// Ejercicio 5.3 (Desafío): Usa try...catch...finally para asegurar que un mensaje se imprima siempre, haya error o no.

function div(a, b){

    try {
        
        if(b === 0){
            throw new Error ("No se puede dividir por 0")
        }
        return a / b

    } catch (error) {
        
        console.log(error.message)
        return null
    } finally{
        console.log("Sigué intándolo, ¡No te rindas!")
    }

}

console.log(div(8, 4))