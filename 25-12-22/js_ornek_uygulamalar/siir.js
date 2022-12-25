var siirler = [
  {
    name: 'Sonrası Kalır',
    alinti:
      'Hayaller kuruyor çaresiz, sonra da arşınlıyor hayallerini\nBir iki yapıyor bunu, derken bırakıyor',
    sairadi: 'Edip Cansever',
  },
  {
    name: 'Hayatın Anlamı',
    alinti: 'Acı çektiren bir sevgi, insanca bir sevgi değildir.',
    sairadi: 'Lev Tolstoy',
  },
  {
    name: 'Geyikli Gece',
    alinti:
      'Halbuki korkulacak hiçbir şey yoktu ortalıkta\nHerşey naylondandı o kadar\nVe ölünce beş on bin birden ölüyorduk güneşe karşı',
    sairadi: 'Turgut Uyar',
  },
  {
    name: "Güzelliğin On Par'etmez",
    alinti: "Güzelliğin on par'etmez Bu bendeki aşk olmasa",
    sairadi: 'Aşık Veysel Şatıroğlu',
  },
  {
    name: 'Anlatamıyorum',
    alinti:
      'Ağlasam sesimi duyar mısınız, Mısralarımda;Dokunabilir misiniz, Göz yaşlarıma, ellerinizle?',
    sairadi: 'Orhan Veli Kanık',
  },
  {
    name: 'Etki ve Tepki',
    alinti:
      'En iyilerimizin sonu genellikle kendi ellerinden olur sırf uzaklaşmak için, ve geride kalanlar birinin onlardan uzaklaşmayı neden isteyebileceğini bir türlü tam olarak anlayamazlar.',
    sairadi: 'Charles Bukowski',
  },
];

// console.log(siirler);
// console.log(siirler[1].name);

var buton = document.querySelector('button');
var sairadi = document.querySelector('#sairadi');
var siiradi = document.querySelector('#siiradi');
var alinti = document.querySelector('#alinti');

buton.addEventListener('click', getQuote);

var x = 75;

function getQuote() {
  var random = Math.floor(Math.random() * siirler.length);
  siiradi.textContent = siirler[random].name;
  sairadi.textContent = siirler[random].sairadi;
  alinti.textContent = siirler[random].alinti;
}
