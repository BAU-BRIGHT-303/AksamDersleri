// document.getElementById("apiGetir").addEventListener("click", apiGetirFunc);

var cikti = document.getElementById("cikti");

$(document).ready(function () {
  $("#apiGetir").click(function () {
    $("#cikti").toggle(3000);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        let output = `<h2 style=" text-align-center" >Ürünler</h2>
      <div class="row">`;

        data.products.map(
          (api) =>
            (output += `
            
        <div class="col-md-6 my-5">
            <div class="card text-center" style="width: auto; height:450px">
                <div class="card-body">
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

        cikti.innerHTML = output + "</div>";
      });
  });
});

// function apiGetirFunc() {
//   $("#cikti").toggle();
//   fetch("https://dummyjson.com/products")
//     .then((res) => res.json())
//     .then((data) => {
//       let output = `<h2 style=" text-align-center" >Ürünler</h2>
//       <div class="row">`;
//       data.products.map(
//         (api) =>
//           (output += `
//         <div class="col-md-6 my-5">
//             <div class="card text-center" style="width: auto; height:450px">
//                 <div class="card-body">
//                     <h5 class="card-title">${api.title}</h5>
//                     <p class="card-text mb-4 mt-2">${api.description}</p>
//                     <img style= "height:300px " class="img-fluid" src="${api.images[0]}" />
//                  </div>
//             </div>
//         </div>
//         `)
//       );
//       cikti.innerHTML = output + "</div>";
//     });
// }
