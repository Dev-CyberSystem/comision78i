//Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.

function verificarNumero(numero) {
    if (isNaN(numero)) {
        return "No es un número válido";
    } else if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Cero";
    }
}

//Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.--

console.log(verificarNumero(5)); 
console.log(verificarNumero(-3));
console.log(verificarNumero(0));  
console.log(verificarNumero("Hola")); 

function determinarParOImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

// Ejemplos de uso de la función:
console.log(determinarParOImpar(4)); 
console.log(determinarParOImpar(7));  
console.log(determinarParOImpar(0));  
console.log(determinarParOImpar(-1));  

//Crear un programa que pida al usuario un número y luego muestre si es par o impar.--

// Pedir al usuario que ingrese un número
let numer = parseInt(prompt("Por favor, ingresa un número:"));

// Verificar si el número es par o impar
if (numer % 2 === 0) {
    console.log("El número ingresado es par.");
} else {
    console.log("El número ingresado es impar.");
}


//Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero--
// Pedir al usuario que ingrese un número
let numero = parseFloat(prompt("Por favor, ingresa un número:"));

// Verificar si el número es positivo, negativo o cero
if (numero > 0) {
    console.log("El número ingresado es positivo.");
} else if (numero < 0) {
    console.log("El número ingresado es negativo.");
} else {
    console.log("El número ingresado es cero.");
}


//Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.--

function encontrarMayor() {
    const numero1 = parseFloat(prompt("Ingresa el primer número:"));
    const numero2 = parseFloat(prompt("Ingresa el segundo número:"));

    if (isNaN(numero1) || isNaN(numero2)) {
        console.log("Por favor, ingresa números válidos.");
    } else {
        if (numero1 > numero2) {
            console.log("El primer número es mayor:", numero1);
        } else if (numero2 > numero1) {
            console.log("El segundo número es mayor:", numero2);
        } else {
            console.log("Ambos números son iguales:", numero1);
        }
    }
}

encontrarMayor();

//Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.--

function validarContraseña(contraseña) {
    // Verificar la longitud mínima
    const longitudMinima = 8;

// La contraseña no cumple con la longitud mínima
    if (contraseña.length < longitudMinima) {
        return false; 
    }

// La contraseña no contiene caracteres especiales
    const expresionCaracteresEspeciales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (!expresionCaracteresEspeciales.test(contraseña)) {
        return false; 
    }

    return true; // La contraseña cumple con todas las condiciones
}

const contraseñaIngresada = prompt("Ingresa tu contraseña:");
if (validarContraseña(contraseñaIngresada)) {
    console.log("¡La contraseña es válida!");
} else {
    console.log("La contraseña no cumple con los requisitos mínimos.");
}
