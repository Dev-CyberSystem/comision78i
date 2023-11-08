//operadores de comparación (booleano)
// 20 es mayor o igual a 10
20 >= 10 // true
// 2 es menor que 3
2 < 3 // true
// 7 es mayor que 10
7 > 10 // false
// 10 es igual a 10 
10 === 10 // true (mismo datos en valor y tipo de datos)
// 5 es igual a cinco (en valor solamente)
5 == 5 // true (mismo valor)
5 == cinco // false (busca el numero y no la letra)
6 !== 10 // true
8 !== '8' // true (mismo valor pero distinto tipo de dato)
true && true && false // false (en AND para ser true todos los valores deben ser true)
!true // false (invierte el valor)
false || false || true // true (en OR basta con que un valor sea true para que te devuelva true)
let texto = "estoy aprendiendo javascript"
let resultado = 20 + 30
let numero = 5
// ejercicio realizado en la consola
let number = 4
let number2 = 4
number + number2 
let respuestas = 8
// funciones
function suma() {
    let numero = 10
    let otroNumero = 20
    let suma = numero + otroNumero
    document.write ("la suma es " + suma)  
}
suma ()
function multiplicar() {
    let num1 = 10
    let num2 = 5 
    let multiplicar = num1 * num2
    document.write (" la multiplicacion es " + multiplicar)    
}
multiplicar()
function concatenar() {
    let name = "hola"
    let name2 = " que tal"
    let concatenar = name + name2
    document.write(" la concatenacion es " + concatenar)
}
concatenar()
