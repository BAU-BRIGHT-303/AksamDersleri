import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/GlobalContext";
import veri from "../components/api";

function Urunler() {
  const {
    favorilereEkle,
    favorilerdenCikar,
    favoriler,
    sepeteEkle,
    sepettenCikar,
    sepet,
  } = useContext(AppContext);
  const favoriKontrol = (x) => {
    const secim = favoriler.some((falan) => falan.id == x);
    return secim;
  };
  const sepetKontrol = (y) => {
    const secim2 = sepet.some((filan) => filan.id == y);
    return secim2;
  };

  const navigate = useNavigate();
  return (
    <div>
      <div className="container sayfa">
        <div className="row">
          {veri.map((urun, index) => (
            <div key={index} className="col-md-4 my-3 ">
              <div
                className="card m-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                style={{ width: "24rem", height: "550px" }}
              >
                <img
                  src={urun.image}
                  className="card-img-top m-auto mt-2"
                  alt="..."
                  style={{ height: "250px", cursor: "pointer", width: "200px" }}
                  onClick={() => navigate(`detay/${urun.id}`)}
                />
                <div className="card-body">
                  <h6 className="card-title my-2" style={{ height: "30px" }}>
                    {urun.title}
                  </h6>
                  <p className="card-text py-3 my-3" style={{ height: "40px" }}>
                    Kategori: {urun.category}
                  </p>
                  <p className="card-text py-2 my-3" style={{ height: "30px" }}>
                    Fiyat: {urun.price} ₺
                  </p>
                  {favoriKontrol(urun.id) ? (
                    <button
                      className="btn btn-danger mx-3 my-3 favori-cikar"
                      onClick={() => favorilerdenCikar(urun.id)}
                    >
                      <i class="fa-solid fa-heart"></i>{" "}
                    </button>
                  ) : (
                    <button
                      className="btn btn-warning mx-3 my-3 favori-ekle"
                      onClick={() => favorilereEkle(urun)}
                    >
                      <i class="fa-regular fa-heart"></i>
                    </button>
                  )}
                  {sepetKontrol(urun.id) ? (
                    <button
                      className="btn btn-danger mx-3 my-3"
                      onClick={() => sepettenCikar(urun.id)}
                    >
                      <i class="fa-solid fa-cart-shopping"></i>{" "}
                    </button>
                  ) : (
                    <button
                      className="btn btn-warning mx-3 my-3"
                      onClick={() => sepeteEkle(urun)}
                    >
                      <i class="fa-solid fa-cart-plus"></i>{" "}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Urunler;
