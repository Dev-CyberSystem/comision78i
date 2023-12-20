//Diferentes formas de llenar una variable
let numero = 10;
let decimal = 10.12;
let arreglo = [1, 2, 3, 4, 5];
let objeto = {
  nombre: "Juan",
  apellido: "Perez",
  direccion: {
    calle: "Av. Siempre Viva",
    numero: "123",
  },
};

// Metodos de String

let texto = "Hola, Mundo";

// Length, contar la cantida de caracteres que tenemos
let logintud = texto.length;

//Convertir a mayusculas
//  let ingrarNombre = prompt("Ingrese su nombre");
//  let convertirMayusculas = ingrarNombre.toUpperCase();

//Convertir a minusculas
// let ingresarApellido = prompt("Ingrese su apellido").toLowerCase();
// let convertirMinusculas = ingrarNombre.toLowerCase();

// Encontrar una posicion dentro de una cadena de texto.

let posicion = texto.indexOf("H");

// Reemplazar una palabra dentro de una cadena de texto.

let reemplazo = texto.replace("Hola", "Mundito");

// slice, extraer una parte de una cadena de texto

let extraer = texto.slice(0, 3);

// Separar una cadena en un arreglo ( array )

let textoSecundario = "River, Racing, Independiente";

let separar = textoSecundario.split(",");

let dividir = separar.join(","); //Metodo de Array para unir los elementos de un arreglo

// Verificar si existe una palabra dentro de una cadena de texto

let verificar = texto.includes("Hola");

//Concatenacion de cadenas de texto, unir dos cadenas de texto

let textoDos = ",Cruel";

let concatenar = texto.concat(textoDos);

//Quitar espacios en blanco de una cadena de texto

//  let ingresarTexto = prompt("Ingrese un texto").trim();

// convertir un string a numero

let convertirNumero = parseInt("10");
console.log(convertirNumero);

let eliminarLetras = parseFloat("15.15ADV");

let decimales = parseFloat("10.12");

console.log(eliminarLetras);

// Funciones

// function saludar() {
//     console.log("Esta es una Funcion");
// }

// saludar();

function arrancar() {
  let numero1 = 10;
  let numero2 = 20;
  return numero1 + numero2;
}
arrancar();

function sumar(pepito, b) {
  return pepito + b;
  console.log("Esta linea no se ejecuta");
}
let resultado = sumar(2, "diego");
console.log(resultado);

function registro(nombre, apellido, edad, direccion) {
  let rol = "usuario";
  console.log(
    `Hola ${nombre} ${apellido} tienes ${edad} años y vives en ${direccion} y tu rol es ${rol}`
  );
}
registro("Jacinto", "Pichimahuida", 30, "Av. Siempre Viva");

// Funciones de flecha

const restar = () => {
  console.log("Esta es una funcion de flecha");
  console.log("Esta es una funcion de flecha");
};

restar();

let sumar = function(a,b) {
    return a + b;
}

//Tarea
//Quiz Javascript - Introducción
//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.
// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.
// Crea dos variables con valores numéricos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.
// Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.
// Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Muestra el resultado en la consola.
// Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.
// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.
// Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.
// Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.
// Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.
// Crea una Funcion que reciba dos parametros y los sume, luego muestra el resultado en la consola.
// Crea una Funcion que reciba dos parametros y los reste, luego muestra el resultado en la consola.
// Crea una funcion donde se declare una variable con el valor 5 y se le sume 10, luego muestra el resultado en la consola.
// Crea una funcion donde se declaren dos variables con valores en string y se concatenen, luego muestra el resultado en la consola.
// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son iguales, luego muestra el resultado en la consola.
// Crea una funcion donde se declaren dos variables con valores booleanos y se compare si son diferentes, luego muestra el resultado en la consola.
// Crea una funcion donde se declaren dos variables con valores numericos y se compare si el primero es mayor que el segundo, luego muestra el resultado en la consola.
// Mediante un prompt pide al usuario que ingrese un numero y luego muestra el resultado en la consola.
// Mediante un prompt pide al usuario que ingrese su nombre y luego muestra el resultado en la consola.
// Mediante un prompt pide al usuario que ingrese dos numeros, estos se deben almacenar en dos variables diferentes, luego haz una suma de ambos y que el resultado se guarde en otra variable, muestra el resultado de la suma en el documento.
//  Escribe un programa que solicite al usuario su año de nacimiento y calcule su edad actual y muestre si es o no mayor de edad. Luego, muestra la edad en una cadena de texto.

// Crea un programa que cuente el número de palabras en una frase proporcionada por el usuario. Una palabra se define como cualquier secuencia de caracteres separada por espacios en blanco.




//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.

let numeroUno = 10;
let numeroDos = 20;
let resultados = numeroUno + numeroDos;
console.log(resultados)
