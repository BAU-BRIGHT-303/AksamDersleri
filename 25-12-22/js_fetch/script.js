document.getElementById('yaziGetir').addEventListener('click', yaziGetirFunc);
var cikti = document.getElementById('cikti');

document
  .getElementById('calisanGetir')
  .addEventListener('click', calisanGetirFunc);

document.getElementById('apiGetir').addEventListener('click', apiGetirFunc);

document
  .getElementById('postOlustur')
  .addEventListener('submit', postOlusturfunc);

function yaziGetirFunc() {
  //   console.log('Yazi Getirme Butonu Çalıştırıldı');
  //   fetch('./yazi.txt')
  //     .then(function (data) {
  //       return data.text();
  //     })
  //     .then(function (veri) {
  //       console.log(veri);
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //     });
  //

  fetch('./yazi.txt')
    .then((res) => res.text())
    .then((data) => (cikti.innerText = data))
    .catch((error) => console.log(error));
}

var calisankontrol = true;
function calisanGetirFunc() {
  //   console.log('calisan getir çalıştırıldı');
  //   fetch('./employees.json')
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  fetch('./employees.json')
    .then((res) => res.json())
    .then((data) => {
      if (calisankontrol != false) {
        let output = '<h1> Çalışan Listemiz <h1/><br/>';
        data.map(
          (calisan) =>
            (output += `
    <ul style="list-style-type: none">
    <li>ID'si: ${calisan.id} </li>
    <li>Adı:  ${calisan.name} </li>
    <li>Soyadı:  ${calisan.surname} </li>
    <li>Emaili:  ${calisan.email} </li>
    </ul>
  `)
        );
        console.log(output);
        cikti.innerHTML = output;
        calisankontrol = false;
      } else {
        var output = '';
        cikti.innerHTML = output;
        calisankontrol = true;
      }
    })
    .catch((err) => console.log(err));
}

function apiGetirFunc() {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       let output = '<h2>Postlar</h2>';
  //       data.map(
  //         (api) =>
  //           (output += `

  //         <div class="bg-dark text-light">
  //         <h3>${api.title}</h3>
  //         <p>${api.body}</p>
  //         </div>
  //         `)
  //       );
  //       cikti.innerHTML = output;
  //     });
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      let output = `<h2>Postlar</h2>
      <div class="row">`;
      data.map(
        (api) =>
          (output += `
        <div class="col-md-3 my-5">
        <div class="card" style="width: auto; height:300px">
  <div class="card-body">
    <h5 class="card-title">${api.title}</h5>
    
    <p class="card-text">${api.body}</p>
    <a href="#" class="card-link">Detay</a>
   
  </div>
</div>
        
        </div>
        `)
      );
      cikti.innerHTML = output + '</div>';
    });
}

function postOlusturfunc(e) {
  e.preventDefault();
  console.log('submit yapıldı');

  let baslik = document.getElementById('title').value;
  let govde = document.getElementById('body').value;
  //   console.log(title, body);

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: baslik,
      body: govde,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
