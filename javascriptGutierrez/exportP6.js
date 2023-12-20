export let agenda = []

let agendaJson = fetch(`../json/agenda.json`)
.then((resp=>{
    resp.json().then((data=>{
    localStorage.setItem("Contactos", JSON.stringify(data))
    }))
}))
.catch(console.warn)

agenda = JSON.parse(localStorage.getItem("Contactos"))
localStorage.clear()
console.log(agenda)

