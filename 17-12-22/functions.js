//Functions

// function selamlama() {
//   window.alert("Hoşgeldiniz");
// }

// selamlama();

// function selamlama1(a = "Yiğit") {
//   window.alert("S.a " + a);
// }

// selamlama1("Barbaros");

// var user = prompt("Lütfen adınızı giriniz");

// function Kullanici(a = "guest") {
//   if (user == "") {
//     alert(`Hoşgeldiniz guest`);
//   } else {
//     alert(`Hoşgeldiniz ${a}`);
//     // alert("Hoşgeldiniz " + a)
//   }
// }

// Kullanici();

// var sayi1 = parseInt(prompt("Sayı Giriniz"));
// var sayi2 = parseInt(prompt("Sayı Giriniz"));

// function Topla(a, b) {
//   var toplam = a + b;
//   alert(toplam);
// }

// Topla(sayi1, sayi2);

//Bilgisayarın ve kullanıcının karşılıklı saldırdığı, toplam 100'er canlarının olduğu ve her saldırı için kullanıcıya promt üzeirnden saldır yazdırılmasıyla saldırı yaptırdığı, canlardan biri sıfıra geldiğinde oyunun bittiği bir oyun yazınız. Saldırılarınız ıska geçebilir.

var can = 100;
var pcCan = 100;
var saldirigucu = 0;
while (can > 0 && pcCan > 0) {
  var saldir = prompt("Saldırmak için s yazınız");
  if (saldir.toLowerCase() == "s") {
    var rastgele = Math.floor(Math.random() * 10) + 1;
    if (rastgele > 9) {
      alert("Saldırınız başarısız oldu ve bilgisayar saldırdı");
      can -= 10;
      alert(`Canınız: ${can}. Bilgisayarın canı: ${pcCan}`);
    } else {
      alert("Saldırınız başarılı oldu ve bilgisayar saldıramadı");
      var saldiriTipiNo = Math.floor(Math.random() * 10) + 1;
      if (saldiriTipiNo < 4 && saldiriTipiNo >= 0) {
        saldirigucu = 30;
        alert(`${saldirigucu} vurdunuz.`);
      } else if (saldiriTipiNo < 8 && saldiriTipiNo >= 4) {
        saldirigucu = 20;
        alert(`${saldirigucu} vurdunuz.`);
      } else {
        saldirigucu = 10;
        alert(`${saldirigucu} vurdunuz.`);
      }
      pcCan -= saldirigucu;
      alert(`Canınız: ${can}. Bilgisayarın canı: ${pcCan}`);
    }
  } else {
    alert("Lütfen saldırmak için 's' yazınız.");
  }
}
if (can <= 0) {
  alert("Kaybettiniz");
}
if (pcCan <= 0) {
  alert("Kazandınız");
}
