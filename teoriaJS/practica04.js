//cUARTA clase rolling - 15 noviembre 2023

//1-Crear programa que el usuario ingrese el día y le muestre que día es.
let dia = prompt("Ingrese el día").toLocaleUpperCase();

switch (dia){
    case "LUNES":
        console.log("Hoy es Lunes");
        break;
    case "MARTES":
        console.log("Hoy es Martes");
        break;
    case "MIERCOLES":
        console.log("Hoy es Miercoles");
        break;
    case "JUEVES":
        console.log("Hoy es Jueves");
        break;
    case "VIERNES":
        console.log("Hoy es Viernes");
        break;
    case "SABADO":
        console.log("Hoy es Sábado");
        break;
    default:
        console.log("Dia incorrecto, intente nuevamente");
    break;
}

//3-Calcular si un día es hábil o no de la semana  
let diaSemana = prompt("Ingrese el dia de la semana").toLocaleUpperCase();

switch (diaSemana){
	case "LUNES":
	case "MARTES":
	case "MIERCOLES":
	case "JUEVES":
	case "VIERNES":
		console.log("Es un dia habil");
	break;

	case "SABADO":
	case "DOMINGO":
		console.log("Es un dia no habil");
	break;
	
	default:
		console.log("No es un dia");
	break;
}

//-3 banda
let banda = prompt("Ingrese una banda: ").toLocaleUpperCase().trim();

switch (banda) {
    case "METALLICA":
        alert("Banda de Heavy Metal");
    break;
    case "MEGADETH":
        alert("Banda de Heavy Metal");
    break;
    case "LA RENGA":
        alert("Banda de Rock Nacional");
    break;
    case "DIVIDIDOS":
        alert("Banda de Rock Nacional");
    break;
    default:
        alert("Amargo te gusta L-Gante")
     break;
}

//Condicional Terniaria
// Sintaxis

// condicion ? true : false;


let edadUno = 18;
let resultadoUno = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
//let nombreVar = condicional entonces(?) "valorTrue" else(:) "valorElse";


//ejemplo con 3 condicionales
let edad = 65;

let resultado =
    edad >= 18 && edad < 50
        ? "Es mayor de edad"
        : edad >= 50 && edad < 100
        ? "Es adulto mayor"
        : edad >= 100
        ? "Es centenario"
        : "Es menor de edad";
console.log(resultado);

//CICLOS ITERATIVOS
//for, while, do-while y foreach

// Sintaxis   
// for (inicio; condicion; incremento) { 
//     codigo a ejecutar
//  }

for ( let i = 0 ; i <= 10; i++) { //Ejemplo que imprime numero del 1 al 10
        console.log(i);
}

//Ejemplo que imprime numeros pares de 2 en 2 hasta 20
for(j=2; j<=20; j+=2){
    console.log(j);
}

//Ejemplo Recorrer un array e imprimirlo
let array = ["hola", "buenos", "dias"];
for (let i=0; i< array.length; i++){ //Si tiene una longitud mayor que i
	console.log(array[i]);
}

//CICLO WHILE
// Sintaxis 
// while (condicion) {
//     codigo a ejecutar
//     iteracion
// }

let x = 0; //imprimir numeros del 1 al 10

while (x <= 10) {
    console.log(x);
    x++;
}

//Ciclo DO WHILE

// Sintaxis
// do {
//     codigo a ejecutar
//     iteracion
// } while (condicion);

//EJERCICIO - Muestra los números en consola a partir del 5 hasta llegar a la condición.
let y = 5;

do {
    console.log(y);
    y++;
} while (y <= 15);

//ARRAY - Calcular la extensión del array:
let arrayUno = ["hola", "mi", "nombre", "es", "keyra"];
console.log(arrayUno[0]," posicion 0");
console.log(arrayUno[1]," posicion 1");
console.log(arrayUno[2]," posicion 2");

let extension = arrayUno.length;
console.log("Extension del array -->  ", extension);

//Recorremos el array con for sin poner por posicion
for(let i=0; i<arrayUno.length; i++){
	console.log(array[i]);
}

//ARRAYS Y METODOS --> Colecciones de elementos.

//crear un array vacio
let arrayVacio = [];
let arrayContenido = ["hola", 1, true, { nombre: "Juan" }, [1, 2, 3]];

//Ingresar a los elementos de un array
let arrayNumeros = [1,2,3,4,5,6,7,8,9,10];
console.log(arrayNumeros[0]); //Vemos la posicion 0
console.log(arrayNumeros[1]); //Vemos la posicion 1

//agregamos un nuevo elemento:
arrayNumeros.push('hola'); //final del array
arrayNumeros.unshift('inicio'); //inicio del array
console.log(arrayNumeros);