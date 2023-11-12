//Metodos de String
let texto = "Hola, mundo";

//Length: Permite contar la cantidad de caracteres que tenemos
console.log(texto.length);

//Pedir un nombre y calcular su ingresar (string)
let longitud = texto.length;

let ingresarNombre = prompt("Ingrese su Nombre");
console.log(ingresarNombre);

//Minuscula
let ingresarApellido = prompt("Ingrese su apellido");
let convertirMinuscula = ingresarApellido.toLocaleLowerCase();

console.log(convertirMinuscula);

//Método para encontrar una posición dentro de una cadena
let posicion = texto.indexOf("n"); //Hallar en que posicio está la letra "n"
console.log(posicion);

//Reemplazar palabrapor otra
let reemplazo = texto.replace("hola", "adios")
console.log(reemplazo);

//Método Slice Permite extraer una parte de una cadena de texto
let extraer = texto.slice(0, 4);
console.log(extraer);

//--Separar una cadena en string individuales
//Separar los equipos y dejarlos en un string independiente
let textoSecundario = "river, racing, independiente, san lorenzo, san martin, fc";
let separar = textoSecundario.split(",") //cada vez que halle una coma va aseparar
console.log(separar);

//Metodo para Unir elementos
let dividir = separar.join("+")

//Permite verificar si en la cadena se incluye la palabra seleccionada devuelve true or false.
let verificar = texto.includes("Holaa")
console.log(verificar);

//Concatenación de cadenas de texto: Permite unir dos cadenas de texto
let textoDos = "cruel";
let concatenar = texto.concat(textoDos);

//Quitar espacios en blanco de una cadena de texto
let ingresarTexto = prompt("Ingeese un texto").trim();
console.log(ingresarTexto);

//Convertir un String a Int (numero)
//Elimina cualquier string que tengamos y podemos hacerlo con un parseInt o parseFloat
let convertirNumero = parseInt("10")
console.log(convertirNumero);
console.log(ingresarNombre);

let eliminarLetras = parseInt("34hhdkj")
console.log(eliminarLetras);

//con decimales:
let decimales = parseFloat("45.32");
console.log(decimales);

//RECESO 15MIN//
//***Funciones***
function saludar(){
	//Si declaramos variables dentro de una función suelen ser de bloque
	console.log("Esto es una funcion");
}

//invocar 
saludar();

//Funcion sumar dos numeros con datos por parametros
function sumarNumeros(a, b){
    return a + b; //Devuelve el resultado de la acción que se realiza dentro de la funcion
    console.log("Esta linea no se ejecuta despues del return");
}

//Invoco mi funcion y se guarda el resultado en una variable
let resultado = sumarNumeros(8,10)
console.log(resultado);

//Con parametros
function saludar(nombre = "Keyra", apellido = "Lima"){
    console.log(?);
}
saludar();

//Arrow function
const funcionArrow = () => {
    console.log("Esta es una funcion de flecha");
}

funcionArrow();

const ejemplo2 = () => {
    let nombre = promt("Ingrese su nombre: ");
    return (
        <>
            <div>
                <h1>{nombre}</h1>
            </div>
        </>
    )
}