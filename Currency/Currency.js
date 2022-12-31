var select = document.querySelectorAll("select");
var input = document.querySelectorAll("input");
let html = "";

// async ve await nedir? async ve await ES7 ile birlikte asenkron programlama yapmayı daha da kolay hale getiren anahtar kelimelerdir. async anahtar kelimesi fonksiyon sonucunun bir Promise olduğu belirtirken await ise sonucu Promise olan fonksiyonun bitmesini bekler.Diyelim ki bir hamburgerciye gittiniz ve kasada siparişinizi verdiniz. Kasiyer de size siparişinizi hazırladıklarında haber vermek üzere bir elektronik alet teslim etti. Şu anda hamburger bizim için gelecekte elde edebileceğimiz bir değer. Elimizdeki aygıt da bu değere ulaşmamız için müessesenin bize verdiği sözün (işte promise) bir göstergesi. Aygıt bildirim alıncaya kadar bekleme (pending) durumundadır. Bildirim geldiğinde ise ya hamburgerimiz başarılı (resolved) bir şekilde hazırlanmıştır, ya da beklenenin dışına çıkarak başarısız (rejected) olmuştur. Başarılı durumda afiyetle yemeğimize yumuluruz tabii ki. Başarısız durum biraz daha nahoş olacaktır. Kasiyerle kavga ederek veya yeniden sipariş vererek hatalı durumu yönetmemiz (error handling) gerekir.

async function currency() {
  const res = await fetch("https://api.exchangerate.host/latest");
  const data = await res.json();
  //   console.log(data.rates);
  const arrKeys = Object.keys(data.rates);
  const rates = data.rates;
  arrKeys.map((item) => {
    return (html += `<option value=${item}>${item}</option>`);
  });
  for (let i = 0; i < select.length; i++) {
    select[i].innerHTML = html;
  }

  function convert(i, j) {
    input[i].value =
      (input[j].value * rates[select[i].value]) / rates[select[j].value];
  }
  input[0].addEventListener("keyup", () => convert(1, 0));

  input[1].addEventListener("keyup", () => convert(0, 1));

  select[0].addEventListener("change", () => convert(1, 0));

  select[1].addEventListener("change", () => convert(0, 1));
}

currency();
