import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import arac from "../aracdata";
import elektronik from "../elektronikdata";
import emlak from "../emlakdata";
import { AppContext } from "../context/GlobalContext";
function Vitrin() {
  const { favorilereEkle, favorilerdenCikar, favoriler } =
    useContext(AppContext);

  const favoriKontrol = (x) => {
    const secim = favoriler.some((falan) => falan.id == x);
    return secim;
  };

  const urunEmlak = emlak.map((emlaklar, index) => (
    <div className="col-md-3 mt-3" key={index}>
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
  const urunElektronik = elektronik.map((elektronik) => (
    <div className="col-md-3 mt-3">
      <div className="card-deck">
        <div className="card">
          <img
            className="card-img-top"
            src={elektronik.img}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{elektronik.ad.slice(0, 20)}</h5>
            <p className="card-text">{elektronik.desc.slice(0, 20)}...</p>
            <hr />
            <p className="card-text">
              <span className="kalin"> Tür : </span>
              {elektronik.tür}
            </p>

            <p className="card-text">
              <span className="kalin">Kategori :</span> {elektronik.kategori}
            </p>
            <p className="card-text yaziKucuk">
              <span className="kalin">Konum : </span>
              {elektronik.konum} &nbsp;&nbsp;&nbsp;
              <span className="kalin">Fiyat :</span>
              {elektronik.fiyat}₺
            </p>

            <p className="card-text ">
              {favoriKontrol(elektronik.id) ? (
                <button
                  className="btn btn-danger mx-1"
                  onClick={() => favorilerdenCikar(elektronik.id)}
                >
                  Favorilerden Çıkar
                </button>
              ) : (
                <button
                  className="btn btn-warning mx-1"
                  onClick={() => favorilereEkle(elektronik)}
                >
                  Favorilere Ekle
                </button>
              )}
              <div className="btn btn-success">Detay Gör</div>
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
  const urunArac = arac.map((araclar) => (
    <div className="col-md-3 mt-3">
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
              {araclar.fiyat}₺
            </p>

            <p className="card-text ">
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
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="container ">
        <div className="row">{urunEmlak}</div>
        <div className="row">{urunElektronik}</div>
        <div className="row">{urunArac}</div>
      </div>
    </div>
  );
}

export default Vitrin;
