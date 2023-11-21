//Tercera clase rolling - 13 noviembre 2023

//1-Objeto MATH

//valor absoluto: si un numero es negativo lo pasa a positivo
let absoluto = -6.3;
let valorAbsoluto = Math.abs(absoluto)
console.log(valorAbsoluto);

//2-Maximo y minimo
let numerosArreglo = [23, 47, 89, 32, 100, 128];
let numMaximo = Math.max(...numerosArreglo);
console.log(numMaximo);

let numMinimo = Math.min(...numerosArreglo);
console.log(numMinimo)

//3-Redondear un numero
let redondeo = 3.2;

let resultadoRedondeo = Math.round(redondeo);
console.log(resultadoRedondeo);

//4-Floor, devuelve el entero mas pequeño.
let floor = 4.879;
let resultadoFloor = Math.floor(floor);
console.log(resultadoFloor);

//5-ceil: devuelve el entero mayor o igual más próximo a un número dado.
let ceil = 5.1;
let resultadoCeil = Math.ceil(ceil);
console.log("ceil--->", resultadoCeil);

//ultimo
const esMayor = (num1, num2) => {
    if (num1 > num2) {
      console.log(num1, "es Mayor");
    } else if (num1 === num2){
      console.log("Son iguales")
    } else {
      console.log(num2, "Es mayor");
    }
  };
  
  esMayor(5, 5); //pasando los numeros por parametro

