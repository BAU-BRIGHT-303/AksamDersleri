//Karar Yapıları

var x = 0;
if (x > 10) {
  console.log("x 10'dan büyüktür.");
} else {
  console.log("x 10'dan küçüktür ya da eşittir.");
}

// if (condition) {
// } else if (condition2) {
// } else {
// }

// kullanıcıdan notunu isteyen ve aldığı nota göre ekranda aldığı notun harf karşılığını alarm olarak gösteren bir JS programı yazınız. Notlar 0-50 arası FF, 50-60 aracı DC, 60-70 arası CC, 70-80 arası BB, 80-100 arası AA.

// var sayi = parseInt(prompt("Lütfen bir sayı giriniz"));

// if (sayi > 100 || Number.isInteger(sayi) != true) {
//   window.alert("Lütfen Doğru Bir Değer Giriniz");
// } else {
//   if (sayi <= 100 && sayi >= 80) {
//     window.alert("AA");
//   } else if (sayi < 80 && sayi >= 70) {
//     window.alert("BB");
//   } else if (sayi < 70 && sayi >= 60) {
//     window.alert("CC");
//   } else if (sayi < 60 && sayi >= 50) {
//     window.alert("DC");
//   } else {
//     window.alert("FF");
//   }
// }

// kullanıcıdan istenen yaş bilgisi ve ehliyet bilgisinden gelen cevaba göre araba kullanıp kullanamayacağını kontrol edip buna göre cevap dönen bir uygulama yazalım.

// const age = parseInt(prompt("Lütfen Yaşınızı Giriniz"));

// if (age < 18) {
//   window.alert("Araç kullanmak için yaşınız tutmamaktadır");
// } else {
//   const ehliyetKontrol = prompt("Ehliyetiniz var mı?");
//   var ehliyet = ehliyetKontrol.toLowerCase();

//   if (ehliyet == "evet") {
//     window.alert("Araç kullanabilirsiniz");
//   } else {
//     window.alert("Araç kullanamazsınız");
//   }
// }

//Switch-Case yapısı

// let zodiac = prompt("Lütfen burcunuzu giriniz").toLowerCase();

// switch (zodiac) {
//   case "koç":
//     window.alert("dürüst");
//     break;
//   case "balık":
//   case "yengeç":
//     window.alert("ağlak");
//     break;
//   case "terazi":
//   case "aslan":
//     window.alert("egolu");
//     break;
//   case "boğa":
//     window.alert("kindar");
//     break;
//   case "başak":
//     window.alert("düzenli");
//     break;
//   case "akrep":
//     window.alert("çözüm odaklı");
//     break;
//   default:
//     window.alert("genel yalan burç özellikleri");
//     break;
// }
