//DOM YAPISI

/*
Açlımı document object model olan yapıdır. hTML sayfalarımızda döküman içerisinde bulunan objelerimize kolay erişim sağlanması ve üzerinde işlemler gerçekleştirilmesi yani manipüle edilmesini sğalayan yapıdır.
*/

/*Dom vasıtasıyla bütün html elementlerine erişim sağlayabiliyoruz.
Html etiketi de dahil olmak üzere tüm elementler ve bu elementlerin kapsayıcılarının da kapsayıcısı document modelidir. Hiyerarşinin en ucu html ile başlıyor ve head ve body olmak üzere ikiye ayrılıyor. Bunlar da kendi içerilerinde alt dallara ayrılmaktadır. Yani aynı segmentte bulunan (kardeş olan) elementler olduğu gibi, parent-child melesi de gerçekleşebilmektedir. 

Node dediğimiz düğüm kavramı da burada devreye girmektedir. her element bir düğümdür. 

*/

// console.log(document);

// console.dir(document);
// console.dir(document.domain);
// console.dir(document.title);

// document.title = "Paşa Esnedi";

// console.log(document.all[10]);

// document.all[10].textContent = "Diziler Nesnesi";

// document.getElementById("header-baslik").textContent = "Yeni Başlık Hazırlandı";
//  document.getElementById("header-baslik").innerText =
//   "Yeni Başlık İkinciye Hazırlandı";

console.log(document.getElementById("header-baslik").textContent);
console.log(document.getElementById("header-baslik").innerText);

document.getElementById("header-baslik").innerHTML =
  '<h2 class="text-danger">Stili Değiştirilmiş Başlık</h2>';
