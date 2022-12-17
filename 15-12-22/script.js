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

// var nesne1 = "Bardak";
// nesne1 = "Su";

// var nesne1 = "Sürahi";
// console.log(nesne1);

// let nesne2 = "Süt";
// console.log(nesne2);
// nesne2 = "kahve";
// console.log(nesne2);
//Tanımlamada gördüğümüz üzere let ikinci defa aynı scope içerisinde kullanılarak yeniden bi değişkene ön ek olamaz!!!!!!
// let nesne2 = "Kupa"

// değişken atamaları yapılırken atama sadece değişkenin oluşturulduğu esnada yapılmak zorunda değildir. Sonradan da alt satırlarda değişiklik yapılabilir;

var x;

x = 5;

x = "Barbaros";

// console.log(x);

// y = x;

// console.log(y);

// JS eşitlik kontrollerinde karar yapıları gibi kullanılmaktadır.

var sayi = 5;

// console.log(sayi == "5"); // output --> true döner
// console.log(sayi === "5"); // output --> false döner çünkü burada içindeki türün de kontrolü sağlanmaktadır.

//Değişken ataması yapılırken dikkat edilmesi gereken konular

// Case sensitive
// cse sensitive büyük küçük harf duyarlılığı anlamındadır ve değişken ataması yaparken buna dikkat edilmesi gerekmektedir.
var cumle = "wissen akademie";

// console.log(cumle);

// değişken isimlendirmesi yaparken ilk harf olarak rakam kullanmaya müsade etmez;

// var 2falan = "xy<" --> bu kabul edilen bir isimlendirme değildir. ve compiling esnasında hata verecektir.

// yine isimlndirme yaparken özel ifadeler kullanmayacağız.

// var cumle.bir = "birinci cümle" --> hata verecektir.

// var kelime_bir = "gibi"

// var ilkKelime; --> camelCase
// var IlkKelime --> PascalCase
// var ilk_kelime --> snake_case
// var ILK_KELIME --> LOUD_SNAKE_CASE

// document.getElementById("yazi").innerText = "ALPHA";

//Matematiksel Operatörler

var x = 20;
let y = 10;

let z = x + y;
// console.log(20 + 10);
// console.log(x + y);
// console.log(z);
// console.log(x - y);
// console.log(x ** 3);
// console.log(x % 3);

x++; // --> x = x + 1
// console.log(x);

// x += 1;

// console.log(x);

const ondalikliSayi = 1.08;
// console.log(ondalikliSayi);

var sayi3 = 5;

// console.log("Sayımızın değeri: " + ondalikliSayi * sayi3);

// console.log(`Sayımızın değeri: ${sayi3} sşldadşdljasd \nalt satıra geç`);

// kaçış ifadeleri
// \n \t " ' '"

//String concatination
//1- plus operator

var ad = "Barbaros";
let soyad = "Ciga";

var adSoyad = ad + " " + soyad;
// console.log(adSoyad);

var baslangic = "Selam";
let devam = " ben Barbaros";

baslangic += devam;

// console.log(baslangic);

// console.log(baslangic.length);

// console.log(baslangic[0]);

// console.log(baslangic[baslangic.length - 1]);
// console.log(baslangic[17]);

//stringler immutable'dır.

baslangic = "falan filan";
// console.log(baslangic);

baslangic[0] = "x";
// console.log(baslangic);

//String Metotları

// var name = "Gökhan Cingöz";
// console.log(name.length);

// içeriğin uzunluğunu ölçmek için kullandığımız metottur.

//metnin içerisinde belirtilmiş olan harf ya da kelimenin başladığı index numarasını veriyor.
// console.log(name.indexOf("kh"));

//birbirini tekrar eden ögelerin sonuncunun index numarasını verir.
// console.log(name.lastIndexOf("ö"));

//aynı işlemi yapan başka bir metot
//indexOf metodu gibi çalışmaktadır..
// console.log(name.search("an"));

// başlangıç ve bitiş index numaralarına göre belirtilen kısımdan parça almaya yarayan metot.

// console.log(name.slice(3, 8));

//yine slice metodu ile aynı işlevde başka bir metot

// console.log(name.substring(5, 12));

var message = "html,css,javascript,react";

//string içerisinde geçen ifadeleri değiştirmek için kullandığımız metot replace metodudur.
// console.log(message.replace("css", "scss"));

// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// var cumle = "Web ve Mobil";
// var cumle2 = "Programlama";

// var cumle3 = cumle.concat(" ", cumle2);

// console.log(cumle3);

//Split metodu ile elimizdeki string ifademizi bir dizi haline çevirebilmekteyiz. Burada parantez içerisinde yazmış olduğumuz ifade her ne ise ondan yola çıkarak her elemanı ayıracak ve bir dizi haline getirecektir.
// var arrayFirst = cumle3.split(" ");

// console.log(arrayFirst[0]);

//Diziler (Arrays)

let cars = ["BMW", "MERCEDES", "RENAULT", "PEUGEOT"];
// console.log(cars);

// console.log(cars[2]);

//nested array
// let array1 = [
//   [1, 3, 5, 7],
//   ["Barbaros", "Tuba", "Sezer"],
//   ["Sadri", "Gökhan", ["Renault", "Doblo", "TOGG"]],
// ];

// console.log(array1[1][1]);

// console.log(array1[2][2][2]);

// let array3 = [
//   [
//     ["Onur", "Yiğit", "Serhat", "Enes"],
//     [25, 25, 29, 24],
//     [67, 59, 47, 58],
//   ],
//   [
//     ["Sivas", "Kangal"],
//     ["İzmir", "Bomba"],
//     ["Çorum", "Leblebi"],
//     ["Kars", "Peynir"],
//   ],
// ];

// console.log(array3[1][2][1]);

//Dizi Metotları

// Diziye eleman ekleme metodu

// var dizi = ["Barbaros", "TUğBA", "Akşin"];
// console.log(dizi);

// dizi.push("Seyfi");
// console.log(dizi);

//Son elemanı silme komutu
// dizi.pop();
// console.log(dizi);

//İlk elemanı silme komutu
// dizi.shift();
// console.log(dizi);

// dizi.push("Burak");
// console.log(dizi);

//İlk elemanı add edeceğimiz komut
// dizi.unshift("Mesut Komser");
// console.log(dizi);

//sıralama için sort komutunu kullanıyoruz

// dizi.sort();
// console.log(dizi);

//tersine çevirmek için kullanacağımız komut

// dizi.reverse();
// console.log(dizi);

// delete dizi[0];
// console.log(dizi);
// dizi[0] = "Barbaros";
// console.log(dizi);

// // Array Concatination
// var dizi1 = ["Elma", "Armut", "Pasta"];
// var dizi2 = ["Araba", "Muz", "Toka"];

// const newDizi = dizi1.concat(dizi2);

// console.log(newDizi);

//Splice metodu
//Birden çok parametre alır ve aldığı parametrelere göre değişik özellikler gösteren bir metottur.

// var dizi3 = ["HP", "LOTR", "Avengers", "Batman"];

//burada kullandığımız parametreler şöyle çalışmaktadır. İlk parametre operasyona başlayacağımız index numarasını ister, ikinci parametre kaç adet eleman silmek istediğimizi ister, buradan sonra yazacağımız paramtreler bu operasyon sonrasında eklemek istediğimiz elemanları bahsetmiş olduğumuz indexten itibaren ekleyerek gider.
// dizi3.splice(2, 0, "Godfather");
// console.log(dizi3);

// dizi3.splice(2, 1);
// console.log(dizi3);

//Objects

const calisan = {
  isim: "Yiğit",
  soyisim: "Paşa",
  yas: 25,
  adres: {
    sokak: "Kennedy Cd.",
    mahalle: "Bakırköy",
    il: "İstanbul",
    ulke: "Türkiye",
  },
  yetenekler: ["Gitar", "Davul", "React", "Dba", "Dedüblüman"],
};

console.log(calisan);

console.log(calisan.adres.mahalle);

console.log(calisan.yetenekler[2]);

//Destruct Etme

const {
  isim,
  yas,
  adres: { il },
} = calisan;

console.log(isim);
console.log(il);

calisan.email = "y.pasa@gmail.com";
calisan.isim = "Yiğiiit";

console.log(calisan);

const rockBands = [
  {
    id: 1,
    name: "Metallica",
    genre: "Trash Metal",
    concertInTurkey: true,
  },
  {
    id: 2,
    name: "Disturbed",
    genre: "Nu Metal",
    concertInTurkey: false,
  },
  {
    id: 3,
    name: "Iron Maiden",
    genre: "Trash Metal",
    concertInTurkey: true,
  },
  {
    id: 4,
    name: "Blind Guardian",
    genre: "Power Metal",
    concertInTurkey: true,
  },
  {
    id: 5,
    name: "Rammstein",
    genre: "Heavy Metal",
    concertInTurkey: false,
  },
];

console.log(rockBands);

console.log(rockBands[3].name);

const JSONData = JSON.stringify(rockBands);
console.log(JSONData);
