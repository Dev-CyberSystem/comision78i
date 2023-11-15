// 1- Crear una función que tome un número como parámetro y devuelva "Positivo" si es mayor a cero, "Negativo" si es menor a cero o "Cero" si es igual a cero.

    const determinarSigno = (num) => {
        
        if (num > 0) {
            return 'Positivo';
        } else if (num < 0) {
            return 'Negativo';  
        } else {
            return 'Cero';
        }

    }

    console.log(determinarSigno(10));
    console.log(determinarSigno(-2));
    console.log(determinarSigno(0));


// 2- Crear una función que tome un número como parámetro y devuelva "Par" si es divisible por 2 o "Impar" si no lo es.

    const paridad = (num) => {
        
        if (num % 2 === 0) {
            return 'Par';
        } else {
            return 'Impar';
        }

    }

    console.log(paridad(2));
    console.log(paridad(7));


// 3- Crear un programa que pida al usuario un número y luego muestre si es par o impar.

    function programa_paridad () {

        let numeroIngresado = prompt("Ingrese un número:");
        let numero = parseInt(numeroIngresado);

        console.log(paridad(numero));

    }

    programa_paridad();


// 4- Crear un programa que pida al usuario un número y luego muestre si es positivo, negativo o cero.

    function programa_signo () {

        let numeroIngresado = prompt("Ingrese un número:");
        let numero = parseInt(numeroIngresado);

        console.log(determinarSigno(numero));

    }

    programa_signo();


// 5- Crear un programa que pida al usuario dos números y luego muestre cuál es el mayor de los dos.

    const determinarMayor = (numero1, numero2) => {
        
        if (numero1 > numero2) {
            return numero1;
        } else {
            return numero2;
        }

    }

    function programa_determinarMayor () {
        
        let primerNumero = prompt("Ingrese el primer Número");
        let segundoNumero = prompt("Ingrese el segundo Número:");
        
        let numero1 = parseInt(primerNumero);
        let numero2 = parseInt(segundoNumero);

        console.log(determinarMayor(numero1, numero2));

    }

    programa_determinarMayor();

    
// 6- Crear un programa que pida al usuario una contraseña y la valide según ciertas condiciones, como la longitud y la presencia de caracteres especiales.

    const validarContraseña = (contraseña) => {

        let longitudContraseña = contraseña.length >= 8;
        let contraseñaEspeciales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(contraseña)

        if (longitudContraseña && contraseñaEspeciales) {
            return 'Contraseña Valida';
        } else {
            return 'Contraseña Invalida';
        }

    }

    function programa_contraseña() {

        let contraseña = prompt('Ingresa una contraseña');

        console.log(validarContraseña(contraseña));

    }

    programa_contraseña();

// 7- Crear un programa que pida al usuario una calificación y luego muestre si es aprobatoria o no (nota mínima para aprobar es 70).

    const verificarCalificacion = (calificacion) => {

        if (calificacion >= 70) {
            return "Aprobado";
        } else {
            return "Desaprobado";
        }

    }

    function programa_calificacion() {

        let notaIngresada = prompt("Ingrese su calificación(0-100):");
        let nota = parseFloat(notaIngresada);

        console.log(verificarCalificacion(nota));

    }

    programa_calificacion();


// 8- Crear una función que tome una cadena como parámetro y devuelva "Es un palíndromo" si la cadena es igual al revés, de lo contrario, devolver "No es un palíndromo".
    
    const esPalindromo = (cadena) => {
        
        let convertirMinusculas = cadena.toLowerCase();
        let cadenaInversa = convertirMinusculas.split('').reverse().join('');
        
        if (convertirMinusculas === cadenaInversa) {
            return 'Es un palíndromo';
        } else {
            return 'No es un palíndromo';
        }

    }

    console.log(esPalindromo('hola'));
    console.log(esPalindromo('seres'));

// 9- Crear un programa que pida al usuario una letra y luego muestre si es una vocal o una consonante.

    const esVocal = (letra) => {

        if ('aeiou'.includes(letra)) {
            return 'Es Vocal';
        } else {
            return 'Es consonante';
        }

    }

    function programa_vocal() {

        let letra = prompt('Ingrese una letra:').toLowerCase();

        console.log(esVocal(letra));

    }

    programa_vocal();


// 10- Crear un programa que pida al usuario un número del 1 al 7 y luego muestre el día de la semana correspondiente.

    const obtenerDia = (num) => {

        switch(num) {
            case 1:
                return 'Lunes';
            case 2:
                return 'Martes';
            case 3:
                return 'Miércoles';
            case 4:
                return 'Jueves';
            case 5:
                return 'Viernes';
            case 6:
                return 'Sábado';
            case 7: 
                return 'Domingo';
        }

    }

    function programa_dia() {

        let numeroDia = prompt('Ingresa un número del 1 al 7');
        let dia = parseInt(numeroDia);

        if (dia >= 1 && dia <= 7) {
            const nombreDia = obtenerDia(dia);
            console.log(nombreDia);
          } else {
            console.log('Número inválido');
          }

    }

    programa_dia();


// 11- Crear un programa que pida al usuario un número y luego muestre si es primo o no.

    const esPrimo = (num) => {

        if (num > 1) {
            if (num % 1 === 0 && num % num === 0) {
                return 'Es un numero Primo';
            } else {
                return 'No es Primo';
            }
        } else {
            return 'No es Primo';
        }

    }

    function programa_Primo() {

        let numero = parseInt(prompt('Ingresa un número'));

        console.log(esPrimo(numero));

    }

    programa_Primo();


// 12- Crear un programa que pida al usuario su edad y luego muestre si es mayor o menor de edad (18 años).

    const esMayor = (edad) => {

        if(edad >= 18) {
            return ('Eres mayor de edad');
          } else {
            return ('Eres menor de edad');
          }

    }

    function programa_edad() {

        let edad = parseInt(prompt('Ingresa tu edad'));

        console.log(esMayor(edad));

    }

    programa_edad();


// 13- Crear un programa que pida al usuario dos números y luego muestre si su suma es mayor, menor o igual a 100.

    const suma = (num1, num2) => num1 + num2;

    const verificarSuma = (suma) => {

        if(suma > 100) {
            return 'La suma es mayor a 100';
          } else if(suma < 100) {
            return 'La suma es menor a 100';
          } else {
            return 'La suma es igual a 100';
          }

    }

    function programa_suma() {

        let num1 = parseInt(prompt('Ingresa el primer número'));
        let num2 = parseInt(prompt('Ingresa el segundo número'));

        valorSuma = suma(num1, num2);

        console.log(verificarSuma(valorSuma));

    }

    programa_suma();


// 14- Crear un programa que pida al usuario tres números y luego muestre cuál es el mayor de los tres.

    const verificarNumMayor = (num1, num2, num3) => {

        let max = num1;
        
        if (num2 > max) {
            return max = num2;
        } else if(num3 > max) {
            return max = num3;
        } else {
            return max;
        }

    }

    function programa_num_mayor() {

        let num1 = parseInt(prompt('Ingresa el primer número'));
        let num2 = parseInt(prompt('Ingresa el segundo número'));
        let num3 = parseInt(prompt('Ingresa el tercer número'));

        console.log(verificarNumMayor(num1, num2, num3));

    }

    programa_num_mayor();


// 15- Crear un programa que pida al usuario una letra y luego muestre si es una letra mayúscula o minúscula.

    const esMayus = (letra) => {

        if(letra === letra.toUpperCase()) {
            return 'Es una letra mayúscula';
        } else {
            return 'Es una letra minúscula';
        }

    }

    function programa_letras() {

        let letra = prompt('Ingresa una letra');

        console.log(esMayus(letra));

    }

    programa_letras();


// 16- Crear una función que tome un número como parámetro y devuelva "Fizz" si es divisible por 3, "Buzz" si es divisible por 5 o "FizzBuzz" si es divisible por ambos. En cualquier otro caso, devolver el número.

    const fizzBuzz = (num) => {
        if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
        } else if (num % 3 === 0) {
        return 'Fizz';
        } else if (num % 5 === 0) {
        return 'Buzz';
        } else {
        return num; 
        }
    }
  
  console.log(fizzBuzz(3)); // Fizz
  console.log(fizzBuzz(5)); // Buzz
  console.log(fizzBuzz(15)); // FizzBuzz
  console.log(fizzBuzz(7)); // 7
  
  
// 17- Crear un programa que pida al usuario un número y luego muestre si es un número perfecto o no. Un número perfecto es aquel que es igual a la suma de sus divisores propios.

// 18- Crear un programa que pida al usuario un número y luego muestre su descomposición en factores primos.

// 19- Crear un programa que pida al usuario una fecha (día, mes y año) y luego muestre si es válida o no. Una fecha es válida si cumple con ciertas condiciones, como la cantidad de días en el mes y si es un año bisiesto o no.






/*

// Objeto MATH

// Valor absoluto.
let absoluto = -5.2;
let valorAbsoluto = Math.abs(absoluto);
// console.log(valorAbsoluto)

// Maximo y minimo

let numeros = [1, 2, 3, 5, 7, 10];
let numMaximo = Math.max(...numeros);
console.log(numMaximo);
let numMinimo = Math.min(...numeros);
console.log(numMinimo);

// Redondear

let redondeo = 3.2;

let resultadoRedondeo = Math.round(redondeo);
console.log(resultadoRedondeo);

// Floor, devuelve el entero mas peqeño.

let floor = 4.879;
let resultadoFloor = Math.floor(floor);
console.log(resultadoFloor);

// ceil

let ceil = 5.1;
let resultadoCeil = Math.ceil(ceil);
console.log("ceil--->", resultadoCeil);

//trunc
let trunc = 8.554646464646;
let resultadoTrunc = Math.trunc(trunc);
console.log("trunc--->", resultadoTrunc);

// random nos devuelve un numero entre 0 y .99

let random = Math.random();
console.log("random--->", random);

// random entre 0 y 10

const numerosAleatorios = () => {
    return Math.floor(Math.random() * 7) + 1;
};

const girarTragaMonedas = () => {
    const num1 = numerosAleatorios();
    const num2 = numerosAleatorios();

    // console.log(`Numeros ${num1}, ${num2}, ${num3} `)
    const resultadosTragamonedas = document.getElementById("resultados");
    resultadosTragamonedas.textContent = `Numeros ${num1}, ${num2} `;

    if (num1 === num2) {
        resultadosTragamonedas.textContent =
            num1 === 7
                ? `${num1} - ${num2}, No sos Boca, Vos si tenes la septima`
                : `${num1} - ${num2}, Ganaste`;
    } else {
        resultadosTragamonedas.textContent += ` SEGUI INTENTANDO`;
    }
};

// ------------------------------------------------------------------------------

// Estructuras de controles.

// if, else if, else

// if(){
//     //accionables
// }else if (){
//     //accionables
// }else {
//     //accionable
// }

// let edad = prompt("ingresa la edad");

// if (edad >= 18) {
//   //si esto es true
//   alert("Es mayor de edad");
// } else {
//   //si no es true osea es false
//   alert("Es menor de edad");
// }

// Tarea

//Crear una función que tome dos números como parámetros y devuelva el número mayor.



const esMayor = (num1, num2) => {
    if (num1 > num2) {
        console.log(num1, "es Mayor");
    } else if (num1 === num2) {
        console.log("Son iguales")
    } else {
        console.log(num2, "Es mayor");
    }
};

esMayor(5, 5); //pasando los numeros por parametro

*/