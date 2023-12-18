async function obtenerUsuarios() {
  try {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let usuarios = await respuesta.json();
    let users = JSON.stringify(usuarios)
    console.log(usuarios)
    const li = document.createElement("li");
    li.textContent = users
    resultado.appendChild(li);
  } catch (error) {
    console.log(error, "entre en el error");
  }
}
