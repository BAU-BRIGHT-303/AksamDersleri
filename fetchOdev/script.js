document.getElementById("tikla").addEventListener("click", getir);

let kutu = document.querySelector("div");

function getir() {
  fetch(
    "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let cikti = `<h2>Filmler Listesi</h2>
      <div class="row">`;
      data.map((movie) => {
        cikti += `
        <div class="col-md-3">
        <div class="card" style="width: 18rem;">
        <img src="${movie.Poster}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${movie.Title}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${movie.Year}</li>
          <li class="list-group-item">${movie.Runtime}</li>
        </ul>
      </div>
      </div>
        `;
      });
      kutu.innerHTML = cikti + "</div>";
    });
}
