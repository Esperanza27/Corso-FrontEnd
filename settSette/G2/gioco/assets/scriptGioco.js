let points = 0;
let play = 1;
let livelloScelto = "easy";
let liveli ={
    "easy":20,
    "medium":40,
    "hard":60,
}
/* let sound = new Audio("bom.wav"); */

const levelSelector = document.getElementById("level");

levelSelector.onchange= ()=>{
    livelloScelto = levelSelector.value;
    clearGrid()
    createBombs();
}

function createGrid() {
  const box = document.getElementById("mainDiv");
  for (let i = 1; i <= 100; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("onclick", "step(this)");
    box.appendChild(square);
  }
  createBombs();
}

function createBombs() {
  let squares = document.querySelectorAll(".square");
  squares.forEach(element => {element.classList.remove("bomb")});
  for (let i = 0; i <= liveli[livelloScelto]; i++) {
    let casual = Math.floor(Math.random() * 100 /* 100 --> squares.length */);
    squares[casual].classList.add("bomb");
  }
}

function step(e) {
  if (!e.classList.contains("bomb") && play == 1) {
    e.classList.add("good");
    points++;
    document.getElementById("points").innerText = points;
  } else if (e.classList.contains("bomb") && play == 1) {
    e.classList.add("exploded");
    /*  sound.play(); */
    play = 0;
    document.getElementById("gameover").style.opacity = "1";
  }
}
function clearGrid() {
    const box= document.getElementById("mainDiv").innerHTML="";
    play = 1;
    points = 0;
    document.getElementById("points").innerText = "";
    document.getElementById("gameover").style.opacity = "0";
    createGrid()
}
createGrid();
