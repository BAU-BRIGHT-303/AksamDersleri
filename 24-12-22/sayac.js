let counter = document.getElementById('sayac');
let arttir = document.getElementById('arttir');
let azalt = document.getElementById('azalt');

let sayi = 0;

arttir.addEventListener('click', arttirFunc);
azalt.addEventListener('click', azaltFunc);

function arttirFunc() {
  sayi += 1;
  counter.innerText = sayi;
  if (sayi > 0) {
    counter.style.color = 'springgreen';
  } else if (sayi == 0) {
    counter.style.color = 'white';
  }
}

function azaltFunc() {
  sayi -= 1;
  counter.innerText = sayi;
  if (sayi < 0) {
    counter.style.color = 'crimson';
  } else if (sayi == 0) {
    counter.style.color = 'white';
  }
}
