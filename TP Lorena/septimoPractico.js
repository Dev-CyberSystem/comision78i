
async function obtenerUsuarios() {
   try {
      let respuesta = await fetch("https://jsonplaceholder.typicode.com/users/1");
      let usuarios = await respuesta.json();
      const resultado = document.getElementById("resultado");
      
      for (const datosUsuario in usuarios) {
        if (usuarios.hasOwnProperty(datosUsuario)) {
          const li = document.createElement("li");
          li.textContent = `${datosUsuario}: ${usuarios[datosUsuario]}`;
          resultado.appendChild(li);
        }
      }
      console.log(usuarios);
    } catch (error) {
     console.log(error, "entre en el error");
   }
  }
 obtenerUsuarios()
  
  
console.log("Fin");


