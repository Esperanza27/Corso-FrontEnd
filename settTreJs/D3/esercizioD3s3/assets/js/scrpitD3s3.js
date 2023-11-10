const task = document.getElementById("aggiungeTask");
const inputTask = document.getElementById("nomeTask");
const elimina = document.getElementById("elimina");
const list =[];
const newTask = () => {
  task.addEventListener("click", () => {
    console.log("aggiunge task");
    
  });

  inputtask.addEventListener("keyspress", (e) => {
    if (e.key === "Enter") {
      console.log("enter");
      list.push(inpuTtask.value ) 
    } 
  });
};

const eliminaTask = (array => {
  elimina.addEventListener("click", () => {
    if (e.id === array.id) {
      console.log("deleite");
      array(inpuTtask.value) 
    } 
    console.log("elimina task");
  });
})

console.log(eliminaTask(list))