let numerocedula = 123456;
let claveCorrecta = 1234;

function iniciarSesion() {
    let numero = document.getElementById("num_cedula").value;
    let clave = document.getElementById("contraseña").value;
   if (clave == claveCorrecta && numero==numerocedula) {
        window.location.href="cuenta.html";
    } else {
      alert("Clave incorrecta. le quitamos toda su platica :(");
    }
  }