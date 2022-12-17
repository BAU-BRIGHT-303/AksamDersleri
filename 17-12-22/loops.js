// LOOPS -- Döngüler

//for döngüsü

for (let index = 0; index < 50; index++) {
  //   console.log("Barbaros");
  console.log(index + 1);
}

const metin = prompt("Lütfen bir isim giriniz");
const adet = prompt("Lütfen tekrar sayısını giriniz");

for (let index = 0; index < adet; index++) {
  console.log(metin);
}
