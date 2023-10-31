/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let num1 = 27;
let num2 = 14;
if (num1 < num2) {
  console.log(num2 + " è il numero più grande");
} else if (num1 > num2) {
  console.log(num1 + " è il numero più grande ");
} else {
  console.log(num1 + ",", num2 + " sono uguali");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

if (num1 != 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

if (num1 % 5 == 0) {
  console.log("divisibile per 5");
} else {
  console.log("non è divisibile per 5");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
//Op. 1
if ((num1 || num2) == 8) {
  console.log("uno degli numeri è 8");
} else if (num1 + num2 == 8) {
  console.log("la somma di" + num1 + "+" + num2 + "è uguale a 8");
} else if (num1 - num2 == 8) {
  console.log("la diferza di" + num1 + "-" + num2 + "è uguale a 8");
} else {
  console.log("Nessuni degli numeri è 8 ni la somma ni la diferenza è 8 ");
}
//Op. 2

if ((num1 || num2) == 8) {
  console.log("uno degli numeri è 8");
} else if ((num1 + num2 || num1 - num2) == 8) {
  console.log(
    "la somma o la diferenza di " + num1 + " e " + num2 + " è uguale a 8"
  );
} else {
  console.log("Nessuni degli numeri è 8 ni la somma ni la diferenza è 8 ");
}
//Op. 3

let somma = num1 + num2;
let subtraction = num1 - num2;

if ((num1 || num2) == 8) {
  console.log("uno degli numeri è 8");
} else if ((somma || subtraction) == 8) {
  console.log(
    "la somma o la sottrazione di " + num1 + " e " + num2 + " è uguale a 8"
  );
} else {
  console.log("Nessuni degli numeri è 8 ni la somma ni la sottrazione è 8 ");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 60;
let spedizione = 10;
let totale;
if (totalShoppingCart < 50) {
  totale = totalShoppingCart + spedizione;
  console.log(totale);
} else {
  totale = totalShoppingCart;
  console.log(totale);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let totalShoppingCart2 = totalShoppingCart - (totalShoppingCart * 20) / 100;
if (totalShoppingCart2 < 50) {
  totale = totalShoppingCart2 + spedizione;
  console.log(totale);
} else {
  totale = totalShoppingCart2;
  console.log(totale);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.*/
let a = 17;
let b = 33;
let c = 8;
if (a > b && b > c) {
  console.log(c, b, a);
} else if (b < a && a > c) {
  conbsole.log(c, a, b);
} /* else if (c < a && c< b) {
  console.log(b,a,c  )
} */ else {
  console.log(b, a, c);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
console.log(typeof(a));

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/ if (a % 2 == 0) {
  console.log("il numero fornito è pari");
} else if (a % 2 != 0) {
  console.log("il numero fornito  è dispari");
} else {
  console.log("il valore fornito non è un numero");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio correto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
//Op.1
let val = 7;
if (val >= 5 && val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}
//Op.2
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me.city);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/*  delete me.lastName;
 console.log(me.lastName); */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
/* me.skills.pop;
console.log(me.skills); */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/* const numeri = [];
numeri.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/*
opcione 1--->

numeri.pop;
console.log(numeri);
numeri.push(100);
console.log(numeri) */

/* console.log(numeri.length);
numeri[9] = 100;
document.getElementById("numeri").innerHTML = numeri; */
/* document.getElementById("").innerHTML =(); */
