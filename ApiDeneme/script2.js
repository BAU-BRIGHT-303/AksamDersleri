let urunler = document.getElementById("urunler");
var butonKontrol = true;
function urunGetir() {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((veri) => {
      if (butonKontrol != false) {
        veri.products.map(
          (urun) =>
            (urunler.innerHTML += `
        <div class="col-md-6 mb-3">
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0 border border-danger">
          <div class="col-md-4">
            <img src="${
              urun.images[Math.floor(Math.random() * urun.images.length)]
            }" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title" style="font-weight:bolder">${
                urun.title
              }</h5>
              <p class="card-text">${urun.description}</p>
              <p class="card-text text-danger">Kategori: ${urun.category}</p>
              <p class="card-text"><small class="text-warning">Marka: ${
                urun.brand
              } <br>Fiyat: ${urun.price}$ <br>
              Değerlendirme: ${
                urun.rating
              }  &#11088;&#11088;&#11088;&#11088;</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    `)
        );
        butonKontrol = false;
      } else {
        urunler.innerHTML = ``;
        butonKontrol = true;
      }
    });
}
