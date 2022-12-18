// LOOPS -- Döngüler

//for döngüsü

// for (let index = 0; index < 50; index++) {
//   console.log("Barbaros");
// console.log(index + 1);
// }

// const metin = prompt("Lütfen bir isim giriniz");
// const adet = prompt("Lütfen tekrar sayısını giriniz");

// for (let index = 0; index < adet; index++) {
//   console.log(metin);
// }

//Sıfırdan 100'e kadar 3'e bölünebilen sayılardan oluşan bir dizi oluşturup bu diziyi konsolda yazdırınız

// var arr1 = [];

// for (let index = 0; index < 100; index++) {
//   if (index % 3 === 0) {
//     arr1.push(index);
//   }
// }
// console.log(arr1);

// //While - Do While
// let i = 1;
// while (i < 20) {
//   console.log(i);
//   i++;
// }

// kullanıcıdan iki sayı isteyip bunların toplamını yazdıran, sonra tekrar iki sayı istemeye devam edip her defasında toplayan bir program yazınız. Çıkış için herhangi bir tuş belirleyip o girildiğinde çıkış veriniz.

// while (true) {
//   let sayi1 = prompt("Lütfen Birinci Sayıyı Giriniz");
//   let sayi2 = prompt("Lütfen ikinci sayıyı giriniz");
//   alert(Number(sayi1) + Number(sayi2));
//   let karar = prompt("Çıkış Yapmak İster Misiniz?");
//   if (karar.toLowerCase() == "evet") {
//     break;
//   }
// }

// BOM oyunu gerçekleştirilecek. JS ile deneyiniz. Sizden bir BOM Katsayısı istenecek. Oyunu bilgisayar başlatacak. Bilgisayar ekranda 1 yazdıracak. Sonra sıra size geçecek. Siz de bilgisayarın yazdığı rakamdan 1 arttırarak veri girişi yapacaksınız. Eğer sıra BOM katsayısına gelirse, ve sıra sizdeyse inputa "BOM" yazmanız gerekmektedir. Eğer BOM yazmazsanız kaybedersiniz. Ya da diğer bir kaybetme seçeneği; bilgisayarın yazdığı rakamdan bir fazlasını yazamazsanız yani yazmanız gereken rakamı yazamazsanız bu durumda da kaybedeceksiniz. Oyun 100'e gelince biter. Ve kaybetmemişseniz oyun berabere yazacaktır.

//Do while
// var x = 1;
// do {
//   console.log(x);
//   x++;
// } while (x < 10);

const islemler = [
  {
    id: 1,
    islem: "Uyan",
    yapildiMi: true,
  },
  {
    id: 2,
    islem: "Kahvaltı Yap",
    yapildiMi: true,
  },
  {
    id: 3,
    islem: "Spora Git",
    yapildiMi: false,
  },
  {
    id: 4,
    islem: "Derse Gir",
    yapildiMi: true,
  },
  {
    id: 5,
    islem: "Ödevleri Yap",
    yapildiMi: false,
  },
  {
    id: 6,
    islem: "Öğle Yemeği Ye",
    yapildiMi: false,
  },
];

for (let item of islemler) {
  console.log(item);
}

for (let x of islemler) {
  console.log(x.islem);
}

//foreach döngüsü kullanılarak fonksiyonel döngü işlemleri gerçekleştirilmektedir. Burada dikkat edilmesi gereken konu function'a parametre olarak girdiğimiz hayali değer function'ın scope'u içerisinde geri çağırılacaktır. Bu faaliyet alanı dışında bir şey ifade etmemektedir. Biz bu hayali değere callback demekteyiz.

islemler.forEach(function (todo) {
  console.log(todo.islem);
});

//map. map işlemi tıpkı foreach gibi davranmaktador. Döngüsel işlemleri fonksiyonlar kullanarak oluşturmaya yarar. foreach'ten farklı olarak bize react gibi kütüphanelerde kullanmamıza yönelik return verir.

const islemLerDetay = islemler.map(function (todos) {
  return todos.islem;
});

console.log(islemLerDetay);

//filter

const todoListYapilanlar = islemler.filter(function (done) {
  return done.yapildiMi === true;
});

console.log(todoListYapilanlar);

const yapilmisIslemler = islemler
  .filter(function (yapilanlar) {
    return yapilanlar.yapildiMi === true;
  })
  .map(function (yapilmisIslem) {
    return yapilmisIslem.islem;
  });

console.log(yapilmisIslemler);
