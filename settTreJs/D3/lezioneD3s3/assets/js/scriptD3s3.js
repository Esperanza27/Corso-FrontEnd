const btn = document.getElementById("invia");

btn.addEventListener("click", function (e) {
  e.preventDefault();
/*   let form=  */
  let nome = document.getElementById("nome");
  let cognome = document.getElementById("cognome");
  let email = document.getElementById("email");
  let eta = document.getElementById("eta");

  if (!cognome.checkValidity()) {
    cognome.style.backgroundColor = "red";
    cognome.getElementById("nomeForm").innerText = cognome.validationMessage;
    return;
  } else if (!email.checkValidity()) {
    email.style.backgroundColor = "red";
    email.getElementById("nomeForm").innerText = email.validationMessage;
    return;
  } else if (!eta.checkValidity()) {
    eta.style.backgroundColor = "red";
    eta.getElementById("nomeForm").innerText = eta.validationMessage;
    return;
  }
  cognome.style.backgroundColor = "transparent";
  email.style.backgroundColor = "transparent";
  eta.style.backgroundColor = "transparent";
  nome = nome.value;

  confirm("sei sicuro degli dati inseriti?");
  if (confirm()) {
     document.getElementById("nome").innerText =nome;
  document.getElementById("cognome").innerText = cognome;
  document.getElementById("email").innerText = email;
  document.getElementById("eta").innerText = eta;
  }else {
    form.reset()
  }
 
});  
//setTimeout
let btnRigenera =  document.getElementById('ricrea')

 function generaCodice() {
    btnRigenera.setAttribute('disabled', 'true');
    document.getElementById('rigenera').innerText= '';
    document.getElementById('codice').style.textDecoration= 'none';
    let codice = Math.floor(Math.random() * 100001);
    if(codice< 100000){
        codice= codice + 100000
    }
  document.getElementById("codice").innerText = codice;
  scadenza();
 }
const scadenza = (()=>{
    setTimeout(()=>{
        rigenera();
    }, 5000)
})
/* function scadenza(params) {
    setTimeout(()=>{
        rigenera();
    }, 5000)
} */
 function rigenera(params) {
    document.getElementById('codice').style.textDecoration= 'line-through'
    document.getElementById('rigenera').innerText= 'codice scaduto, rigenerare!'
    btn.removeAttribute('disabled', 'false');
 }
 generaCodice();
 //setTimeOut
 let barra= document.getElementById('barra');
 let timer= 0;
 const avviaTimer= (()=>{
    let timer= 0;
    setInterval(()=>{
       if (timer < 501) {
        barra.style.width = `${timer}px`;
        let porcentuale = timer /5;
        document.getElementById('porcentuale').innerText = `${porcentuale}%`
        timer++;
       } else {
        document.getElementById('stop').innerText = 'Progress bar interrotta';
        clearInterval(avviaTimer)
       }
    }, 10)
});
//`