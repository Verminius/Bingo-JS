const table = document.querySelector("#tblBingo");
const letter = document.querySelectorAll(".letter-bingo");

const winningPositions = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
];

let arr = Array.apply(null, { length: 100 }).map(Number.call, Number);

arr.shift();
shuffle(arr);
function shuffle(arr) {
  let currentIndex = arr.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
}

let iterator = 0;

for (i = 0; i < 5; i++) {
  let tr = document.createElement("tr");
  table.appendChild(tr);

  for (j = 0; j < 5; j++) {
    let td = document.createElement("td");
    td.id = arr[iterator].toString();
    td.style.height = "20%";
    td.style.width = "20%";
    td.classList.add("main-table-cell");

    let div = document.createElement("div");
    div.classList.add("cell-format");
    div.textContent = arr[iterator].toString();
    td.appendChild(div);
    tr.appendChild(td);
    iterator++;
  }
}

const cell = document.querySelectorAll(".main-table-cell");

let winningIterator = 0;

cell.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.add("strickout");

    if (matchWin()) {
      letter[winningIterator].classList.add("show-bingo");

      let btnBack = document.querySelector(".btn");
      let visibleBg = document.querySelector(".cont-modal");
      let showWin = document.querySelector(".win");
      let tarjeton = document.querySelector(".container");
      let txtCont = document.querySelector(".text-container");

      setTimeout(() => {
        winningIterator++;
        if (winningIterator === 5) {
          visibleBg.style.visibility = "visible";
          showWin.classList.add("show-win");
          btnBack.classList.add("showBtn");
          txtCont.classList.add("show-text");
        }
      }, 300);

      btnBack.addEventListener("click", () => {
        visibleBg.style.visibility = "hidden";
        showWin.classList.remove("show-win");
        btnBack.classList.remove("showBtn");
        txtCont.classList.remove("show-text");

        setTimeout(() => {
          tarjeton.classList.remove("animate__bounceInUp");
          tarjeton.classList.add("animate__bounceOutDown");
        }, 5000);

        setTimeout(() => {
          location.assign("/index.html");
        }, 5500);
      });
    }
  });
});

function matchWin() {
  const cell = document.querySelectorAll(".main-table-cell");

  return winningPositions.some((combination) => {
    let ite = 0;
    combination.forEach((index) => {
      if (cell[index].classList.contains("strickout")) ite++;
    });

    if (ite === 5) {
      let indexWin = winningPositions.indexOf(combination);
      winningPositions.splice(indexWin, 1);
    }

    return combination.every((index) => {
      return cell[index].classList.contains("strickout");
    });
  });
}

console.log(arr);
