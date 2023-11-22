//Tarea 04 - 15 noviembre

// 1) Crea un programa que reciba un número del 1 al 12 y muestre el nombre del mes correspondiente.
function mesActual(mes){
    switch (mes){
        case 1:
            console.log('Enero')
            break;
        case 2:
            console.log('Febrero')
            break;
        case 3:
            console.log('Marzo')
            break;
        case 4:
            console.log('Abril')
            break;
        case 5:
            console.log('Mayo')
            break;
        case 6:
            console.log('Junio')
            break;
        case 7:
            console.log('Julio')
            break;
        case 8:
            console.log('Agosto')
            break;
        case 9:
            console.log('Septiembre')
            break;
        case 10:
            console.log('Octubre')
            break;
        case 11:
            console.log('Noviembre')
            break;
        case 12:
            console.log('Diciembre')
            break;
        default:
            console.log('No ingresaste un caracter valido, ingresa nuevamente')
            break;
    }
}
mesActual(11);

// 2) Crea un programa que reciba un número del 1 al 7 y muestre el día de la semana correspondiente.
function diaSemana(dia){
    switch (dia){
        case 1:
            console.log('Lunes')
            break;
        case 2:
            console.log('Martes')
            break;
        case 3:
            console.log('Miercoles')
            break;
        case 4:
            console.log('Jueves')
            break;
        case 5:
            console.log('Viernes')
            break;
        case 6:
            console.log('Sabado')
            break;
        case 7:
            console.log('Domingo')
            break;
        default:
            console.log('No ingresaste un caracter valido, ingresa nuevamente')
            break;
    }
}
diaSemana(3);

// 3) Crea un programa que reciba un carácter y muestre si es una vocal o una consonante.
function esVocal(letra){
    if('aeiou'.includes(letra)){
        console.log("Es una vocal");
    }else if('0123456789'.includes(letra)){
        console.log("Es numero");
    }else{
        console.log("Es consonante");
    }
}
esVocal('i');

/*4) Crea un programa que reciba un número del 1 al 5 y muestre el nombre del día de la semana 
correspondiente a esa posición en un arreglo.*/
