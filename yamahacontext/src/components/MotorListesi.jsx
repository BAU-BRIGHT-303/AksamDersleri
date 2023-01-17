import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, generatePath } from "react-router-dom";
import aksesuar from "../Datalar/DataAksesuar";
import supersport from "../Datalar/Supersport";
import { AppContext } from "../GlobalContext";
import hypernaked from "../Datalar/Hypernaked";
import scooters from "../Datalar/Scooters";
import motordetay from "../Datalar/MotorDetay";

function MotorListesi() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bikes, setBikes] = useState([]);

  const handleProceed = (id) => {
    id && navigate(generatePath("/motordetay/:id", { id }));
  };

  const { favorilereEkle, favorilerdenCikar, favoriler } =
    useContext(AppContext);

  const favoriKontrol = (x) => {
    const secim = favoriler.some((falan) => falan.id == x);
    return secim;
  };

  if (id === "1") {
    return (
      <div className="mt-3 racing">
        <div className="container">
          <div className="row">
            {supersport.map((bike, index) => (
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
                        className="btn btn-primary "
                        onClick={() => favorilerdenCikar(bike.id)}
                      >
                        Favorilerden Çıkar
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary "
                        onClick={() => favorilereEkle(bike)}
                      >
                        Favorilere Ekle
                      </button>
                    )}
                    <button
                      onClick={(e) => {
                        handleProceed(bike.id);
                      }}
                      href="#"
                      className="btn btn-info m-3"
                    >
                      Detaylar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else if (id === "2") {
    return (
      <div className="mt-3 naked">
        <div className="container">
          <div className="row">
            {hypernaked.map((bike, index) => (
              <div key={index} className="col-md-4 my-3">
                <div
                  className="card m-auto shadow-lg p-3 mb-5 my-5 bg-body-tertiary rounded"
                  style={{ width: "22rem" }}
                >
                  <img
                    src={bike.img}
                    className="card-img-top"
                    alt="..."
                    style={{ height: "300px", cursor: "pointer" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{bike.ad} </h5>
                    <p className="card-text">Fiyat: {bike.fiyat} $</p>
                    {favoriKontrol(bike.id) ? (
                      <button
                        className="btn btn-primary "
                        onClick={() => favorilerdenCikar(bike.id)}
                      >
                        FAVORİLERDEN ÇIKAR
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary "
                        onClick={() => favorilereEkle(bike)}
                      >
                        FAVORİLERE EKLE
                      </button>
                    )}
                    <button
                      onClick={(e) => {
                        handleProceed(bike.id);
                      }}
                      href="#"
                      className="btn btn-info m-3"
                    >
                      Detaylar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else if (id === "3") {
    return (
      <div className="mt-3 scooter">
        <div className="container">
          <div className="row">
            {scooters.map((bike, index) => (
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
                  />
                  <div className="card-body">
                    <h5 className="card-title">{bike.ad} </h5>
                    <p className="card-text">Fiyat: {bike.fiyat} $</p>
                    {favoriKontrol(bike.id) ? (
                      <button
                        className="btn btn-primary "
                        onClick={() => favorilerdenCikar(bike.id)}
                      >
                        FAVORİLERDEN ÇIKAR
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary "
                        onClick={() => favorilereEkle(bike)}
                      >
                        FAVORİLERE EKLE
                      </button>
                    )}
                    <button
                      onClick={(e) => {
                        handleProceed(bike.id);
                      }}
                      href="#"
                      className="btn btn-info m-3"
                    >
                      Detaylar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MotorListesi;
