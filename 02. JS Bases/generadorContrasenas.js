
function checkLongitud(longitud) {
  if (!longitud){
    return "debe ingresar la longitud"
    }
     if(typeof longitud!=="string"){
    return "La longitud recibida no es válida"
    }
    if(longitud < 3){
      return "La longitud debe ser mayor o igual a 3"
    }
    if(longitud > 10){
      return "La longitud debe ser menor o igual a 10"
    }
    else return longitud
  }


function generarContrasena(longitud, incluirEspeciales, incluirNumeros, incluirMayusculas ) {
  
  var letras = "abcdefghijklmnopqrstuvwxyz";

  var numeros = "0123456789";

  var especiales = "!#$%&'()*+,-./:;{|}~";

  var letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  var caracteresDisponibles = letras;



  if (incluirEspeciales) {
    caracteresDisponibles= caracteresDisponibles + especiales
  }

  if (incluirNumeros) {
    caracteresDisponibles= caracteresDisponibles + numeros
  }

 if (incluirMayusculas) {
  caracteresDisponibles= caracteresDisponibles + letrasMayusculas
  }

 var contrasena = "";

  for(let i=0; i< longitud; i++)
    {
      var aleatorio= Math.random() * caracteresDisponibles.length
      var entero= Math.floor(aleatorio)
      var posicion=caracteresDisponibles.charAt(entero)
      contrasena= contrasena + posicion
  }
  return "Contraseña generada: " + contrasena;
}


// <------- NO TOCAR -------->
module.exports = {
  checkLongitud,
  generarContrasena,
};
