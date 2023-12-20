function iniciarSesion() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  console.log(username, password);

  fetch("../api/fakeApi.json")
    .then((response) => response.json())
    .then((users) => {
      console.log(users);
      const userLogueado = users.find(
        (user) => user.username === username && user.password === password
      );

      if (userLogueado) {
        localStorage.setItem("usuario", userLogueado.username);
        Swal.fire({
          title: "Usuario logueado!",
          text: "Bienvenido " + userLogueado.username,
          icon: "success",
        });

        setTimeout(function () {
          window.location.href = "../dashbord.html";
        }, 2000);
      } else {
        Swal.fire({
          title: "Usuario o pass incorrecto!",
          text: "Revisa bien salame",
          icon: "error",
        });
        console.log("usuario o pass incorrecto");
      }
    })
    .catch((error) => console.log(error));
}

const obtenerUsuarioLogueado = () => {
  const usuario = localStorage.getItem("usuario");
  if (usuario) {
    document.getElementById("spanUser").innerHTML = usuario;
  } else {
    return null;
  }
};

const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    window.location.href = "./javascript/login.html";
}


document.addEventListener("DOMContentLoaded", function () {
  obtenerUsuarioLogueado();
});
