//Matematik sınıfı fonksiyonları

//Random fonksiyonu

console.log(Math.random());

var dizi = [1, 2, 5, 645, 47, 213, 20, 0];
//Diziden minimum değer çağırma
// console.log(Math.min.apply(Math, dizi));

//Minimum değeri bulma
dizi.sort();
console.log(dizi[0]);

//Math yuvarlama metotları

//yakın olduğu rakama yuvarlama
console.log(Math.round(4.5));
//bir üst rakama yuvarlama
console.log(Math.ceil(4.7));
//bir alt rakama yuvarlamak için
console.log(Math.floor(4.8));
