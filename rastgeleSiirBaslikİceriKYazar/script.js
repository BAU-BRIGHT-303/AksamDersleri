const siir = [
  {
    yazar: "Turgut Uyar",
    baslik: "Vaiz Sokak No. 70",
    icerik:
      "Ben sana kürk alamam doğrusu, güzel bileklerine bilezik alamam, bir kap yemek, bir elbise, öyle bir tad var ki fakirliğimizde, başka hiçbir şeyde bulamam...",
  },
  {
    yazar: "Cemal Süreya",
    baslik: "Sevgilim Ben Şimdi",
    icerik:
      "Sevgilim ben şimdi büyük bir kentte seni düşünmekteyim, elimde uçuk mavi bir kalem cebimde iki paket sigara, hayatımız geçiyor gözlerimin önünden, çıkıp gitmelerimiz, su içmelerimiz, öpüştüklerimiz...",
  },
  {
    yazar: "Nazım Hikmet",
    baslik: "Ne Güzel Şey Hatırlamak Seni",
    icerik:
      "Ne güzel şey hatırlamak seni. Sana tahtadan bir şeyler oymalıyım yine: bir çekmece bir yüzük, ve üç metre kadar ince ipekli dokumalıyım. Ve hemen fırlayarak yerimden penceremde demirlere yapışarak hürriyetin sütbeyaz maviliğine sana yazdıklarımı bağıra bağıra okumalıyım.",
  },
  {
    yazar: "Edip Cansever",
    baslik: "Gül Kokuyorsun",
    icerik:
      "Gül kokuyorsun bir de, amansız, acımasız kokuyorsun. Gittikçe daha keskin kokuyorsun, daha yoğun. Dayanılmaz bir şey oluyorsun, biliyorsun. Hırçın hırçın, pembe pembe. Öfkeli öfkeli gül. Gül kokuyorsun nefes nefese.",
  },
  {
    yazar: "Can Yücel",
    baslik: "Bir Sen Eksiktin Ay Işığı",
    icerik:
      "Bileklerimizi morartmış yeni Alman kelepçeleri, Otobüsün kaloriferleri bozuldu Kaman'dan sonra. Sekiz saat oluyor karbonatlı bir çay bile içemedik, Başımızda pirensip sahibi bir başçavuş. Niğde üzerinden Adana Cezaevine gidiyoruz...",
  },
];

let txtYazar = document.getElementById("yazarIsmi");
let txtBaslik = document.getElementById("siirBaslik");
let txtIcerik = document.getElementById("siirIcerik");
let rndSiir = document.getElementById("rastgeleSiir");

let secilenSiir;

function rastgeleSiirGetir() {
  secilenSiir = siir[Math.floor(Math.random() * siir.length)];

  txtYazar.textContent = secilenSiir.yazar;
  txtBaslik.textContent = secilenSiir.baslik;
  txtIcerik.textContent = secilenSiir.icerik;
}

rndSiir.addEventListener("click", rastgeleSiirGetir);
