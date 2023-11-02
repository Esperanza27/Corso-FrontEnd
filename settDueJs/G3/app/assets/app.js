/* ricevere attraverso un form il nome e l'ano di nascita, calcolare 
si la persona e maggiorenne o minorenne, salutarla indicando la maggiore*/
/* 
 1. LEGGERE IL CAMPO NOME E MEMORIZZARLO
 2. LEGGERE IL CAMPO ANNO E MEMORIZZARLO
 3. CALCOLARE L'ETà
 4. VERIFICA LA MAGGIORE O MINORE ETà
 5. SCRIVERE NELL'HTML
 6. CANCELLARE IL FORM 

 EVENTO SCATENANTE
 click

 VARIABILI GLOBALI
 nome;
 anno;
 stato
  */
let nome;
/* globale in quanto è utilizzata  per leggere il campo di input per stampare 
 a video  */
let anno;
let eta;
let stato;
/* globale in quanto è utilizzata per verificare 
 l'età e stampare a video  */
 let errore = document.getElementById("errore");
function eventHandler() {
  leggiForm();
  if (anno >= 1990 && anno <= 2023 && nome != '' ) {
    errore.innerHTML='';
    calcolaEta();
    verifica();
    scrivi();
    cancellaForm();
  } else {
    errore.innerHTML= 'Attenzione! compilare tutti i campi e inserire un numero tra 1900 e 2023 ';
    return;
  }
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

}
function cancellaForm() {
    
}
