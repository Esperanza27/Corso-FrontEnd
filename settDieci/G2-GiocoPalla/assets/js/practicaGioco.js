const startSpeed = 18;
const maxLost = 5;
const posYstart = -50;
let clicked = false;
let points = 0;
let losts = 0;

const audio = new Audio("boom.wav");

(function hideGoodLook() {
  setTimeout(function () {
    document.getElementById("welcome").style = ("display:none");
  }, 2000);
})();

function gestPoints() {
  points++;
  document.getElementById("number").innerText = points;
  palla.style =
    "transition-duration: 700ms; transform: scale (1.7); opacity:0 ";
  clicked = true;
  audio.play();
}

(function start() {
  posY = posYstart;
  posX = posXstart;
  actualSpeed = startSpeed;
  let interval = setInterval(frame, actualSpeed);

  function frame() {
    if (posY === 100 && tost === maxLosts) {
      clearInterval(interval);
      alert("GAMEOVER il tuo punteggio è " + points);
      return;
    } else if (posY === 100 && clicked === true) {
      clicked = false;
      posY = posYstart;
      posX = Math.floor(Math.random() * 1000);
      palla.style = "opacity: 1";
      clearInterval(interval);
      interval = setInterval(frame, actualSpeed -= 0.5);
    } else if (posY === 100 && clicked === false) {
      losts++;
      posY = posYstart;
      posX = Math.floor(Math.random() * 1000);
    } else {
      palla.style.left = posX + "px";
      palla.style.top = posY + "%";
      posY++;
    }
  }
})();
