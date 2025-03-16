// Ejercicio 5.2: Crea un bloque donde intentes acceder a una variable no definida y captura el error.

try {
    console.log(a)
} catch (error) {
    console.log("Error encontrado:", error.message);
}