// transición a tarjetón

let logo = document.querySelector(".logo");
let start = document.getElementById("start");
let contBtn = document.querySelector(".cont-btn");
let seguros = document.querySelector(".seguros");
let vigilado = document.querySelector(".vigilado");
let intelectual = document.querySelector(".intelectual");

start.addEventListener("click", () => {
  logo.classList.remove("animete__bounceIn");
  logo.classList.add("animate__bounceOut");
  contBtn.classList.remove("animate__bounceIn");
  contBtn.classList.add("animate__bounceOut");

  seguros.classList.add("vanish");
  vigilado.classList.add("vanish");
  intelectual.classList.add("vanish");

  setTimeout(() => {
    location.assign("/tarjeton.html");
  }, 1000);
});

//Instrucciones

//variables globales
let instBg = document.querySelector(".cont-inst");
let modal = document.querySelector(".inst-modal");
let instBtn = document.getElementById("instBtn");
let img = document.querySelector(".modal-image");
let txt = document.querySelector(".modal-input");
let lBtn = document.querySelector(".left");
let rBtn = document.querySelector(".right");
let pasos;

//Mostrar-Ocultar Instrucciones

instBtn.addEventListener("click", () => {
  instBg.classList.add("show-cont-inst");

  setTimeout(() => {
    modal.classList.add("show-inst-modal");
    img.innerHTML = '<img src="/img/logoBingo.png"/>';
    txt.innerHTML =
      "<p>Bienvenido al Bingo Seguro. <br> Al iniciar el juego recibirás un tarjetón.</p>";
  }, 300);
});

//Navegar por las instrucciones
pasos = 1;

//boton derecho
rBtn.addEventListener("click", () => {
  pasos++;
  console.log(pasos);

  switch (pasos) {
    case 1:
      img.innerHTML = '<img src="/img/logoBingo.png"/>';
      txt.innerHTML =
        "<p>Bienvenido al Bingo Seguro. <br> Al iniciar el juego recibirás un tarjetón.</p>";
      lBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      rBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
      break;

    case 2:
      img.innerHTML = '<img src="/img/logoBingo.png"/>';
      txt.innerHTML = "<p>En cada ronda un número diferente se sorteará.</p>";
      lBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
      rBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
      break;

    case 3:
      img.innerHTML = '<img src="/img/logoBingo.png"/>';
      txt.innerHTML =
        "<p>El objetivo del juego es marcar los números dando click en ellos según se vayan dictando.</p>";
      lBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
      rBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
      break;

    case 4:
      img.innerHTML = '<img src="/img/logoBingo.png"/>';
      txt.innerHTML =
        "<p>Debes completar la palabra BINGO en la parte inferior del tablero de juego.</p>";
      lBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
      rBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
      break;

    case 5:
      img.innerHTML = '<img src="/img/logoBingo.png"/>';
      txt.innerHTML =
        "<p>Desbloquearás una nueva letra con cada fila o columna que completes, si completas 5 líneas, habrás, habrás conseguido la palabra BINGO y ganarás el juego.</p>";
      lBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
      rBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
      break;

    default:
      if (pasos > 5) {
        modal.classList.remove("show-inst-modal");
        setTimeout(() => {
          instBg.classList.remove("show-cont-inst");
          rBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
        }, 300);
        return (pasos = 1);
      }
  }
});

//boton izquierdo
lBtn.addEventListener("click", () => {
  pasos--;
  console.log(pasos);

  switch (pasos) {
    case 1:
      img.innerHTML = '<img src="/img/logoBingo.png"/>';
      txt.innerHTML =
        "<p>Bienvenido al Bingo Seguro. <br> Al iniciar el juego recibirás un tarjetón.</p>";
      lBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      rBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
      break;

    case 2:
      img.innerHTML = '<img src="/img/logoBingo.png"/>';
      txt.innerHTML = "<p>En cada ronda un número diferente se sorteará.</p>";
      lBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
      rBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
      break;

    case 3:
      img.innerHTML = '<img src="/img/logoBingo.png"/>';
      txt.innerHTML =
        "<p>El objetivo del juego es marcar los números dando click en ellos según se vayan dictando.</p>";
      lBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
      rBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
      break;

    case 4:
      img.innerHTML = '<img src="/img/logoBingo.png"/>';
      txt.innerHTML =
        "<p>Debes completar la palabra BINGO en la parte inferior del tablero de juego.</p>";
      lBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
      rBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
      break;

    case 5:
      img.innerHTML = '<img src="/img/logoBingo.png"/>';
      txt.innerHTML =
        "<p>Desbloquearás una nueva letra con cada fila o columna que completes, si completas 5 líneas, habrás, habrás conseguido la palabra BINGO y ganarás el juego.</p>";
      lBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
      rBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
      break;

    default:
      if (pasos < 1) {
        modal.classList.remove("show-inst-modal");
        setTimeout(() => {
          instBg.classList.remove("show-cont-inst");
          lBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        }, 300);
        return (pasos = 1);
      }
  }
});
