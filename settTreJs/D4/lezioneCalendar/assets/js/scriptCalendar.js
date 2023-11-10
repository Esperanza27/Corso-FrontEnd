/* 1. dobbiamo capire in che mese siamo, per scriverlo nell'h1, e quanti giorni ha il mese, 
per generare il corretto numero di celle */
const now = new Date(); // me da la data corrente
/* per salvare gli appuntamenti abbiamo bisogno di un'array, perchè ogni appuntamento è una stringa, ogni giorno 
può contenere infiniti appuntamenti e ogni mese ha un numero di giorni variabile.
creeremo quindi un array di array, dove l'array padre è il mese e gli figli rappresentano i giorni
[rappresenta il mese
[ rappresenta il primo giorno],[ rappresenta il secondo giorno],[ rappresenta il terzo giorno],...
] */
/* Non sapendo quanti giorni ci sono nel mese in corso, si crea il "guscio" del mese */
const appointments = []; // strutura che contendra gli appuntamenti
/* dentro appointaments pushiamo tanti sottoarray quanti sono i giorni del mese corrente */
const monthNames = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];
const scriviMese = function () {
  const title = document.querySelector("h1");
  const indiceMese = now.getMonth(); // 10 perche siamo a novembre, restituisce un number
  const nomeMese = monthNames[indiceMese]; // si retituisce novembre
  title.innerText = nomeMese;
};
scriviMese();
/*  sappiamo in che mese siamo , ma quanti giorni ha questo mese ? per riempire le celle */
/* dal momento che febbaio nehli anni bisestili ha 29 giorni, per sapere il mio mese quanti giorni  */
const giorniTotale = function () {
    const anno= now.getFullYear(); // ci da il anno...> 2023 perche siamo nel anno 2023
    const mese = now.getMonth(); // ristituisce 10, perche siamo a novembre
    /* dal momento che nell'oggetto date il numero dei giorni del mese parte da 1, mi basta sapere qual'è 
    l'ultimo giorno del mese in corso per avere il suo numero di giorni */
    /* per sapere l'ultimo giorno del mese in corso, cro l data del primo giorno del mes successivo al mese
     in corso es faccio -1*/
let ultimoGiorno = new Date(anno, mese +1, 0)/* con lo 0 le stiamo dicendo dame il giorno prima dell mese prima,
questa data corrisponde allo 0 dicembre 2023, che nos esiste, e che quindi è il 30 novembre 2023; novembre ha trenta giorni*/
    const numeriGiorni = ultimoGiorno.getDate();// ritorna il numeri di giorni del mese
    return numeriGiorni;/* numeriGiorni è il numero di
    volte per cui dovrò ripetere la recreazione dei div corrispondenti ai singoli giorni*/
}
giorniTotale();
/* quando carico un mese, eventuali classi select precedenti essere rimose, altrimenti mi troverò selezionati
i giorni del mese precedente che avevo degli appunti */
/* seleziono TUTTI gli elementi con classe selected e rimuovo la classe */
const deselezionaCelle = function () {
    const celle = document.querySelectorAll('.day')
celle.forEach((element)=>{
    element.classList.remove('selected')
})
}


// quando faccio click su un giorno, nel di id= 'newMeetingDay' dovrò leggere la data selezionata"
const giornoAppuntamento =  function(indiceGiorno){
    const giorno =  document.getElementById('newMeetingDay');
    giorno.classList.add('hasDay');
    giorno.innerText = indiceGiorno + 1;
}

/*  a questo punto va creata la 'griglia' dei div contenenti i giorni del mese in corso; questa griglia userà
il numero dei giorni per gestire l'array globale creato all'inizio e scriverà i vari div  */