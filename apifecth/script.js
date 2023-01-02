var buton = document.getElementById("tikla");
var urunleriEkle = document.getElementById("urunEkle");

buton.addEventListener("click", tiklaGelsin);

function tiklaGelsin() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      let output = `<h2 style=" text-align-center" >Ürünler</h2>
    <div class="row">`;

      data.products.map(
        (api) =>
          (output += `
          
      <div class="col-md-4 my-3">
          <div class="card text-center" style="width: auto; height:450px">
              <div class="card-body bg-success">
                  <h5 class="card-title">${api.title}</h5>
                  <p class="card-text mb-4 mt-2">${api.description}</p>
                  <img style= "height:300px " class="img-fluid" src="${
                    api.images[Math.floor(Math.random() * api.images.length)]
                  }" />
               </div>
          </div>
      </div>
      `)
      );

      urunleriEkle.innerHTML = output + "</div>";
    });
}
