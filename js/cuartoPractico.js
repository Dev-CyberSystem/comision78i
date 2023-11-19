// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.

const nombreMes = numero => {
    const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    return meses[numero - 1]; 
}

const mostrarMes = () => {
    const num = parseInt(prompt('Ingrese un número del 1 al 12'));
    
    if(num >= 1 && num <= 12) {
    console.log(nombreMes(num));  
    } else {
    console.log('Número inválido');
    }
}

mostrarMes();


// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.

const nombreDia = numero => {
    const dias = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
    
    return dias[numero - 1];
}

const mostrarDia = () => {
    const num = parseInt(prompt('Ingrese un número del 1 al 7'));

    if(num >= 1 && num <= 7) {
    console.log(nombreDia(num));
    } else {
    console.log('Número inválido');
    }

}

mostrarDia();


// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.

const esVocal = letra => 'aeiou'.includes(letra);

const vocalOConsonante = () => {
    const letra = prompt('Ingresa una letra');
    if(esVocal(letra)) {
        console.log('Es una vocal');
    } else {
        console.log('Es una consonante');
    }
}

vocalOConsonante();


// 4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.

const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

const mostrarDia2 = () => {
  const num = parseInt(prompt('Ingresa un número del 1 al 5'));

  if(num >= 1 && num <= 5){
    console.log(dias[num-1]);
  } else {
    console.log('Número inválido'); 
  }
}

mostrarDia2();


// 5) Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.

    const esMayuscula = letra => letra === letra.toUpperCase();

    const mayusculaAMinuscula = () => {
        
        const letra = prompt('Ingresa una letra');

        if(esMayuscula(letra)) {
            console.log('Es mayúscula');
        } else {
            console.log('Es minúscula');
        }

    }

    mayusculaAMinuscula();


// 6) Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).

    const calificacion = nota => {
        if(nota < 5) {
        return 'Suspenso';
        } else if(nota < 7) {
        return 'Aprobado';
        } else if(nota < 9) {
        return 'Notable';
        } else {
        return 'Sobresaliente';
        }
    }
    
    const mostrarCalificacion = () => {
        const nota = parseFloat(prompt('Ingresa una nota del 0 al 10'));
    
        if(nota >= 0 && nota <= 10) {
        console.log(calificacion(nota));
        } else {
        console.log('Nota inválida');
        }
    
    }
    
    mostrarCalificacion();


// 7) Imprimir los números pares del 2 al 20 en la consola.

    const imprimirPares = () => {

    for(let i = 2; i <= 20; i++) {
        if(i % 2 === 0) {
        console.log(i);
        }
    }

    }

    imprimirPares();


// 8) Recorrer un string y mostrar en la consola cada letra en mayúsculas.

    const aMayusculas = (texto) => {
    for (let i = 0; i < texto.length; i++){
        console.log(texto[i].toUpperCase());
    }
    }

    aMayusculas('hola mundo');


// 9) Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.

    const mostrarNumeros = () => {

        const numero = parseInt(prompt('Ingresa un número'));
    
        for(let i = 1; i <= numero; i++) {
        console.log(i);
        }
    
    }
    
    mostrarNumeros();


// 10) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.

    const maximo = () => {

        const numeros = prompt('Ingresa varios números separados por comas');
        
        const lista = numeros.split(',');
    
        let max = lista[0];
    
        for(let i = 1; i < lista.length; i++) {
        if(parseInt(lista[i]) > max) {
            max = parseInt(lista[i]);
        }
        }
    
        console.log('El número máximo es: ' + max);
    
    }
    
    maximo();


// 11) Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.

    const palindromo = () => {

    const palabra = prompt('Ingresa una palabra');

    const alReves = palabra.split('').reverse().join('');

    if(palabra === alReves) {
        console.log('Es un palíndromo');
    } else {
        console.log('No es un palíndromo');
    }

    }

    palindromo();


// 12) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.

    const sumarPares = () => {

    const numeros = prompt('Ingresa varios números separados por comas');

    const lista = numeros.split(',');

    let sumaPares = 0;

    for(let i = 0; i < lista.length; i++) {
        if(parseInt(lista[i]) % 2 === 0) {
        sumaPares += parseInt(lista[i]); 
        }
    }

    console.log('La suma de los pares es: ' + sumaPares);

    }

    sumarPares();


// 13) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.

    const contarNegativos = (entrada) => {
        
        // Separar los números ingresados por coma en un array
        const numeros = entrada.split(',').map(Number);
        
        // Filtrar solo los números negativos
        const negativos = numeros.filter(num => num < 0);
        
        return negativos.length;
    };

    const ejecutarPrograma = () => {
        
        const entradaUsuario = prompt("Ingrese una serie de números separados por coma:");

        const cantidadNegativos = contarNegativos(entradaUsuario);

        console.log(`Cantidad de números negativos: ${cantidadNegativos}`)

    };

    ejecutarPrograma();


// 14) Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.

    const mostrarImparesHasta = (numero) => {
        // Convertir la entrada a un número
        const limite = Number(numero);

        // Validar si el número es válido
        if (!isNaN(limite)) {
            // Mostrar los números impares en la consola
            console.log(`Números impares hasta ${limite}:`);
            for (let i = 1; i <= limite; i += 2) {
                console.log(i);
            }
        } else {
            console.log('Por favor, ingrese un número válido.');
        }
    };

    // Solicitar al usuario que ingrese un número
    const numeroIngresado = prompt('Ingrese un número:');

    // Llamar a la función para mostrar los números impares
    mostrarImparesHasta(numeroIngresado);


// 15) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.


// 16) Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.


// 17) Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.


// 18) Dado un array de números, escribir una función que retorne el número más grande del array.


// 19) Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.


// 20) Dado un array de números, escribir una función que retorne la suma de todos los números del array.


// 21) Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.


// 22) Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.


// 23) Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".


// 24) Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.


// 25) Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".


// 26) Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.


// 27) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.


// 28) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.


// 29) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.


// 30) Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.




/*
// swich

// Sintaxis

// switch (expresion) {
//   case valor1:
//     // Declaraciones ejecutadas cuando el resultado de expresion coincide con el valor1
//     break;
//   case valor2:
//     // Declaraciones ejecutadas cuando el resultado de expresion coincide con el valor2
//     break;
//   case valorN:
//     // Declaraciones ejecutadas cuando el resultado de expresion coincide con valorN
//     break;
//   default:
//     // Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
//     break;
// }

// let dia = prompt("Ingrese un dia de la semana: ").toLocaleUpperCase().trim();
// switch (dia) {
//   case "LUNES":
//     console.log("Hoy es Lunes");
//     break;
//   case "MARTES":
//     console.log("Hoy es Martes");
//     break;
//   case "MIERCOLES":
//     console.log("Hoy es Miercoles");
//     break;
//   default:
//     console.log("No es ningun dia");
//     break;
// }

// let diaSemana = prompt("Ingrese un dia de la semana: ").toLocaleUpperCase().trim();

// switch (diaSemana) {
//     case "LUNES":
//     case "MARTES":
//     case "MIERCOLES":
//     case "JUEVES":
//     case "VIERNES":
//         console.log("Es un dia habil");
//         break;
//     case "SABADO":
//     case "DOMINGO":
//         console.log("Es un dia no habil");
//         break;
//     default:
//         console.log("No es un dia");
//         break;
// }

// let banda = prompt("Ingrese una banda: ").toLocaleUpperCase().trim();

// switch (banda) {
//     case "METALLICA":
//         alert("Banda de Heavy Metal");
//         break;
//     case "MEGADETH":
//         alert("Banda de Heavy Metal");
//         break;
//     case "LA RENGA":
//         alert("Banda de Rock Nacional");
//         break;
//     case "DIVIDIDOS":
//         alert("Banda de Rock Nacional");
//         break;
//     default:
//         alert("Amargo te gusta L-Gante")
//         break;
// }

// Ternario

// Sintaxis

// condicion ? true : false;

// let edad = 65;

// let resultado =
//   edad >= 18 && edad < 50
//     ? "Es mayor de edad"
//     : edad >= 50 && edad < 100
//     ? "Es adulto mayor"
//     : edad >= 100
//     ? "Es centenario"
//     : "Es menor de edad";
// console.log(resultado);


// Bucles o ciclos o loops
// for - while - do while 

// for 
// Sintaxis   
// for (inicio; condicion; incremento) { 
//     codigo a ejecutar
//  }


// for ( let i = 10 ; i <= 10; i++) {
//     console.log(i);
// }

// let j = 2

// for (j ; j <= 20; j += 3) {
//     console.log(j);
// }

let array = ["hola", "como", "estas", "hoy", "bien"];
// console.log(array[4], "posicion 4");

// let extension = array.length;
// console.log("Extension del array -->", extension )

 for (let i = 4; i < array.length; i++) {
        console.log(array[i]);
    }

// Ciclo While

// Sintaxis 
// while (condicion) {
//     codigo a ejecutar
//     iteracion
// }

// let x = 0;

// while (x <= 10) {
//     console.log(x);
//     x++;
// }

// Ciclo Do While

// Sintaxis
// do {
//     codigo a ejecutar
//     iteracion
// } while (condicion);

// let y = 5;

// do {
//     console.log(y);
//     y++;
// } while (y <= 15);

// Metodos de arrays --> Colecciones de elementos.

// crear un array vacio

let arrayVacio = [];

let arrayContenido = ["hola", 1, true, { nombre: "Juan" }, [1, 2, 3]];

// ingresar un elemento  del array

let arrayNumeros = [1, 2, 3, ];
console.log(arrayNumeros[0]) // 1
console.log(arrayNumeros[1]) // 2
console.log(arrayNumeros[2]) // 3

// agregar elementos al array al final del array

// arrayNumeros.push("hola");

// agregar elementos al array al principio del array
// arrayNumeros.unshift("chau");

// agregar elemento en una posicion especifica del array
arrayNumeros.splice(2, 0, "especifica");
console.log(arrayNumeros);


*/