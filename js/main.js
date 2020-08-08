console.log("Hello my banking app");
// DECLARACIÓN DE VARIABLES
let nombreUsuario = "John Flórez";
let saldoEnCuenta = 5000;
let limiteExtraccion = 500;
    alert("Bienvenido/a " + nombreUsuario + " a tu Home Banking");
    cargarNombreEnPantalla();
    actualizarSaldoExtraccion(limiteExtraccion);
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
//Función para poder cargar el nombre en pantalla
function cargarNombreEnPantalla() {
  document.getElementById("nombre").innerHTML = "Hello " + nombreUsuario;
}

//actualizar saldo en pantalla
function actualizarSaldoEnPantalla() {
  document.getElementById("saldo-cuenta").innerHTML = "$ " + saldoEnCuenta;
}

function pagarServicios() {
  let agua = 500;
  let telefono = 425;
  let luz = 215;
  let internet = 100;

  let misServicios = ["Agua", "Telefono", "Luz", "Internet"];

  let servicio = prompt(`Ingrese el número que corresponda al servicio a pagar 
  1. Agua - Valor ${agua}
  2. Telefono - Valor ${telefono} 
  3. Luz - Valor ${luz}
  4. Internet - Valor ${internet}
  `);

  switch (servicio) {
    case "1":
      depositarServicio(agua, misServicios[0]);
      break;
    case "2":
      depositarServicio(telefono, misServicios[1]);
      break;
    case "3":
      depositarServicio(luz, misServicios[2]);
      break;
    case "4":
      depositarServicio(internet, misServicios[3]);
      break;
    default:
      alert("No hay opción valida");
      break;
  }
}

function depositarServicio(tipoDeServicio, nombreServicio) {
  saldoEnCuenta -= tipoDeServicio;
  actualizarSaldoEnPantalla();
  alert(
    `Has pagado ${tipoDeServicio} del servicio ${nombreServicio} y tu nuevo saldo es ${saldoEnCuenta}`
  );
}

//evento para pagar servicios
//listener sobre el elemento,
function extraerDinero() {
  let dineroAExtraer = parseInt(prompt("Digite el Valor a extraer"), 0);
if ((dineroAExtraer%100)==0){
  if (dineroAExtraer > saldoEnCuenta) {
    alert("Error, su saldo es insuficiente");
  } else if (dineroAExtraer > limiteExtraccion) {
    alert("No puede exceder el limite de extraccion");
  } else if (dineroAExtraer < saldoEnCuenta) {
    saldoEnCuenta = saldoEnCuenta - dineroAExtraer;
    alert("su saldo se actualizo");
    actualizarSaldoEnPantalla();
  } else {
    alert("Error,Digite un valor correcto");
  }
}else{
  alert("Solo puede extraer dinero multiplos de 100");
}
}

function depositarDinero() {
  var cantidad = parseInt(prompt("ingrese la cantidad a depositar"), 0);

  if (isNaN(cantidad)) {
    return alert("Ingrese numeritooos no retiramos letras");
  } else if (cantidad <= 0) {
    return alert("Ups! si hago esto te robo platica");
  }
  //saldoEnCuenta = saldoEnCuenta + cantidad
  saldoEnCuenta += cantidad;
  actualizarSaldoEnPantalla();
  alert("Su nuevo saldo es: " + saldoEnCuenta);
}

function cambiarLimiteDeExtraccion() {
  var nuevoLimite = parseInt(prompt("Ingrese su nuevo límite de extraccion"), 0);
  if(nuevoLimite%100==0){
    if(nuevoLimite<saldoEnCuenta){
      limiteExtraccion = nuevoLimite;
      actualizarSaldoExtraccion(limiteExtraccion);
      actualizarLimiteEnPantalla();
      alert(
        "Pum pum!! Se ha actualizado tu límite de extracción, nuevo valor " +
          limiteExtraccion
      );
    }
    else {
      alert("El limite de extracción no puede ser mayor que el saldo en cuenta")
    }
  }
  else {
    alert ("El limite de extracción debe ser multiplo de 100.")
  }
}

function transferirDinero(){
  let dineroTransferir = parseInt(prompt("Digite el Valor a transferir"), 0);
  let numeroCuenta = parseInt(prompt("Digite el numero de cuenta al que le va tranferir"), 0);
  if (dineroTransferir < saldoEnCuenta){
    saldoEnCuenta -= dineroTransferir;
    alert ("Se ha transferido $" + dineroTransferir + " a este numero de cuenta " + numeroCuenta);
    actualizarSaldoEnPantalla();
  }
  else {
    alert("Su saldo no es suficienta para hacer la tranferencia");
  }
}

function actualizarSaldoExtraccion(limite) {
  document.getElementById("valor").innerHTML = "$ " + limite;
}