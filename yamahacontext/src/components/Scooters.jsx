import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import aksesuar from "../Datalar/DataAksesuar";
import hypernaked from "../Datalar/Hypernaked";
import scooters from "../Datalar/Scooters";
import supersport from "../Datalar/Supersport";
import { AppContext } from "../GlobalContext";

function Scooters() {
  const [bikes, setBikes] = useState([]);

  const { favorilereEkle, favorilerdenCikar, favoriler } =
    useContext(AppContext);

  const favoriKontrol = (x) => {
    const secim = favoriler.some((falan) => falan.id == x);
    return secim;
  };

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(aksesuar)
      .then((res) => setBikes())
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          {scooters.map((bike, index) => (
            <div key={index} className="col-md-4 my-3">
              <div
                className="card m-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                style={{ width: "22rem" }}
              >
                <img src={bike.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{bike.ad} </h5>
                  <p className="card-text">Fiyat: {bike.fiyat} $</p>
                  <button href="#" className="btn btn-primary">
                    SEPETE EKLE
                  </button>
                  <button href="#" className="btn btn-primary m-3">
                    {" "}
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

export default Scooters;
