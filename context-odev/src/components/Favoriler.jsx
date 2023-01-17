import React, { useContext } from "react";
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
          <div className="alert alert-danger my-5 m-auto" role="alert">
            Favorilerinizde hiç ürün bulunmamaktadır.
          </div>
        ) : (
          <div className="row ">
            {favoriler.map((urun, index) => (
              <div key={index} className="col-md-4 my-3 ">
                <div
                  className="card m-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ width: "22rem", height: "550px" }}
                >
                  <img
                    src={urun.image}
                    className="card-img-top m-auto"
                    alt="..."
                    style={{
                      height: "300px",
                      cursor: "pointer",
                      width: "200px",
                    }}
                    onClick={() => navigate(`urun/${urun.id}`)}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{urun.title}</h6>
                    <p className="card-text">Kategori: {urun.category}</p>
                    <p className="card-text">Fiyat: {urun.price} ₺</p>
                    {favoriKontrol(urun.id) ? (
                      <button
                        className="btn btn-danger "
                        onClick={() => favorilerdenCikar(urun.id)}
                      >
                        FAVORİLERDEN ÇIKAR
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning "
                        onClick={() => favorilereEkle(urun)}
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
