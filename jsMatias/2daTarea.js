
let form = document.createElement('form')
let inputName = document.createElement('input')
inputName.classList.add('inputNombre')
inputName.setAttribute('placeholder', 'Ingresa tu Nombre')
main.appendChild(form)
form.appendChild(inputName)

let btnEnviar = document.createElement('button')
btnEnviar.setAttribute('type', 'submit')
btnEnviar.textContent = 'Enviar Nombre'

inputName.insertAdjacentElement("afterend",btnEnviar)

function submit(e){
    e.preventDefault()
    let nombre = inputName.value.trim().toUpperCase()
    let h3 = document.createElement('h3')
    h3.textContent = `${nombre}`
    main.appendChild(h3)
}

function input(){
    
    form.addEventListener('submit', submit)
}
input()
