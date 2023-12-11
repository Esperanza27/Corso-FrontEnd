const url = "https://api.pexels.com/v1/search?query=";
/* const urlSecondary = "https://api.pexels.com/v1/search?query=[dog]";  */
const token = "NF9JBvMfdoiihbOlbzcBNSPTA4Vu4bPTcXjZn4Dmfu1rmJn7NEmdNjBy";
const headers = {
  Authorization: token,
  Accept: "application/json",
  "Content-Type": "application/json",
};
let photos = [];
/* get photos */
const getPhotos = (queryTypePhoto) => {
  fetch(`${url}[${queryTypePhoto}]`, { headers: headers })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "pippo");
      containerCards(data.photos);
      console.log(data.photos);
    });
};
/* delete */
const onDelete= (event)=>{
    console.log(event)
event?.target.closest(".col").remove(); 
}
/* form */
const search= ()=>{
    const searchQuery = document.getElementById("search").value
    searchQuery.toLowerCase();
    getPhotos(searchQuery);
  };

/* details */
const goToDetails = (id) => {
    window.location.assign("./details/details.html?picId=" + id);
  };
 

  /* cards */
const containerCards = (data) => {
  const cards = document.getElementById("container");
  cards.innerHTML = "";
  data.forEach((photo) => {
    let card = `
    <div class="row"> 
      <div class="col mb-4">
            <div class="card mb-4 shadow-sm">
            <img src="${photo.src.medium}" type="button" class="img-fluid card-img-top"  onclick="goToDetails(${photo.id})">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div class="card-body">
                <h5 class="card-title">Lorem Ipsum</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary" onclick=" onDelete(event)">
                    Hide
                    </button>
                  </div>
                  <small class="text-muted">${photo.id}</small>
                </div>
              </div>
            </div>
          </div>
  `;
    cards.innerHTML += card;
  });
  
};
window.onload = () => {
    
   /*  getPhotos()*/;
    
}
/*  <h5 class="card-title">${photo.photographer}</h5> */
