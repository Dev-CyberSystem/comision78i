let sumar =  function (a,b){
    return a + b;
}

let restar = function (a,b){
    return a - b;
}

function sumar10(){
    let numero5 = 5;
    return numero5 + 10;
}

let usuario1 = 5;
let usuario2 = 10;
console.log(usuario1==usuario2);
console.log(usuario1!=usuario2);
console.log(usuario1===usuario2);
console.log(usuario1>usuario2);
console.log(usuario1>=usuario2);
console.log(usuario1<=usuario2);
console.log(usuario1<usuario2);

function estaEntre(numero1,numero2,numero3){
    return numero1>numero2 && numero1<numero3;
  }


const sujeto = () => {
    let nombre = prompt("Ingrese su nombre");
    return (
        <>
        <div>
            <h1>{nombre}</h1>
        </div>
        
        </>
    );
};



function concatenar(){
    let textoRandom = "Evil Geniuses, Furia, Leviatan, KRU, 9z";
    let textoSecundario = "Isurus Gaming, Malvinas Gaming, Furious";
    return textoRandom.concat(" ", textoSecundario);
};

let ingresarNombre= prompt("Ingrese su nombre");
console.log(ingresarNombre);
let ingresarNumUsuario = prompt("Ingresu su numero de ID");
console.log(ingresarNumUsuario);


const calcularEdad = () => {
    let nacimiento = prompt("Ingrese su anho de nacimiento");
    let edadActual = 2023 - nacimiento;
    return (
        <>
        <div>
            <h1>{"Tu edad actual es de" + edadActual}</h1>
        </div>
        
        </>
    );
};

let textoSecundario = prompt("Ingresar una cadena de texto separada por espacios");
let separar = textoSecundario.split(" ");
console.log(textoSecundario.length);

// let number = prompt("ingresar un numero random");
// console.log(number);

// let nombre = prompt("Ingresar un nombre random"):
// console.log(nombre);







