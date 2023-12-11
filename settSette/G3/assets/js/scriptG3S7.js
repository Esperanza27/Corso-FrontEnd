const url = 'https://striveschool-api.herokuapp.com/books';
 
fetch (url)
.then(response => response.json()) 
.then(data => cards(data))
  function cards(data) {
    for (let i = 0; i< data.length; index++) {
        console.log(data);
    
        const cards= document.getElementById('container-cards');
        const imgCard = document.querySelector('.card-img-topy');
        imgCard.src = data.img;
        imgCard.alt = "";
    }
  }
 