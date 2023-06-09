// Inputs
let inputMinimo = document.getElementById("inputMinimo");
let inputMaximo = document.getElementById("inputMaximo");
let inputTotal = document.getElementById("inputTotal");
let btn = document.getElementById("btn");
btn.addEventListener("click", validar);

let finBtn = document.querySelector(".btn");

// variables globales
let minimo;
let maximo;

let coleccion = [];
let tamañoColeccion;
let numAle;
let proceder = true;

// Validaciones y errores
let mensajeError = document.getElementById("mensajeError");
let parrafoError = document.getElementById("parrafoError");

function validar() {
  minimo = 1;
  maximo = 99;

  if (minimo == maximo || minimo > maximo || minimo < 0 || maximo < 0) {
    inputMaximo.value = "";
    inputMinimo.value = "";
    inputTotal.value = "";

    parrafoError.innerHTML = "Por favor ingresa valores correctos";
    mensajeError.classList.add("mensajeErrorActivar");
  } else {
    mensajeError.classList.remove("mensajeErrorActivar");

    ejecutar();
  }
}

// Ejecucion
function ejecutar() {
  proceder = true;

  tamañoColeccion = coleccion.length;

  numAle = aleatorio(minimo, maximo);
  coleccion.push(numAle);
  filtrar();

  console.log(coleccion);

  while (tamañoColeccion == coleccion.length) {
    numAle = aleatorio(minimo, maximo);
    coleccion.push(numAle);
    filtrar();

    if (tamañoColeccion < coleccion.length) {
      break;
    } else if (coleccion.length == maximo - minimo + 1) {
      parrafoError.innerHTML = "Completaste todos los números";
      mensajeError.classList.add("mensajeErrorActivar");
      break;
    } else if (coleccion.length > maximo - minimo + 1) {
      coleccion.length = 0;
      tamañoColeccion = 0;
      proceder = false;
    }

    if (tamañoColeccion == coleccion.length) {
      console.log("continue");
      continue;
    }
  }

  if (proceder == true) {
    inputTotal.value = coleccion[coleccion.length - 1];
  }

  //mostrar balotas
  let numContainer = document.querySelector(".num-container");

  let html = "";

  coleccion.forEach((e) => {
    html += `
      <div id='showNum'> ${e} </div> 
    `;
  });

  numContainer.innerHTML = html;
}

// Generar numero aleatorio
function aleatorio(min, max) {
  let resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

// Eliminar numero repetidos
function filtrar() {
  coleccion = coleccion.filter((item, index) => {
    return coleccion.indexOf(item) === index;
  });
}

inputMinimo.addEventListener("keyup", reiniciaInput);
inputMaximo.addEventListener("keyup", reiniciaInput);

function reiniciaInput() {
  coleccion.length = 0;
  tamañoColeccion = 0;
  inputTotal.value = "";
}

//Cerrar modal

finBtn.addEventListener("click", () => {
  mensajeError.classList.remove("mensajeErrorActivar");

  let balota = document.querySelector(".container");
  let balotas = document.querySelector(".num-container");

  setTimeout(() => {
    balota.classList.remove("animate__bounceInDown");
    balota.classList.add("animate__bounceOutUp");
    balotas.classList.remove("animate__bounceInUp");
    balotas.classList.add("animate__bounceOutDown");
  }, 200);

  let body = document.querySelector(".body");

  setTimeout(() => {
    body.classList.add("changeColor");
  }, 400);

  setTimeout(() => {
    location.assign("/index.html");
  }, 1500);
});
