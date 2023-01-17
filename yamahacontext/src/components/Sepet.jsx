import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../GlobalContext";

function Sepet() {
  const { favorilereEkle, favorilerdenCikar, favoriler } =
    useContext(AppContext);

  const favoriKontrol = (x) => {
    const secim = favoriler.some((falan) => falan.id == x);
    return secim;
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        {favoriler.length == 0 ? (
          <div className="alert alert-danger my-5 m-auto" role="alert">
            Favorilerinizde hiç ürün bulunmamaktadır :(:(
          </div>
        ) : (
          <div className="row">
            {favoriler.map((bike, index) => (
              <div key={index} className="col-md-4 my-3">
                <div
                  className="card m-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ width: "22rem" }}
                >
                  <img
                    src={bike.img}
                    className="card-img-top"
                    alt="..."
                    style={{ height: "300px", cursor: "pointer" }}
                    onClick={() => navigate(`motosiklet/${bike.id}`)}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{bike.ad} </h5>
                    <p className="card-text">Fiyat: {bike.fiyat} $</p>
                    {favoriKontrol(bike.id) ? (
                      <button
                        className="btn btn-danger "
                        onClick={() => favorilerdenCikar(bike.id)}
                      >
                        FAVORİLERDEN ÇIKAR
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning "
                        onClick={() => favorilereEkle(bike)}
                      >
                        FAVORİLERE EKLE
                      </button>
                    )}
                    <button
                      onClick={() => favorilereEkle(bike)}
                      href="#"
                      className="btn btn-primary m-3"
                    >
                      Detaylar
                    </button>
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

export default Sepet;
