let body = document.body
let header = document.createElement('header')
let main = document.createElement('main')
let footer = document.createElement('footer')


function estructuraHtml(){
    //header
    body.appendChild(header)
    let h1 = document.createElement('h1')
    header.appendChild(h1)
    h1.innerText = 'Primer Tarea en Javascript'
    h1.style.textAlign = 'center'
    
    //main
    body.appendChild(main)
    let contador = 5
    for (let index = 0; index < contador; index++) {
        let num = document.createElement('p')
        num.innerHTML = `${index + 1}`
        main.appendChild(num)
        num.classList.add('parrafo')
        num.style.backgroundColor = '#000'
        num.style.borderRadius = '50%'
        num.style.color = '#fff'
        num.style.display = 'inline-block'
        num.style.padding = '10px'
        num.style.margin = '10px'
        num.style.transition = 'all .5s ease'
        num.style.cursor = 'default'
    }
    //footer
    body.appendChild(footer)
    let copy = document.createElement('p')
    footer.appendChild(copy)
    copy.innerHTML = 'RollingCode School &copy; 2023 - Matias Saade - Comisión 78i'
    copy.style.textAlign = 'center'
    copy.style.backgroundColor = '#000'
    copy.style.color = '#fff'
}

function cambiaColor(e){
    {
        if(e.type==='mouseover'){
            e.currentTarget.style.backgroundColor = '#fd4'
            e.currentTarget.style.color = '#000'
            e.currentTarget.innerHTML = 'Pasaste por acá'
        } 

    }

}
function hoverStyle(){
    let parrafo = document.getElementsByClassName('parrafo');

    for(i = 0; i < parrafo.length; i++){
        parrafo[i].addEventListener('mouseover', cambiaColor)
    }
}
estructuraHtml()
hoverStyle()