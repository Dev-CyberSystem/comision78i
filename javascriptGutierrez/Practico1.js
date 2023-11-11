function probandoNumeros() 
{
let numero1 = 10
const numero2 = 16

console.log("Tipo de variable de numero1"+ typeof numero1)

console.log("La suma entre", numero1, "y", numero2, "es", numero1+numero2)
console.log("Otra forma de mostrar la suma:")
console.log("La suma entre " + numero1 + " y " + numero2 + " es: " + (numero1+numero2)) //Aqui lo toma puramente como string (creo) porque no aparece con color las variables declaradas
console.log("Sin usar variable:")
console.log("La suma entre 10 y 16 es: " + (10+16))

numero1++;
console.log("Aumento numero1 en una unidad y hago la suma con numero2:")
console.log(numero1+numero2)

console.log("Comparo variable con string con doble igualdad", numero1 == "10")
console.log("Comparo variable con string con triple igualdad", numero1 === "10")

}

probandoNumeros()

function probandoPuroString()
{
let miNombre = "Martina"    
let frase = "Tengo hambre"
console.log("Hola soy " + miNombre)
console.log(frase)
console.log(typeof frase)
}

probandoPuroString()

let arreglo = ["Martinal", "del", "Pilar", "Gutierrez"]
console.log(arreglo)