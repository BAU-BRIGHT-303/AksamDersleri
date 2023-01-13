import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import arac from "../aracdata";
import elektronik from "../elektronikdata";

import { AppContext } from "../context/GlobalContext";
function Araclar() {
  const favoriKontrol = (x) => {
    const secim = favoriler.some((falan) => falan.id == x);
    return secim;
  };
  const { favorilereEkle, favorilerdenCikar, favoriler } =
    useContext(AppContext);

  const urunarac = arac.map((araclar, index) => (
    <div className="col-md-6 mt-3" key={index}>
      <div className="card-deck">
        <div className="card">
          <img
            className="card-img-top"
            src={araclar.img}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{araclar.ad.slice(0, 20)}</h5>
            <p className="card-text">{araclar.desc.slice(0, 20)}...</p>
            <hr />
            <p className="card-text">
              <span className="kalin"> Tür : </span>
              {araclar.tür}
            </p>

            <p className="card-text">
              <span className="kalin">Kategori :</span> {araclar.kategori}
            </p>
            <p className="card-text yaziKucuk">
              <span className="kalin">Konum : </span>
              {araclar.konum} &nbsp;&nbsp;&nbsp;
              <span className="kalin">Fiyat :</span>
              {araclar.fiyat} ₺
            </p>

            <p className="card-text">
              <div className="button-box">
                {favoriKontrol(araclar.id) ? (
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => favorilerdenCikar(araclar.id)}
                  >
                    Favorilerden Çıkar
                  </button>
                ) : (
                  <button
                    className="btn btn-warning mx-1"
                    onClick={() => favorilereEkle(araclar)}
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
          <h1 className="text-center kalin kategori">Araçlar</h1>
          <hr />
          <div className="container"></div>
          <div className="row">{urunarac}</div>
        </div>
      </div>
    </div>
  );
}

export default Araclar;
