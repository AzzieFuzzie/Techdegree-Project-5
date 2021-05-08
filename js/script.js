const searchContainer = document.querySelector(".search-container");
const gallery = document.getElementById("gallery");
const body = document.querySelector("body");

fetch("https://randomuser.me/api/?results=12").then((response) =>
  response.json().then((data) => {
    profile(data.results);
    modalProfile(data.results);
    console.log(data.results);
  })
);

function profile(data) {
  for (let i = 0; i < data.length; i++) {
    const galleryContent = `  <div class="card">
<div class="card-img-container">
    <img class="card-img" src=${data[i].picture.large} alt="profile picture">
</div>
<div class="card-info-container">
    <h3 id="name" class="card-name cap">${data[i].name.first}${data[i].name.last}</h3>
    <p class="card-text">${data[i].email}</p>
    <p class="card-text cap">${data[i].location.city}${data[i].location.state}</p>
</div>
</div>`;
    gallery.insertAdjacentHTML("beforeend", galleryContent);
  }
}
let modal = " ";
function modalProfile(modaldata) {
  for (let i = 0; i < modaldata.length; i++) {
    gallery.addEventListener("click", (e) => {
      modal = `<div class="modal-container">
<div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    <div class="modal-info-container">
        <img class="modal-img" src="${modaldata[i].picture.medium}" alt="profile picture">
        <h3 id="name" class="modal-name cap">${modaldata[i].name.first}</h3>
        <p class="modal-text">${modaldata[i].email}</p>
        <p class="modal-text cap">${modaldata[i].location.city}</p>
        <hr>
        <p class="modal-text">${modaldata[i].cell}</p>
        <p class="modal-text">${modaldata[i].location.street}</p>
        <p class="modal-text">${modaldata[i].dob.date}</p>
    </div>
</div>`;

      body.insertAdjacentHTML("beforeEnd", modal);
      body.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") modal.style.display = "none";
      });
    });
  }
}

const searchContent = `<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`;
searchContainer.insertAdjacentHTML("afterEnd", searchContent);