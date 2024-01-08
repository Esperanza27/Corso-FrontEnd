const array = [15, 20, 31];
class pippo {
  constructor(arr = null) {
    if (arr != null) {
      this.numbers = arr;
    }
  }
  check() {
    this.numbers.forEach((number) => {
      if (number % 3 === 0 && number % 5 === 0) {
        console.log("Paperino");
      } else if (number % 3 === 0) {
        console.log("Pippo");
      } else if (number % 5 === 0) {
        console.log("Pluto");
      } else {
        console.log(number.topString());
      }
    });
  }
}

 const test = new pippo(array);
if (pippo.hasOwnProperty("number")) {
    test.check();
} else {
    console.log("non ho i numeri deficente");
} 

/* altro */
document.getElementById("button").addEventListener("click",test());
function test() {
    console.log("ciao");
}