/* op. 1 */
class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
}
const utente1 = new User("Mario", "Rossi", 32, "Milano");
const utente2 = new User("Valentino", "Rossi", 45, "Roma");

const confrontAges = (utente1, utente2) => {
  if (utente1.age > utente2.age) {
    return `${utente1.firstName} ' è più vecchio di ' ${utente2.firstName} `;
  } else if (utente2.age > utente1.age) {
    return `${utente2.firstName} ' è più vecchio di ' ${utente1.firstName} `;
  } else {
    return `${utente1.firstName} ',' ${utente2.firstName} ' hanno la stessa eta ' `;
  }
};
console.log(confrontAges(utente1, utente2));

/* op2 */
class User2 {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  compareAge(user) {
    if (this.age < user.age) {
      return `${user.firstName} è più vecchio di ${this.firstName}.`
    } else if (this.age > user.age) {
      return `${user.firstName} è più giovane di ${this.firstName}.`
    } else {
      return `${user.firstName} è della stessa età di ${this.firstName}.`
    }
  }
}
user1 = new User2('Eros', 'Ramazzotti', 50, 'Roma')
user2 = new User2('Vasco', 'Rossi', 65, 'Zocca')
user3 = new User2('Luciano', 'Ligabue', 60, 'Correggio')
console.log(user1.compareAge(user2))
console.log(user2.compareAge(user3))
console.log(user3.compareAge(user1))


let campoPetName = document.getElementById("petName");
const campoNomePropietario = document.getElementById("nameOwner");
const campoSpecie = document.getElementById("species");
const campoRazza = document.getElementById("breed");

let list = document.getElementById("list");
const button = document.getElementById("buttonAdd");
const pets = [];

class Pet {
  constructor(petName, nameOwner, species, breed) {
    this.petName = petName;
    this.nameOwner = nameOwner;
    this.species = species;
    this.breed = breed;
  }
  controllaPropietari(pet) {
    if (this.nameOwner === pet.nameOwner) {
      return true;
    } else {
      return false;
    }
  }
}
button.onclick = function () {
  let pet1 = new Pet(
    campoPetName.value,
    campoNomePropietario.value,
    campoSpecie.value,
    campoRazza.value
  );
  pets.push(pet1);
  renderizzaList();
  campoPetName.value = "";
  campoNomePropietario.value = "";
  campoSpecie.value = "";
  campoRazza.value = "";
};
const renderizzaList = () => {
  list.innerHTML = "";
  pets.forEach((pet) => {
    const newLi = document.createElement("li");
    newLi.innerHTML =
      "nome: " +
      pet.petName +
      "Nome Propietario: " +
      pet.nameOwner +
      " Specie: " +
      pet.species +
      " Razza: " +
      pet.breed;
  });
};
