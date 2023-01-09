import React from "react";
import menuler from "../yemekdata";

function Anasayfa() {
  const urun = menuler.map((urunler) => (
    <div className="col-md-4 my-4 ">
      <div className="card " style={{ width: "18rem" }}>
        <img className="card-img-top" src={urunler.img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{urunler.ad}</h5>
          <p className="card-text">{urunler.desc}</p>
          <hr />
        </div>
        <ul className="list-group list-group-flush ozellık">
          <li className="list-group-item">Kategori: {urunler.kategori}</li>
          <li className="list-group-item text-center fiyat">
            Küçük Menü Fiyatı: {urunler.fiyat.map((fiyat) => fiyat.small)} ₺
            <br />
            Orta Menü Fiyatı: {urunler.fiyat.map((fiyat) => fiyat.medium)} ₺
            <br />
            Büyük Menü Fiyatı: {urunler.fiyat.map((fiyat) => fiyat.mega)} ₺
          </li>
        </ul>
        <p className="sepetekle">
          Lütfen Aşağıdan Sepete Eklemek İstediğiniz Boyuta Tıklayın
        </p>
        <ul className="list-group list-inline list-group-flush">
          <li>
            <button type="button" className="btn btn-outline-danger">
              Küçük Menü
            </button>{" "}
            <button type="button" className="btn btn-outline-danger">
              Orta Menü
            </button>{" "}
            <button
              type="button"
              className="mt-1 btn btn btn-outline-danger btn-block"
            >
              Büyük Menü
            </button>
          </li>
        </ul>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="container">
        <div className="row">{urun}</div>
      </div>
      <hr />
    </div>
  );
}

export default Anasayfa;
