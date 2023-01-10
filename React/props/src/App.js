import "./App.css";
import Mezun from "./Mezun";
import Welcome from "./Welcome";
import datas from "./propdata";
import RockBands from "./RockBands";
import datalar from "./cokluData";

function App() {
  //App js içinden ya da farklı bir bileşenden bir bileşene değişken ya da obje gönderiyorsak bunu ilgili bileşene bir özellik olarak belirtmemiz ve bu özelliğe bir değer atamamız gerekiyor. Bu olaya prop gönderme denmektedir.  propslar aracılığıyla her bileşenden her bileşene iletişim sağlanabilmektedir böylece veriler çekilebilmektedir. Bir bileşene atayacağımız özellik ismi o bileşende çağırmamız gereken isimdir yani sol tarafta kalan kısımdır. Değer olarak atayacağımız kısım ise sağ tarafa yazılır ve burası ister inline olarak ister internal ister external olarak atanabilir.
  const name = "Yiğit";
  const soyisim = "Paşa";
  const sehir = "Bursa";
  const mesguliyet = "React Developer";

  return (
    //inline biçimde prop yolladık
    // <Welcome name="Muzaffer" lastname="CİGA" job="Developer" hometown="İzmir" />

    //internal biçimde prop yolladık
    // <Welcome name={name} lastname={soyisim} job={mesguliyet} hometown={sehir} />

    //external biçimde prop yollayacağız
    // <Mezun ozellikler={datas} />
    <div className="row">
      {datalar.map((data) => (
        <RockBands ozellikler={data} />
      ))}
    </div>
  );
}

export default App;
