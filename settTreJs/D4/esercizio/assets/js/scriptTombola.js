document.addEventListener("load", board());

function board() {
  for (let index = 0; index < 90; index++) {
    const tabellone = document.querySelector("#tabellone");
    const casella = document.createElement("div");
    casella.classList.add("casella");
    casella.innerText = index + 1;
    tabellone.appendChild(casella);
  }
}

const btnEstrai = document.getElementById("estrai");
const numberStratti = [];

btnEstrai.addEventListener("click", btn());

function btn() {
  let numberEstratto = Math.floor(Math.random() * 91);
  document.getElementById(estratti).innerHTML = numberEstratto;
  numberStratti.push(numberEstratto);
}

