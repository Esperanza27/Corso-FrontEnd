// metodo splice

const mioArray = ["Anna", "Mario", "Daniele", "Giovanna", "Nicola"];
console.log(mioArray);
mioArray.splice(2, 0, "Gianni", "Antonio"); // voi dire
console.log(mioArray);

const nome1 = mioArray.splice(
  1,
  2
); /* con lo slice elimino i valori presenti nell'array 
mioArray e li inserisco in un nuovo array chiamato nome1*/
const nuovoArray = [
  ...mioArray,
  ...nome1,
]; /*  con lo spred operator inserisco tutti i valori di entrambi
gli array in un nuovoArray  */
console.log(nuovoArray);
mioArray.splice(
  0,
  2,
  "Gianni",
  "Antonio"
); /* Il metodo splice MODIFICA l'array iniziale, chee resta modificato
  in tutto lo script, non solo dopo lo splice*/
console.log(mioArray);
/* altro esempio */

/* Metodo Slide */

const disney = [
  "pippo",
  "pluto",
  "paperino",
  "gastone",
  "arichimede",
  "nonna papera",
];
const preferiti = disney.slice(1, 5);
console.log(disney);
console.log(preferiti);

/* metodi foreach */
/* NON crea un nuovo array, si limita ad eseguire le atessa funzione per ogni elemento dell'array */
const numeri1 = [2, 4, 6, 8, 10];

numeri1.forEach(function (el) {
  console.log(el * 3);
});

/* metodo map */
/* cre un nuovo array, applicando a ogni elemento dell'array la funzione indicarta.
Generalmente il metodo map ha un return  */
const arraySomma = numeri1.map(function (el) {
  return el + 5;
});
console.log(arraySomma);
/* Seleziome elementi da checbox */
const studente = {
  nome: " mario",
  cognome: "rosi",
  materie: [],
};
console.log(studente);

let checkhtml = document.getElementById("HTML");
let checkcss = document.getElementById("CSS");
let checkjs = document.getElementById("JS");

let scelti = [checkhtml, checkcss, checkjs];
/* sintassi arrow function */
const invia = () => {
  let corsi = [];
  document.getElementById("scelti").innerHTML = "";

  scelti.forEach((checbox) => {
    if (checbox.checked) {
      corsi.push(checbox.value);
    }
  });
  document.getElementById("scelti").innerHTML = `Corsi scelti: ${corsi}`;
  studente.materie.push(...corsi);
  console.log(studente);
};
/* sintassi declared function
function invia() {
  let corsi = [];
  document.getElementById("scelti").innerHTML = "";

  scelti.forEach((checbox) => {
    if (checbox.checked) {
      corsi.push(checbox.value);
    }
  });
  document.getElementById("scelti").innerHTML = `Corsi scelti: ${corsi}`;
  studente.materie.push(...corsi);
  console.log(studente);
} */

/* NI forEach NI map modificano l'array di partenza */
/* rest parameter per memorizzare scelte multiple da un form */
/* Esempio Filter (anche sugli index di un array) */
/* Esempio metodo Map */

let arrayNomi = [
  "Mario",
  "Aldo",
  "Anna",
  "Nicola",
  "Maria",
  "Giovanni",
  "Giulia",
];

const lunghezzaNomi = arrayNomi.map((el) => {
  return el.charAt(0);
});
console.log(lunghezzaNomi);

/* const numeri =[2,4,3,7,5];
const totaleLista = numeri.reduce(Function(totale, el) {
    return totale + el
});
console.log(totaleLista); */
