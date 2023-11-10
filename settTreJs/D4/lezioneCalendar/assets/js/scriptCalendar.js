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
  const anno = now.getFullYear(); // ci da il anno...> 2023 perche siamo nel anno 2023
  const mese = now.getMonth(); // ristituisce 10, perche siamo a novembre
  /* dal momento che nell'oggetto date il numero dei giorni del mese parte da 1, mi basta sapere qual'è 
    l'ultimo giorno del mese in corso per avere il suo numero di giorni */
  /* per sapere l'ultimo giorno del mese in corso, cro l data del primo giorno del mes successivo al mese
     in corso es faccio -1*/
  let ultimoGiorno = new Date(
    anno,
    mese + 1,
    0
  ); /* con lo 0 le stiamo dicendo dame il giorno prima dell mese prima,
questa data corrisponde allo 0 dicembre 2023, che nos esiste, e che quindi è il 30 novembre 2023; novembre ha trenta giorni*/
  const numeriGiorni = ultimoGiorno.getDate(); // ritorna il numeri di giorni del mese

  return numeriGiorni; /* numeriGiorni è il numero di
    volte per cui dovrò ripetere la recreazione dei div corrispondenti ai singoli giorni*/
};

/* quando carico un mese, eventuali classi select precedenti essere rimose, altrimenti mi troverò selezionati
i giorni del mese precedente che avevo degli appunti */
/* seleziono TUTTI gli elementi con classe selected e rimuovo la classe */
const deselezionaCelle = function () {
  const celle = document.querySelectorAll(".day");
  celle.forEach((element) => {
    element.classList.remove("selected");
  });
};

// quando faccio click su un giorno, nel di id= 'newMeetingDay' dovrò leggere la data selezionata"
const giornoAppuntamento = function (indiceGiorno) {
  const giorno = document.getElementById("newMeetingDay");
  giorno.classList.add("hasDay");
  giorno.innerText = indiceGiorno + 1;
};

/*  a questo punto va creata la 'griglia' dei div contenenti i giorni del mese in corso; questa griglia userà
il numero dei giorni per gestire l'array globale creato all'inizio e scriverà i vari div  */
const creaGriglia = function (numeriGiorni) { // questo sera il contenitore
  // numeroGiorni è il n di giorni del mese corrente
  const calendarDiv = document.getElementById("calendar");

  for (let i = 0; i < numeriGiorni; i++) {
    const cellaGiorno = document.createElement("div"); // ad ogni giorno associo un div
    cellaGiorno.classList.add("day"); // stilizzo il div come definito in css

    cellaGiorno.addEventListener("click", function (e) {
      deselezionaCelle(); // deselezziono l'eventuale altra cella selezionata
      cellaGiorno.classList.add("selected");// aggiungo la classe css per mostrare la selezione del giorno cliccato
      giornoAppuntamento(i); // scrivo il giorno cliccato nella sezione Giorno del form
      if (appointments[i].length > 0) {
        mostraApputamenti(i);
      } else {
        const divAppuntamenti = document.getElementById("appointments");
        divAppuntamenti.style.display = "none";
      }
    });
    //devo scrivere
    const valoreCella = document.createElement("h3");
    valoreCella.innerText = i + 1;

    //'appendo' gli elementi creati
    cellaGiorno.appendChild(valoreCella);
    calendarDiv.appendChild(cellaGiorno);
    //creato il calendario, inserisce nell'array appointments l'array dei giorni del mese
    appointments.push([]);
    /* console.log(appointments); */
  }
};
creaGriglia(giorniTotale());
const mostraApputamenti = function (indiceGiorno) {
  /*  con questa fn se popola la lista degli appuntamenti con gli appuntamenti del giorno */
  // 1. prendere gli appuntamenti giusti
  const appuntamentiGiorno = appointments[indiceGiorno];
  //2. selezionare la lista contenitore
  const lista = document.querySelector("#appointments ul");
  //3. svuotare la lista
  lista.innerHTML = "";

  //4. cliclare gli appuntamenti del giorno e creare un li per ciascuno di essi
  appuntamentiGiorno.forEach((element) => {
    const newLi = document.createElement("li");
    newLi.innerText = element;
    lista.appendChild(newLi);
  });
  // 5. la list è piena ma è ancora nascosta
  const divAppuntamenti = document.getElementById("appointments");
  divAppuntamenti.style.display = "block";
};
/* dobbiamo creare nuovi appuntamenti! */
const meetingForm = document.querySelector("form");
meetingForm.addEventListener("submit", function (e) {
  e.preventDefault();
  //1. giorno dell'appuntamento
  const selectedDay = document.getElementById("newMeetingDay").innerText;
  //2.ora dell'appuntamento selezionato
  const meetingTime = document.getElementById("newMeetingTime").value;
  //3.nome dell'appuntamento
  const meetingName = document.getElementById("newMeetingName").value;
  //4. creo la stringa dell'appuntamento
  const stringaAppuntamento = `${meetingTime} - ${meetingName} `;
  //5. scrivo l'appuntamento nell'array
  const indiceArray = parseInt(selectedDay) - 1;
  appointments[indiceArray].push(stringaAppuntamento);
  // creo
  const pallino = document.createElement("div");
  pallino.classList.add("pallino");
  //cerco il div del giorno selezionato
  const divSelezionato = document.querySelector(".selected");
  if (!divSelezionato.querySelector(".pallino")) {
    divSelezionato.appendChild(pallino);
  }
  mostraApputamenti(indiceArray);
});
