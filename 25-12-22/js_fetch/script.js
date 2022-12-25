document.getElementById('yaziGetir').addEventListener('click', yaziGetirFunc);
var cikti = document.getElementById('cikti');

document
  .getElementById('calisanGetir')
  .addEventListener('click', calisanGetirFunc);

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
