import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/GlobalContext";

function Favoriler() {
  const { favorilereEkle, favorilerdenCikar, favoriler } =
    useContext(AppContext);

  const favoriKontrol = (x) => {
    const secim = favoriler.some((falan) => falan.id == x);
    return secim;
  };

  const navigate = useNavigate();
  return (
    <div>
      <div className="container ">
        {favoriler.length == 0 ? (
          <div className="alert alert-danger my-5 m-auto sayfa" role="alert">
            Favorilerinizde hiç ürün bulunmamaktadır.
          </div>
        ) : (
          <div className="row ">
            {favoriler.map((urun) => (
              <div className="row mt-3">
                <div className="col-md-8 mt-5">
                  <img src={urun.img} />
                </div>
                <div className="col-md-4">
                  <h1 className="mb-5 kalin mt-5">{urun.ad}</h1>
                  <h3>
                    <span className="kalin">Kategori : </span>
                    {urun.kategori}
                  </h3>
                  <h3>
                    <span className="kalin">Tür :</span> {urun.tür}
                  </h3>
                  <h3>
                    <span className="kalin">Konumu :</span> {urun.konum}
                  </h3>
                  <h3>
                    <span className="kalin">Fiyat :</span> {urun.fiyat} ₺
                  </h3>
                  {favoriKontrol(urun.id) ? (
                    <button
                      className="btn btn-danger mx-1"
                      onClick={() => favorilerdenCikar(urun.id)}
                    >
                      Favorilerden Çıkar
                    </button>
                  ) : (
                    <button
                      className="btn btn-warning mx-1"
                      onClick={() => favorilereEkle(urun)}
                    >
                      Favorilere Ekle
                    </button>
                  )}
                  <a
                    className="btn btn-primary"
                    href="mailto:berkayulku55@icloud.com"
                  >
                    İletişime Geç
                  </a>
                </div>
                <div className="row mt-3 text-center aciklama">{urun.desc}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favoriler;
