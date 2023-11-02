/* ricevere attraverso un form il nome e l'ano di nascita, calcolare si la persona e maggiorenne o minorenne, salutarla indicando la maggiore*/
/* 
 1. LEGGERE IL CAMPO NOME E MEMORIZZARLO
 2. LEGGERE IL CAMPO ANNO E MEMORIZZARLO
 3. Controllare la validità del form
 4.CALCOLARE L'ETà
 5. VERIFICA LA MAGGIORE O MINORE ETà
 6. SCRIVERE NELL'HTML
 7. CANCELLARE IL FORM 

. EVENTO SCATENANTE
    click

 . VARIABILI GLOBALI
    nome;
    anno;
    stato
  */
let nome;
/* globale in quanto è utilizzata  per leggere il campo di input per stampare a video  */
let anno;
let eta;
let stato;
/* globale in quanto è utilizzata per verificare l'età e stampare a video  */
let errore = document.getElementById("errore");
let esegui = false;
function eventHandler() {
  leggiForm();
  controlla();
  if (esegui) {
    calcolaEta();
    verifica();
    scrivi();
    cancellaForm();
  } else {
    errore.innerHTML =
      "Attenzione! compilare tutti i campi e inserire un numero tra 1900 e 2023! ";
    return;
  }
}
function controlla() {
  esegui = false;
  if (anno >= 1990 && anno <= 2023) {
    if (nome != "") {
      errore.innerHTML = "";
      esegui = true;
    }
  }
  return esegui;
}
function leggiForm() {
  nome = document.getElementById("nome").value;
  anno = document.getElementById("anno").value;
  console.log(nome, anno);
}
function calcolaEta() {
  eta = 2023 - Number(anno);
  console.log(eta);
}
function verifica() {
  stato = eta >= 18 ? "maggiorenne" : "minorenne";
  console.log(stato);
}
function scrivi() {
  document.getElementById("mioNome").innerHTML = "ciao " + nome;
  document.getElementById("miaVerifica").innerHTML =
    "la tua età è " + eta + "; sei " + stato;
}
function cancellaForm() {
  document.getElementById("nome").value = "";
  document.getElementById("anno").value = "";
}
