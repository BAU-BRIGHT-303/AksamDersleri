import React, { useState } from "react";
import menuler from "../yemekdata";

function Menu() {
  const [sayac, setSayac] = useState(0);
  const urun = menuler.map((urunler) => (
    <div className="col-md-3 my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={urunler.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title adi">{urunler.ad}</h5>
          <p className="card-text desc">{urunler.desc}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center kategori">
            {urunler.kategori}
          </li>
          <li className="list-group-item text-center secenek">
            Menü Seçenekleri
          </li>
          <li className="list-group-item text-center fiyat">
            Small {urunler.fiyat.map((fiyat) => fiyat.small)} ₺
            <br />
            Medium {urunler.fiyat.map((fiyat) => fiyat.medium)} ₺
            <br />
            Mega {urunler.fiyat.map((fiyat) => fiyat.mega)} ₺
          </li>
          <li className="list-group-item text-center">Sayaç Deneme: {sayac}</li>
        </ul>
        <div className="mx-2 my-2 button-box col-lg-12">
          <a
            className="card-link btn btn-primary"
            onClick={() => setSayac(sayac + 1)}
          >
            Sepete Ekle
          </a>
          <a
            className="card-link btn btn-danger"
            onClick={() => setSayac(sayac - 1)}
          >
            Sepetten Sil
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="container">
        <div className="row">{urun}</div>
      </div>
    </div>
  );
}

export default Menu;
export const sayac = "0";
export function SayacDeneme() {
  const [sayac, setSayac] = useState(0);
}
