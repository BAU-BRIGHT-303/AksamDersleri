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
      <div className="container sayfa">
        {favoriler.length == 0 ? (
          <div className="alert  my-5 m-auto" role="alert">
            Favorilerinizde Hiç Oyun Bulunmamaktadır...
          </div>
        ) : (
          <div className="row ">
            {favoriler.map((oyun) => (
              <div className="col-md-4 my-3 ">
                <div
                  className="card m-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ width: "22rem", height: "550px" }}
                >
                  <img
                    src={oyun.img}
                    className="card-img-top m-auto"
                    alt="..."
                    style={{
                      height: "300px",
                      cursor: "pointer",
                      width: "200px",
                    }}
                    onClick={() => navigate(`/kitap/${oyun.id}`)}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{oyun.ad}</h6>
                    <p className="card-text">Tür: {oyun.tur}</p>
                    <p className="card-text"> {oyun.desc}</p>
                    {favoriKontrol(oyun.id) ? (
                      <button
                        className="btn btn-danger "
                        onClick={() => favorilerdenCikar(oyun.id)}
                      >
                        FAVORİLERDEN ÇIKAR
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning "
                        onClick={() => favorilereEkle(oyun)}
                      >
                        FAVORİLERE EKLE
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favoriler;
