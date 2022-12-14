// window.alert("S.A");
// console.log("S.A");

//yorum satırı bu şekilde yazılmaktadır.
/*
Çoklu
Yorum
Satırı
*/

/*Veri Tipleri
String --> Metinsel İfadeler,
Number --> Sayısal İfadeler,
boolean --> True ya da False dönen karar ifadeleri
object --> nesne,
undefined --> tanımlanamayan veri tipi,
null --> boş (henüz tanımlanmamış veriler)
*/

/*
Değişken tanımlama ifadeleri
var,
let,
const
*/

//Aşağıda değiştirilemez bir değişken tanımladık. Ve bu değişkene tanımladığımız anda bir değer ataması yaptık. Finalde de konsol ekranımızda bu değeri yazdırmak istedik.
// const pi = 3.14;
// console.log(pi);

// var sayi = 5;
// console.log(sayi);

// sayi = 10;
// console.log(sayi);
//Type of kullanarak değişkenlerimizin tiplerini öğrenebiliyoruz.
// console.log(typeof sayi);

//String,number,boolean değerleri atayalım.
// let name = "Yiğit";
// var surname = "Paşa";
// let age = 24;
// var isADeveloper = true;

// console.log(name, surname, age, isADeveloper);

// window.prompt("Lütfen Adınızı Girin");

//Kullanıcının veri girişi yapacağı basit bir kutucuk gösterimi sağlamak için prompt özelliği kullanılmaktadır.
// var isim = prompt("İsminiz Nedir?");
// console.log(isim);

//Değişken atamaları yaparken başlarında kullanmış olduğumuz tip yani (var,let,const) arasında belli başlı farklar bulunmaktadır. const dediğimiz yapı sabit değişkenler için kullanılıyor olup değişken oluşturma aşamasında değeri atanır ve bu değer bir daha değiştirilemez. var ve let ile alakalı konu ise şöyledir. İkisini de kullanarak değişken ataması yapılabilir. Ve bu değişkenlerin değerleri alt satırlarda değiştirilebilir. Fakat var ile ataması yapılan bir değişken alt satırlarda var kullanılarak tekrardan yeni bir değer alabilirken, let ön ekiyle ataması yapılan bir değişkende aynı durum geçerli değildir.

var nesne1 = "Bardak";
nesne1 = "Su";

var nesne1 = "Sürahi";
console.log(nesne1);

let nesne2 = "Süt";
console.log(nesne2);
nesne2 = "kahve";
console.log(nesne2);
//Tanımlamada gördüğümüz üzere let ikinci defa aynı scope içerisinde kullanılarak yeniden bi değişkene ön ek olamaz!!!!!!
// let nesne2 = "Kupa"
