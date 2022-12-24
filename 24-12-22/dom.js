//DOM YAPISI

/*
Açlımı document object model olan yapıdır. hTML sayfalarımızda döküman içerisinde bulunan objelerimize kolay erişim sağlanması ve üzerinde işlemler gerçekleştirilmesi yani manipüle edilmesini sğalayan yapıdır.
*/

/*Dom vasıtasıyla bütün html elementlerine erişim sağlayabiliyoruz.
Html etiketi de dahil olmak üzere tüm elementler ve bu elementlerin kapsayıcılarının da kapsayıcısı document modelidir. Hiyerarşinin en ucu html ile başlıyor ve head ve body olmak üzere ikiye ayrılıyor. Bunlar da kendi içerilerinde alt dallara ayrılmaktadır. Yani aynı segmentte bulunan (kardeş olan) elementler olduğu gibi, parent-child melesi de gerçekleşebilmektedir. 

Node dediğimiz düğüm kavramı da burada devreye girmektedir. her element bir düğümdür. 

*/

// console.log(document);

// console.dir(document);
// console.dir(document.domain);
// console.dir(document.title);

// document.title = "Paşa Esnedi";

// console.log(document.all[10]);

// document.all[10].textContent = "Diziler Nesnesi";

// document.getElementById("header-baslik").textContent = "Yeni Başlık Hazırlandı";
//  document.getElementById("header-baslik").innerText =
//   "Yeni Başlık İkinciye Hazırlandı";

// console.log(document.getElementById('header-baslik').textContent);
// console.log(document.getElementById('header-baslik').innerText);
// console.log(document.getElementById('header-baslik').innerHTML);

//text content ile erişimimiz kullanıcı görmese bile ilgili alanda bulunan metnin tamamını kapsamaktadır. InnerText için bu durum geçerli değildir. InnerText ile UI(User Interface) ekranında görüntülediğimiz kadar içerik görüntülüyoruz. Inner HTML içerisinde ise içerikteki HTML yapısını komple html kodu yazar gibi değiştiriyoruz.
// document.getElementById('header-baslik').innerHTML =
//   '<h2 class="text-warning">Stili Değiştirilmiş Başlık</h2>';
// console.log(document.getElementById('header-baslik').innerHTML);

let headerTitle = document.getElementById('header-baslik');

//burada erişim sağlamış olduğumuz başlığı bir değişkende tuttuk. Yani html'de bu satıra denk gelen herşey bir değişken içinde saklandı.
console.log(headerTitle);

//değpişkende saklamış olduğumuz bu html elementinin içine += diyerek yeni eklemek istediğimiz html özelliklerini eklemiş olduk.
headerTitle.innerHTML += '<h3>Bu da benim ikinci başlığım olsun</h3>';
console.log(headerTitle);

//sadece stil özelliklerine erişebilmek için style propunu kullandık. burada dikkat edilecek husus çift kelimeli özellik isimleri arada tire olarak değil, camel case yazım ile belirtilecektir.
headerTitle.style.borderBottom = '3px solid springgreen';
headerTitle.style.border = '3px dashed crimson';
headerTitle.style.fontWeight = 700;

//aynı zamanda class isimleri ile de elementlere erişimimiz mevcuttur. Bu erişim yönteminde bir class ismi birden fazla elementte bulunabildiği için bize bir htmlcollection üzerinden erişim imkanı sağlanacaktır. htmlcollection yapısı da aynı isimdeki classları birer index numarası vererek sıralayacaktır. ya index numaraları üzerinden değişiklik sağlarız ya da hepsine aynı özelliği vereceksek for döngüsü ile işi tamamlarız.
let nesneler = document.getElementsByClassName('list-group-item');

console.log(nesneler);
console.log(nesneler[1]);

for (let index = 0; index < nesneler.length; index++) {
  nesneler[index].style.backgroundColor = 'darkgray';
  nesneler[index].style.color = 'crimson';
  nesneler[index].style.fontWeight = 'bold';
}

// sadece ilgili element adı yani tagname ile de erişim sağlanmaktadır.
var liItems = document.getElementsByTagName('li');
console.log(liItems);

// Query Selector

//querySelector ile yukarıdaki erişim belirteçlerimizi nasıl kullanıyorsak aynı şeyleri yapma imkanına sahibiz. Sadece erişmek istediğimiz şey bir id ise diyez işareti, class ise nokta işareti sadece bir tag ise herhangi bir noktalama işareti olmadan erişim sağlayacağız. Fakat querySelector bize tek bir nesne getirir. Bu da ilk ulaştığı elemandır. Eğer tüm  elemanlara ulaşmak istiyorsak querySelectorAll erişim belirtecini kullanmak zorundayız.
var header = document.querySelector('#ana-header');
console.log(header);

var liElementleri = document.querySelector('li');
console.log(liElementleri);

var listGroups = document.querySelector('.list-group-item');
console.log(listGroups);

header.style.border = '2px solid blueviolet';

let veriGiris = document.querySelector('input');
console.log(veriGiris);

veriGiris.placeholder = 'Html Dom Öğreniyorum';
// veriGiris.value = 'Barbaros';

var buton = document.querySelector('input[type="submit"]');
console.log(buton);

buton.value = 'YOLLA';

let listeElemanlari = document.querySelectorAll('li');
console.log(listeElemanlari);

var sonNesne = document.querySelector('.list-group-item:last-child');
console.log(sonNesne);

//ikinci çocuk yani bir listedeki ikinci elemanı çağırmak
var ikinciCocuk = document.querySelector('.list-group-item:nth-child(2)');
console.log(ikinciCocuk);

var tekler = document.querySelectorAll('li:nth-child(odd)');
var ciftler = document.querySelectorAll('li:nth-child(even)');

for (let index = 0; index < tekler.length; index++) {
  tekler[index].style.backgroundColor = 'blueviolet';
  tekler[index].style.color = 'white';
}

for (let index = 0; index < ciftler.length; index++) {
  ciftler[index].style.backgroundColor = 'white';
  ciftler[index].style.color = 'blueviolet';
}

// parent  - child ilişkisi

var nesneListesi = document.querySelector('#nesneler');

// aynı seviyedeki elementler kardeş elementlerdir. komşu elementler de denir. Fakat bir üst seviyesinde bulunan yani kapsayıcı olan element bu alt elementlerin parent elementi olarak geçmektedir. Biz erişim sağladığımız bir elementin bir üst elementine yani kapsayıcısına yani parentına erişmek istiyorsak parentNode özelliğini kullanmaktayız.

console.log(nesneListesi.parentNode);
nesneListesi.parentNode.style.backgroundColor = 'orangered';

//child nodes kullanımı da alt elementlere erişim sağlamak için yapılmaktadır. Fakat burada gelenler sadece elementler değil içindeki text yapısı da dahil sunulmaktadır. O yüzden doğru kullanımı için

console.log(nesneListesi.childNodes[1]);

console.log(nesneListesi.firstElementChild);
console.log(nesneListesi.lastElementChild);

// nesneListesi.lastElementChild.textContent = 'Merhaba ben son nesne';

console.log(nesneListesi.nextElementSibling); // buradan alacağımız çıktı null olacaktır. Çünkü kendinden sonra gelen bir kardeşi bulunmamaktadır.

console.log(nesneListesi.previousElementSibling); // buradan alacağımız çıktı kendinden bir önce gelen (previous) kardeşidir. Bu da h3 elementine denk gelmektedir.

// yeni bir div oluşturma

let yeniDiv = document.createElement('div');

// divimize bir id ekleyelim

yeniDiv.id = 'yeniDivID';

//özellik ekleyelim

yeniDiv.setAttribute('baslik', 'yeniDivBaslikDegeri');

//Text ekleyelim

var yeniDivText = document.createTextNode('Selamlar Ben Yeni Div Elementi');

//yeni dive yeni oluşturduğumuz texti atayalım

yeniDiv.appendChild(yeniDivText);

console.log(yeniDiv);

//burda yeni oluşturmuş olduğumuz divi konumlandırabilmek için uygun olan konteynırımızı seçtik. Fakat queryselector kullanırken birden fazla konteynır olma durumu için spesifik olarak ekleme yapacağımız alanı belirtmemiz için css yazarken kullandığımız metot şeklinde boşluklar vererek asıl noktaya eriştik.
var konteynir = document.querySelector('header .container');
console.log(konteynir);

var headerh2 = document.querySelector('header h2');

//artık divimizi istediğimiz konteynırın içine konumlandırmaya hazırız. Bu div içinde en sona eklemek istiyorsak appendChild komutunu kullanıyoruz. Ya da başka bir elementin öncesine eklemek istiyorsak burda da insertBefore komutu ile spesifik olarak hangi elementten önce ekleme işlemini gereçekleştirmek istediğimizi belirtiyoruz.
// konteynir.appendChild(yeniDiv);
konteynir.insertBefore(yeniDiv, headerh2);

// eventlere giriş - click eventi - tıklama olayı

//eventler click, change başta olmak üzere türlü seçenekleri bulunan dom yapısının bize kattığı html sayfamızı dinamik olarak değiştirip geliştirebilmek adını kullandığımız güçlü yapılardır. Bunlara erişim için yaptığımız şey örneğin bir tıklama operasyonu gereçekleşecekse butona, içerik girilen bir yazının veri olarak tutulması ise bir inputa, ya da mouse hareketlerinin işimize yarayabileceği herhangi bir alandaki değişikliğin tutulup kaydedilmesi ise o olana erişmektir. Sonrasında bu olayı yani eventi bildirmemiz gerekiyor. Bunun için addEventListener adını verdiğimiz özelliği erişim belirteci sonuna ekliyoruz ve parantez açıp iki adet parametre giriyoruz. İlk parametre olayın ne olduğu yani bir click eventimi yoksa bir change eventimi gibi belirityoruz, ikinci parametre olarak ise bu event gerçekleştiğinde sayfamızda  nasıl bir operasyon yapılacaksa bunun tanımlandığı fonksiyondur. Fonksiyonun doğrudan ikinci parametre olarak yazılıp görsel anlamda kodun okunabilirliğini düşürmektense sadece fonksiyonun adını yazıp alt ya da üst kısımlarda bu fonksiyonu tanımlamamız daha uygun olacaktır. Sonrasında şuana kadar öğrenmiş olduğumuz tüm manüpilasyon teknikleri aynı şekilde geçerli olacaktır.
var butonEvent = document
  .querySelector('#buton')
  .addEventListener('click', tiklama);

document.querySelector('#buton').setAttribute('href', 'http://www.google.com');

function tiklama() {
  document.getElementById('yazi').textContent = 'Tıklama Olayı Gerçekleşti';
  document.getElementById('main').style.backgroundColor = 'crimson';
}

// var secim = document.querySelector('select');

// secim.addEventListener('change', olay);

function olay(e) {
  console.log(e.target.value);
}

// mouse eventleri click dışında da js oyunlarında mouse hareketleri ve bulunduğu eksenleri kontrol edebilmek için kullanılmaktadır. örneğin aşağıdaki örnekte boş bir div içerisinde mouse'un x ve y eksenlerindeki hareket ettiği hiza noktalarını gösteren bir komut yazdık. mousemove ilgili alanda mouse'un tüm hareketlerini kapsayan bir eventtir, mouseenter ilgili alana mouse giriş yaptığında bir kere çalışan bir eventtir, leave ise çıkış yaptığında bir kere çalışan bir eventtir.
var input = document.querySelector('input').addEventListener('change', olay);

var kutu = document.querySelector('#kutu');
var cikis = document.querySelector('#cikis');

kutu.addEventListener('mouseenter', mousefunc);
kutu.addEventListener('mouseleave', mousefunc);
kutu.addEventListener('mousemove', mousefunc);

function mousefunc(e) {
  console.log('Olayımız ' + e.type);
  cikis.innerHTML = `<h3> X ekseni: ${e.offsetX} </h3><h3> Y ekseni: ${e.offsetY} </h3>`;
}
