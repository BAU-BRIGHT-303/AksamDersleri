document.querySelector("#buton").addEventListener("click", kurGetir);

function kurGetir() {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res) => res.json())
    .then((data) => {
      let output = "<ul>";
      data.forEach((data2) => {
        output += `<li>Title ${data2.title}</li>`;
      });

      document.querySelector("#output").innerHTML += output;
    });
}
