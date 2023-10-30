
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/ 
/* Risposta
1. String :  dati di carateri senza specifiche
2. Number : che il valore è un numero semplice o decimale 
4. Boolean : può assumere solo i valori true (vero) o false (falso).
5. Undefined : che non a stato assegnato un valore.
6. Null : che ha un valore intenzionalmente assente. */
let titoloString = "String"
console.log(titoloString);
let typeString = "Dati di carateri senza specifiche.";
console.log(typeString);

let titoloNumber = "Number";
let typeNumber ="Che il valore è un numero semplice o decimale.";
console.log(typeNumber);

let titoloBooleam ="Booleam";
let typeBooleam ="Può assumere solo i valori true (vero) o false (falso).";
console.log(typeBooleam);

let tUndefined ="Undefined";
let typeUndefined ="Che non a stato assegnato un valore.";
console.log(typeUndefined);

let titoloNull ="Null";
let typeNull ="Che ha un valore intenzionalmente assente.";
console.log(typeUndefined);

document.getElementById("typeString").innerHTML =(titoloString + ": " + typeString );
document.getElementById("typeNumber").innerHTML =(titoloNumber + ": " + typeNumber);
document.getElementById("typeBooleam").innerHTML =(titoloBooleam + ": " +typeBooleam );
document.getElementById("typeUndefined").innerHTML =(tUndefined + ": " +typeUndefined);
document.getElementById("typeNull").innerHTML =(titoloNull + ": " + typeNull);


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Esperanza";
console.log(myName);
document.getElementById("myName").innerHTML =(myName);


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.*/

let num1 = 12;
let num2 = 20;
const somma = num1 + num2;
console.log(somma);
document.getElementById("somma").innerHTML =(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
 console.log(x);
 document.getElementById("x").innerHTML =(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
 myName = "Llontop";
 const age = "32";
 /* age=33; */
 console.log(age + myName);
 console.log(myName);
 document.getElementById("age").innerHTML =(age + myName);



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let sottrazione = (4 - x);
console.log(sottrazione);
document.getElementById("sottrazione").innerHTML =(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
 let name1= "jhon";
let name2= "Jhon";
 console.log(name1 === name2);
 document.getElementById("equality").innerHTML =(name1 === name2);
/* extra */
let equality2 = name1.toLowerCase === name2.toLowerCase
console.log(equality2)
document.getElementById("equality2").innerHTML =(equality2);
