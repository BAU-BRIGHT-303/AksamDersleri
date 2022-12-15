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

console.log(x);

// y = x;

// console.log(y);

// JS eşitlik kontrollerinde karar yapıları gibi kullanılmaktadır.

var sayi = 5;

console.log(sayi == "5"); // output --> true döner
console.log(sayi === "5"); // output --> false döner çünkü burada içindeki türün de kontrolü sağlanmaktadır.

//Değişken ataması yapılırken dikkat edilmesi gereken konular

// Case sensitive
// cse sensitive büyük küçük harf duyarlılığı anlamındadır ve değişken ataması yaparken buna dikkat edilmesi gerekmektedir.
var cumle = "wissen akademie";

console.log(cumle);

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
console.log(20 + 10);
console.log(x + y);
console.log(z);
console.log(x - y);
console.log(x ** 3);
console.log(x % 3);

x++; // --> x = x + 1
console.log(x);

x += 1;

console.log(x);

const ondalikliSayi = 1.08;
console.log(ondalikliSayi);

var sayi3 = 5;

console.log("Sayımızın değeri: " + ondalikliSayi * sayi3);

console.log(`Sayımızın değeri: ${sayi3} sşldadşdljasd \nalt satıra geç`);

// kaçış ifadeleri
// \n \t " ' '"

//String concatination
//1- plus operator

var ad = "Barbaros";
let soyad = "Ciga";

var adSoyad = ad + " " + soyad;
console.log(adSoyad);

var baslangic = "Selam";
let devam = " ben Barbaros";

baslangic += devam;

console.log(baslangic);

console.log(baslangic.length);

console.log(baslangic[0]);

console.log(baslangic[baslangic.length - 1]);
console.log(baslangic[17]);

//stringler immutable'dır.

baslangic = "falan filan";
console.log(baslangic);

baslangic[0] = "x";
console.log(baslangic);

//DİZİLER
