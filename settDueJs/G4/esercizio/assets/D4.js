/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function calcolaArea(b, h) {
  b = document.getElementById("base").value;
  h = document.getElementById("altezza").value;
  let area = b * h;
  document.getElementById("area").innerHTML = area;
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(num1, num2) {
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  let somma = Number(num1) + Number(num2);
  let risultato;
  if (num1 == num2) {
    risultato = somma * 3;
    document.getElementById("risposta").innerHTML = risultato;
  } else {
    somma;
    document.getElementById("risposta").innerHTML = somma;
  }
}

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
function crazyDiff(numero1) {
  numero1 = document.getElementById("numero1").value;
  let sottrazione = Math.abs(num1 - 19);
  
  if (numero1 < 19) {
    sottrazione *= 3;
  } else if (numero1 > 19) {
    moltiplicazione;
  } else {
      "IL numero inserito è uguale al parametro";
  }
}
console.log(crazyDiff(5))
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.*/
function boundary(n) {
  if ( (n === 400)|| (n > 20 && n <=100)) {
    return true;
  } else {
    return false;
  }
}
console.log(boundary(56))
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa) {
    if (stringa.startWith("EPICODE")) {
        return stringa;
    } else {
        return "EPICODE" +stringa;
    }
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* c */
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
