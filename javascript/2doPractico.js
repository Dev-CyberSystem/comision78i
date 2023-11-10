//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.
    let number1 = 12
    let number2 = 8
    let solución = number1 * number2
    console.log(solución)

//Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.
    let num1 = 10
    let num2= 34
    let comparar = num1 == num2
    console.log(comparar)

//Crea dos variables con valores númericos diferentes y compáralas usando el operador de desigualdad (!=). Muestra el resultado en la consola.
   const desigualdad =() => {
       const valor1 = 100
       const valor2 = 245
       const desigualdad = valor1 != valor2
       console.log(desigualdad)
    }
   desigualdad()

//Crea una variable con un valor numérico y aumenta su valor en 5 utilizando el operador de incremento (++). Muestra el resultado en la consola.
   let num3 = 30
   num3 += 5
   console.log(num3)

//Crea una variable con un valor numérico y disminuye su valor en 3 utilizando el operador de decremento (--). Mustra el resultado en la consola.
   let num4 = 50
   num4 -= 3
   console.log(num4)

//Crea una variable que almacene una cadena de texto y utiliza el operador de concatenación (+) para agregar más texto al final de la cadena. Muestra el resultado en la consola.
   const cadenaDetexto =() => {
     const texto1 = "quiero que llueva"
     const másTexto = ", por que odio el calor"
     const unir = texto1 + másTexto 
     console.log(unir)
   }
   cadenaDetexto()

//Crea dos variables con valores booleanos diferentes y utiliza el operador lógico AND (&&) para compararlas. Muestra el resultado en la consola.
    let verdadero = true
    let falso = false 
    let compararbool = verdadero && falso
    console.log("la comparación es " + comparar)

//Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.
    const OR =() => {
        const valor1 = false
        const valor2 = true
        const comparar = valor1 || valor2
        console.log("la comparación es " + comparar)
    } 
    OR()

//Crea una variable que almacene un valor numérico y utiliza el operador de comparación mayor que (>) para compararlo con otro valor numérico. Muestra el resultado en la consola.
    let num5 = 45
    let num6 = 25
    let resultado = num5 > num6
    console.log(resultado)  

//Crea una variable que almacene un valor numérico y utiliza el operador de comparación menor o igual que (<=) para compararlo con otro valor numérico. Muestra el resultado en la consola.  
    let num7 = 870
    let num8 = 234
    let respuesta = num7 <= num8 
    console.log(respuesta)

//Crea una función que reciba dos parametros y los sume, luego muestra el resultado en la consola.
    const parametros =(a,b) => {
        let suma = 650 + 432
        console.log(suma)
    }
    parametros()

//Crea una función que reciba dos parametros y los reste, luego muestra el resultado en la consola.
    const par =(a,b) => {
        let resta = 768 - 298
        console.log(resta)
    }
    par()

