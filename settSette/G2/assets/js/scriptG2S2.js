
 /* esercizio 2 */
 
 let index= sessionStorage.getItem(timer) ? parseInt(sessionStorage.getItem(timer)) : 0;
  function timer() {
    index += 1 ;
    document.getElementById("timer").innerText = index;
    sessionStorage.setItem("timer", index);
  }
  setInterval(timer, 1000);

/* esercio 1 */
/* const */
 const dataUtente = []; 
let message = ""

/* utilitis */
const messageWelcome = () => {
    if (localStorage.getItem('name')) {
        message = 'you have not registered your name'
    } else {
        message = 'WELCOME ' + localStorage.getItem('nome') + ', you have success fully registered ' 
      }
      document.getElementById('message').innerText = message;
  }

  /* fn */
  /* localStorage.clear() */
function getName() {
  let nameUtente = document.getElementById("name").value;
  console.log(nameUtente);
  localStorage.setItem("nome", nameUtente);

/*   data.push(name); */
  messageWelcome();
  
};

 function deleteName(){
    localStorage.removeItem("nome");
    messageWelcome()
 }

window.onload = messageWelcome();

