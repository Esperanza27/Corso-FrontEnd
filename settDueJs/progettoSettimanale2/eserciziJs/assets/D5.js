/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

for (let i = pets.length - 1; i >= 0 ; i--) {
  console.log("questo è il esercizio 4", pets[i]);
}
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let removedElement = pets.shift();
pets.push(removedElement);
console.log(pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  }
]

function modifyCars() {
 const newCars = [];
 for (let index = 0; index < cars.length; index++) {
  newCars.push({...cars[index], licensePlate : 5})
 }
 return newCars;
}      
console.log(modifyCars());                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push({brand: "Peugeot",
model: "208",
color: "blue",
trims: ["allure", "GT"],})
console.log("questo è il esercizio 6", cars)
for (let index = 0; index < array.length; index++) {
  cars[index].trims.pop();
  
}
console.log("esercio 6", cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (let index = 0; index < cars.length; index++) {
  justTrims.push(cars[index].trims[0]);
  
}
console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
/* for (let index = 0; index < array.length; index++) {
 if (cars[index].color ) {
 } else {
  
 }
  
} */
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let conta = 0;
while (numericArray[0]!== 32) {
  console.log(numericArray[0]);
  conta++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
 const array = [];
for (let index = 0; index < charactersArray.length; index++) {

  switch (charactersArray[index]) {
    case "a":
    array.push(1) 
      break;
    case "b":
      array.push(1);
      break;
  
    case "c":
      array.push(3);
      break;
    case "d":
      array.push(4);
      break;
    case "e":
      array.push(5);
      break;
    case "f":
      array.push(6);
      break;
    case "g":
      array.push(7);
      break;
    case "h":
      array.push(8);
      break;
    case "i":
      array.push(9);
      break;
    case "j":
      array.pus(10);
      break;
    case "k":
      array.push(11);
      break;
    case "l":
      array.push(12);
      break;
    case "o":
      array.push(13);
      break;
    case "p":
      array.push(14);
      break;
    case "q":
      array.push(15);
      break;
    case "r":
      array.push(16);
      break;
    case "s":
      array.push(17);
      break;
    case "t":
      array.push(18);
      break;
    case "u":
      array.push(19);
      break;
    case "v":
      array.push(20);
      break;
  
    default:
      array.push(21);
  }
  console.log(array)
}


