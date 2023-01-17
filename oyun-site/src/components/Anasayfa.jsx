import oyunlar from "..//OyunData";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

function Anasayfa() {
  const { favorilereEkle, favorilerdenCikar, favoriler } =
    useContext(AppContext);

  const favoriKontrol = (x) => {
    const secim = favoriler.some((falan) => falan.id == x);
    return secim;
  };
  const navigate = useNavigate();

  const oyunKart = oyunlar.map((oyun) => (
    <div
      className="card m-auto shadow-lg p-3 mb-5 rounded"
      style={{ width: "18rem", height: "750px" }}
    >
      <img
        className="card-img-top resim"
        src={oyun.img}
        alt="Card image cap"
        onClick={() => navigate(`oyun/${oyun.id}`)}
      />
      <div className="card-body">
        <h5 className="card-title oyun_title">{oyun.ad} :</h5>
        <p className="card-text">{oyun.desc}</p>
      </div>
      <ul className="list-group list-group-flush ">
        <li className="list-group-item tarih"> TÜR: {oyun.tur}</li>
        <li className="list-group-item tarih">ÇIKIŞ TARİHİ: {oyun.tarih}</li>
      </ul>
      <div className="">
        {favoriKontrol(oyun.id) ? (
          <i
            onClick={() => favorilerdenCikar(oyun.id)}
            class="fa-solid fa-star yildiz_cikar"
          ></i>
        ) : (
          <i
            onClick={() => favorilereEkle(oyun)}
            class="fa-solid fa-star yildiz_ekle"
          ></i>
        )}
      </div>
    </div>
  ));
  return (
    <div className="container-fluid">
      <div className="row  oyun_baslık">
        <h1 className="oyun_alt_baslık">
          Oyunlar <i class="fa-solid fa-gamepad konsol"></i>
        </h1>
      </div>
      <div className="row">{oyunKart}</div>
    </div>
  );
}

export default Anasayfa;
