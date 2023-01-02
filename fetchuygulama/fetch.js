document.getElementById('apiGetir').addEventListener('click', apiGetirFunc);
var sonuc = document.getElementById('sonuc');

function apiGetirFunc()
{
 fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then((res) => res.json())
    .then((data) => {
      let output = `<h2>Albumler</h2>
      <div class="row">`;
      data.map(
        (api) =>
          (output += `
        <div class="col-md-3">
        <div class="card" style="width: auto; height:400px">
  <div class="card-body">
    <h4 class="card-title">${api.id}</h4>
    <img src="${api.url}" class="card-img-bottom" alt="...">
    <p class="card-text">${api.title}</p>
   
   
  </div>
</div>
        
        </div>
        `)
      );
      sonuc.innerHTML = output + '</div>';  
    })
};