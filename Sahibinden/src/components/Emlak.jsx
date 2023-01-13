import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import arac from "../aracdata";
import elektronik from "../elektronikdata";
import emlak from "../emlakdata";
import { AppContext } from "../context/GlobalContext";
function Emlak() {
  const favoriKontrol = (x) => {
    const secim = favoriler.some((falan) => falan.id == x);
    return secim;
  };
  const { favorilereEkle, favorilerdenCikar, favoriler } =
    useContext(AppContext);

  const urunEmlak = emlak.map((emlaklar, index) => (
    <div className="col-md-6 mt-3" key={index}>
      <div className="card-deck">
        <div className="card">
          <img
            className="card-img-top"
            src={emlaklar.img}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{emlaklar.ad.slice(0, 20)}</h5>
            <p className="card-text">{emlaklar.desc.slice(0, 20)}...</p>
            <hr />
            <p className="card-text">
              <span className="kalin"> Tür : </span>
              {emlaklar.tür}
            </p>

            <p className="card-text">
              <span className="kalin">Kategori :</span> {emlaklar.kategori}
            </p>
            <p className="card-text yaziKucuk">
              <span className="kalin">Konum : </span>
              {emlaklar.konum} &nbsp;&nbsp;&nbsp;
              <span className="kalin">Fiyat :</span>
              {emlaklar.fiyat} ₺
            </p>

            <p className="card-text">
              <div className="button-box">
                {favoriKontrol(emlaklar.id) ? (
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => favorilerdenCikar(emlaklar.id)}
                  >
                    Favorilerden Çıkar
                  </button>
                ) : (
                  <button
                    className="btn btn-warning mx-1"
                    onClick={() => favorilereEkle(emlaklar)}
                  >
                    Favorilere Ekle
                  </button>
                )}
                <div className="btn btn-success">Detay Gör</div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="container">
        <div className="row ">
          <h1 className="text-center kalin kategori">Emlak</h1>
          <hr />
          <div className="container"></div>
          <div className="row">{urunEmlak}</div>
        </div>
      </div>
    </div>
  );
}

export default Emlak;
