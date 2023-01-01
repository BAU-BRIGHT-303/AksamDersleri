let ekip = document.getElementById("ekibimiz");
function calisanlar() {
  fetch(`https://reqres.in/api/users`)
    .then((res) => res.json())
    .then((veri) => {
      console.log(veri);
      veri.data.map((calisan) => {
        console.log(calisan);
        ekip.innerHTML += `
        <div class="col-md-4">
        <div class="card mb-3">
        <img style="width:50%" src="${calisan.avatar}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <h5 class="card-title">${calisan.first_name} ${calisan.last_name} </h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-light">${calisan.email}</small></p>
        </div>
      </div>
      </div>`;
      });
    });
}
calisanlar();
