let colorpicker = document.getElementById('colorpicker');

let body = document.querySelector('body');

colorpicker.addEventListener('click', renkDegis);

function renkDegis() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var RGBColor = 'rgb(' + x + ',' + y + ',' + z + ')';
  console.log(RGBColor);
  body.style.backgroundColor = RGBColor;
}
