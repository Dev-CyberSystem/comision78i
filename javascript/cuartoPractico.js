
// Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.

let numMes = prompt("Ingrese un numero del 1 al 12").toLocaleUpperCase().trim()
numMes = parseInt(numMes);
switch (numMes) {
case 1:
console.log("Enero"); 
break;
case 2:
console.log("Febrero");
break;
case 3:
console.log("Marzo");
break;
case 4:
console.log("Abril");
break;
case 5:
console.log("Mayo");
break;
case 6:
console.log("Junio");
break;
case 7:
console.log("Julio");
break;
case 8:
console.log("Agosto");
break;
case 9:
console.log("Septiembre");
break;
case 10:
console.log("Octubre");
break;
case 11:
console.log("Noviembre");
break;
case 12:
console.log("Diciembre");
break;
default:
console.log("Número no válido. Ingresa un número del 1 al 12.");
break;
}

// Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.

let diaSem = prompt("Ingrese un numero del 1 al 7").toLocaleUpperCase().trim()
diaSem = parseInt(diaSem);
switch (diaSem) {
case 1:
console.log("Lunes"); 
break;
case 2:
console.log("Martes");
break;
case 3:
console.log("Miércoles");
break;
case 4:
console.log("Jueves");
break;
case 5:
console.log("Viernes");
break;
case 6:
console.log("Sábado");
break;
case 7:
console.log("Domingo");
break;
default:
console.log("Número no válido. Ingresa un número del 1 al 7.");
break;
}

// Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
const tipoLetra = ()  => {
    let letraVC = prompt("Ingrese una letra");
    if (letraVC == "A"  || letraVC == "E" || letraVC == "I" || letraVC == "O" || letraVC == "U") {
      console.log(letraVC + " ,es una vocal");
    }
    else {
      console.log(letraVC + " ,es una consonante");
    }
  }
  tipoLetra();

// Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana correspondiente a esa posición en un arreglo.

const diaSemana = () => {
const diaPoc = parseInt(prompt("Ingrese un numero del 1 al 5"));
const diaSem = ["", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes",]
switch (diaPoc) {        
case 0:
console.log(diaSem[0])
break;
case 1:
console.log(diaSem[1])
break;
case 2:
console.log(diaSem[2])
break;
case 3:
console.log(diaSem[3])
break;
case 4:
console.log(diaSem[4])
break;
case 5:
console.log(diaSem[5])
break;
default:
  console.log("Número no válido. Ingrese un número del 1 al 5.");
  break;
    }
  }
  diaSemana();


// Crea un programa que reciba una letra y muestre si es mayúscula o minúscula.
const maMin = ()  => {
    let letraTip = prompt("Ingrese una letra");
    if (letraTip === letraTip.toUpperCase()) {
      console.log(letraTip + " ,es MAYÚSCULA");
    }
    else {
      console.log(letraTip + " ,es minúscula");
    }
  }
  maMin();

// Crea un programa que reciba una nota del 0 al 10 y muestre la calificación correspondiente (suspenso, aprobado, notable, sobresaliente).

const numCal = () => {
    const nota = parseInt(prompt("Ingrese una calificación del 1 al 10"));
    if (nota === 10) {
      console.log(nota + "  la nota es Sobresaliente")
    }
    else if (nota >= 8 && nota <= 9) {
      console.log(nota + "  la nota es Notable");
    } 
    else if (nota === 6 && nota <= 7) {
      console.log(nota + "  la nota es Aprobado");
    } 
    
    else {
      console.log(nota + "  la nota es Suspenso");
  }
  }
  numCal();

// Imprimir los números pares del 2 al 20 en la consola.

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }
  
// Recorrer un string y mostrar en la consola cada letra en mayúsculas.

const texto = "Bautista";
for (let i = 0; i < texto.length; i++) {
  const letraMayuscula = texto[i].toUpperCase();
console.log(letraMayuscula);
}

// Pedir al usuario que ingrese un número y mostrar en la consola los números del 1 al número ingresado.

const number = () => {
    const numberUsuario = parseInt(prompt("Ingrese un numero a eleccion"));
    for (let i = 1; i <= numberUsuario; i += 1) {
        console.log(i);
      }
    }
    number();


    // Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más grande de la serie.

    const seriNum = () => {
    const numero = prompt("Ingrese una serie de números separados por coma");
    const numIngresados = numero.split(",");
    let numMaximo = Math.max(...numIngresados);
    console.log(" El numero mas grande es " + numMaximo);  
    }
    seriNum();
    
// Pedir al usuario que ingrese una palabra y mostrar en la consola si la palabra es un palíndromo o no.

const palindromo = () => {
    const palab1 = prompt("Ingrese una palabra");
    const palab2 = palab1.split('').reverse().join('');
if (palab1 === palab2) {
      console.log(palab1 + " es un palíndromo");
    } 
    else  {
      console.log(palab1 + " no es un palíndromo");
    }
  }
  palindromo();



// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la suma de los números pares.

const numPares = () => {
const User = prompt("Ingrese una serie de números separados por coma");
const numero = User.split(',');
let suma = 0
for(let i = 0; i <= numero.length; i++){
if(numero[i] % 2 == 0){
suma += parseInt(numero[i])
 }
}
console.log(suma)
}
numPares();

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números negativos.

const numNeg = () => {
    const numberMen = prompt("Ingrese una serie de números separados por coma");
    const numero = numberMen.split(",");
    for(let i = 0; i <= numero.length; i++){
    if (parseInt(numero[i]) < 0) {
    console.log(" Numero negativo ingresado" + numero[i])
    }
}
}
    numNeg();

// Pedir al usuario que ingrese un número y mostrar en la consola todos los números impares desde el 1 hasta el número ingresado.

const number1 = () => {
    const numUs = parseInt(prompt("Ingrese un numero a eleccion"));
    for (let i = 1; i <= numUs; i += 2) {
        console.log(i);
      }
    }
    number1();

// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola el número más pequeño de la serie.

const serNum = () => {
    const numero = prompt("Ingrese una serie de números separados por coma");
    const numIngress = numero.split(",");
    let numMin = Math.min(...numIngress);
    console.log(" El numero mas pequeño es " + numMin);  
    }
    serNum();

// Pedir al usuario que adivine un número generado aleatoriamente entre 1 y 100. Mostrar en la consola si el usuario adivinó o no el número y la cantidad de intentos que le tomó.
  


// Pedir al usuario que ingrese una serie de números separados por coma y mostrar en la consola la cantidad de números pares.


const entradaUsuario = prompt('Ingresa una serie de números separados por coma:');
const numeros = entradaUsuario.split(',').map(numero => parseInt(numero.trim()));
const numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log(`Cantidad de números pares: ${numerosPares.length}`);


// Dado un array de números, escribir una función que retorne el número más grande del array.

const numG = () => {
  let numeros = [1,5,6,9,10,45,85,54,102,67];
  let numMayor = numeros[0];
  for (let i = 1; i < numeros.length; i++){
      if (numeros[i] > numMayor)
          numMayor = numeros[i];
  }
  console.log(numMayor);
}
numG ();

// Dado un array de números, escribir una función que retorne un nuevo array con los números pares del array original.

const numPARES = () => {
  let numeros = [5,6,4,8,9,2,1,45,26,88,32,242];
  let cifPar = [];
  for (let i = 0; i < numeros.length; i++){
      if (numeros[i] % 2 == 0)
          cifPar.push(numeros[i]);
  }
  console.log(cifPar);
}
numPARES();


// Dado un array de números, escribir una función que retorne la suma de todos los números del array.

const numSum = () => {
  let numer = [5,6,4,8,9,2,1,45,26,88,32,242];
  let sumaN = 0
  for(let i = 0; i <= numer.length; i++){
  if(numer[i]){
  sumaN += parseInt(numer[i])
   }
  }
  console.log(sumaN)
  }
  numSum();

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings en mayúsculas.

const palST = () => {
  let ingPalabras = ["Bauti","Lore","Atletico","Tucuman","Dolar","Argentina"];
  let paMay = [];
  for (let i = 0; i < ingPalabras.length; i++){
      paMay [i] = ingPalabras [i].toUpperCase();
  }
  console.log(paMay);
}
palST ();


// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X.

const numMayX = () => {
  let numS = [5,6,4,8,9,2,1,45,26,88,325,242];
  let numX = 100
const resultadoX = numS.filter(numS => numS > numX);
console.log(resultadoX);
}
numMayX();

// Dado un array de números, escribir una función que retorne la suma de todos los números del array. Además, si algún número es mayor que 10, agregarlo a un nuevo array de "números grandes".

const numMM = () => {
  let numM1 = [5,6,4,8,9,2,1,45,26,88,325,242];
  let numerosGrandes = [];
  let suma = 0;
  for (let i = 0; i < numM1.length; i++) {
    if (numM1[i] > 10)
    numerosGrandes.push(numM1[i])
      suma += numM1[i];
      }

      console.log(`La suma total es: ${suma}`);
      console.log(`Números grandes: ${numerosGrandes}`);
  }
numMM ();

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres.

const palLar = () => {
  let palV = ["Bauti","Lore","Atletico","Tucuman","Dolar","Argentina"];
  let masdeCinco = [];
  for (let i = 0; i < palV.length; i++){
      if (palV[i].length > 5)
      masdeCinco.push(palV[i]);
  }
  console.log(masdeCinco);
}
palLar();

// Dado un array de strings, escribir una función que retorne un nuevo array con todos los strings que tengan más de 5 caracteres y que empiecen con la letra "a".

const large = () => {
  let palTX = ["Bauti","Lore","Atletico","Tucuman","Dolar","Argentina"];
  let palarge = [];
  for (let i = 0; i < palTX.length; i++){
      if (palTX[i].length > 5 && palTX[i][0].toLowerCase() == "a")
          palarge.push(palTX[i]);
  }
  console.log(palarge);
}
large();

// Dado un array de números y un número X, escribir una función que retorne un nuevo array con todos los números del array original que sean mayores que X. Además, cortar el array resultante para que tenga solamente los primeros 3 números.

const numMC = () => {
  let numM1 = [5,6,4,8,9,2,1,45,26,88,325,242];
  let numeroMMM = [];
  let numberX = 20;

  for (let i = 0; i < numM1.length; i++){
      if (numM1[i] > numberX)
      numeroMMM.push(numM1[i]);
  }
  numeroMMM = numeroMMM.slice(0,3);
  console.log(numeroMMM);
}
numMC();

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original, pero sumándoles 1.

const post = () => {
  let numeros = [5,6,4,8,9,2,1,45,26,88,325,242];
  let numPost = [];
  for (let i = 0; i < numeros.length; i++){
      numPost.push(numeros[i]+1);
  }
  console.log(numPost);
}
post ();


// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el último.

const ant = () => {
  let numeros = [5,6,4,8,9,2,1,45,26,88,325,242];
  let numAnt = [];
  for (let i = 0; i < numeros.length-1; i++){
      numAnt.push(numeros[i]);
  }
  console.log(numAnt);
}
ant(); 

// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el primero y el último.

const numXX = () => {
  let numSXX = [5,6,4,8,9,2,1,45,26,88,325,242];
  let numAP = [];
  for (let i = 1; i < numSXX.length-1; i++){
      numAP.push(numSXX[i]);
  }
  console.log(numAP);
}
numXX ();


// Dado un array de números, escribir una función que retorne un nuevo array con todos los números del array original menos el número que se encuentre en la posición X.

const numI = () => {
  let nS = [5,6,4,8,9,2,1,45,26,88,325,242];
  let X = 30;
  let numXnS = nS;
  numXnS.splice(X,1);
  console.log(numXnS);
}
numI ();






