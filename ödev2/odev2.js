var ekle = document.getElementById("album");
let buton = document.querySelector("button");

buton.addEventListener("click", ekleGelsin);

function ekleGelsin() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let output = "<h1>Fotoğraflar </h1></br>";
      data.map(
        (resim) =>
          (output += `
      <img src=${resim.url} style=" height: 50px;
      width: 50px; margin: 20px"/>      
      
      `)
      );
      ekle.innerHTML = output;
    });
}
