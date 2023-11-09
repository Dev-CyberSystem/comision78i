//Realiza una operación matemática simple y almacena el resultado en una variable. Luego, muestra el resultado en la consola.
    const multiplicar =() => {
        const number1 = 12
        const number2 = 6
        const resultado = number1 * number2
        console.log(resultado)
    }
    multiplicar()

//Crea dos variables con valores numéricos diferentes y compáralas usando el operador de igualdad (==). Muestra el resultado en la consola.
    const números =() => {
        const num1 = 10
        const num2= 34
        const comparar = num1 == num2
        console.log(comparar)
    }
    números()

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
   function AND() {
     let verdadero = true
     let falso = false 
     let comparar = verdadero && falso
     console.log("la comparación es " + comparar)
   }
   AND()

//Crea dos variables con valores booleanos diferentes y utiliza el operador lógico OR (||) para compararlas. Muestra el resultado en la consola.
    const OR =() => {
        const valor1 = false
        const valor2 = true
        const comparar = valor1 || valor2
        console.log("la comparación es " + comparar)
    } 
    OR()

