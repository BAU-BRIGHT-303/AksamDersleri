var cikti = document.getElementById("cikti");

document.getElementById("apiGetir").addEventListener("click", apiGetirFunc);

function apiGetirFunc() {
  fetch("https://reqres.in/api/users?page=2")
    .then((res) => res.json())
    .then((data) => {
      let output = `<h2>Veriler</h2>
      <div class="row">`;
      data.data.map(
        (api) =>
          (output += `
        <div class="col-md-3 my-5">
        <div class="card" style="width: auto; height:300px">
  <div class="card-body">
    <h5 class="card-title">${api.email}</h5>
    <h5 class="card-title">${api.first_name}</h5>
    <h5 class="card-title">${api.last_name}</h5>   
    <img src="${api.avatar}" alt="" > 

  </div>
</div>
        
        </div>
        `)
      );
      cikti.innerHTML = output + "</div>";
    });
}
