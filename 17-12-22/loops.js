// LOOPS -- Döngüler

//for döngüsü

for (let index = 0; index < 50; index++) {
  //   console.log("Barbaros");
  console.log(index + 1);
}

// const metin = prompt("Lütfen bir isim giriniz");
// const adet = prompt("Lütfen tekrar sayısını giriniz");

for (let index = 0; index < adet; index++) {
  console.log(metin);
}

//Sıfırdan 100'e kadar 3'e bölünebilen sayılardan oluşan bir dizi oluşturup bu diziyi konsolda yazdırınız

var arr1 = [];

for (let index = 0; index < 100; index++) {
  if (index % 3 === 0) {
    arr1.push(index);
  }
}
console.log(arr1);

//While - Do While
let i = 1;
while (i < 20) {
  console.log(i);
  i++;
}

// kullanıcıdan iki sayı isteyip bunların toplamını yazdıran, sonra tekrar iki sayı istemeye devam edip her defasında toplayan bir program yazınız. Çıkış için herhangi bir tuş belirleyip o girildiğinde çıkış veriniz.
