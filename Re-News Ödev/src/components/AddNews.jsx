import { useState, useCallback } from "react";
import { addDoc } from "firebase/firestore";
import { ref } from "../firebase";

const AddNews = () => {
  //inputlardan gelen verileri statelerimizde tutarak sonrasında adddoc adındaki functionumuzla input içerisindeki veriyi eşleyerek datamıza yeollkuyoruz.
  const [aciklama, setAciklama] = useState("");
  const [baslik, setBaslik] = useState("");
  const [resim, setResim] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      addDoc(ref, { aciklama: aciklama, baslik: baslik, resim: resim }).then(
        () => {
          alert("Haber kaydetme işlemi başarılı");
        }
      );
    },
    [aciklama, baslik, resim]
  );
  return (
    <div>
      <h4 className="p-1">Buradan Yeni Haberini Ekleyebilirisin</h4>
      <form onSubmit={handleSubmit} className="text-center p-5">
        <input
          className="m-5 p-3 text-center"
          type="text"
          onChange={(e) => setBaslik(e.currentTarget.value)}
          placeholder="Başlığı Buraya Giriniz"
        />
        <input
          className="m-5 p-3 text-center"
          type="text"
          onChange={(e) => setAciklama(e.currentTarget.value)}
          placeholder="Açıklamayı Buraya Giriniz"
        />
        <input
          className="m-5 p-3 text-center"
          type="text"
          onChange={(e) => setResim(e.target.value)}
          placeholder="Resim URL'sini Buraya Giriniz"
        />

        <input type="submit" value="Gönder" className="btn btn-success" />
      </form>
    </div>
  );
};

export default AddNews;
