var form = document.querySelector('#ekle');

var ul = document.querySelector('#nesneler');

form.addEventListener('submit', kaydet);

ul.addEventListener('click', silmefunc);

function kaydet(e) {
  // tarayıcının submit esnasında varsayılan eylemi varsayılan davranışı sayfayı yenilemektir. Fakat sayfayı yenilerken inputlara girmiş olduğumuz veriler de kaybolur. Biz bu verilerin kaybolmasını istemiyoruz. Bu veriler sayfamızda kalsın ve bu verilerle alt kod bloklarında işlemler yapalım istiyoruz. Bu yüzden bizim tarayıcının varsayılan bu davranıştan kaçınmasını istememiz gerekiyor. Bunun için kullandığımız metodun adı e.preventDefault() idir.
  e.preventDefault();

  //Burada inputumuzun içerisine yazmış olduğumuz veriyi bir değişkende tutmak adına önce nesne adını verdiğimiz input eriştik ardından burada yazan değere yani value'ya eriştik.
  var newItem = document.getElementById('nesne').value;
  console.log(newItem);

  //eriştiğimiz bu değeri yeni bir li elementine ekleyebilmek adına öncelikle bir li elementi oluşturduk.
  var liItem = document.createElement('li');

  //yeni oluşturduğumuz bu li elementi için mevcut li class'ının da atamasını yapmalıyız. bu yüzden şu komutu yazıyoruz.

  liItem.className = 'list-group-item';
  console.log(liItem);

  //Bizim li elementimiz içerisinde görünmesini istediğimiz yazı üst kodlarda newItem olarak değişkende tuttuğumuz inputtan gelen value değeri olacaktır. Bu yüzden innerText komutunu kullandık.

  liItem.innerText = newItem;

  var silmeButon = document.createElement('button');
  silmeButon.className = 'btn btn-danger float-end delete';
  silmeButon.textContent = 'X';

  liItem.appendChild(silmeButon);
  console.log(liItem);

  ul.appendChild(liItem);

  document.getElementById('nesne').value = '';
}

function silmefunc(e) {
  if (e.target.classList.contains('delete') == true) {
    if (confirm('Emin Miyiz?')) {
      var liItem = e.target.parentElement;
      ul.removeChild(liItem);
    }
  }
}
