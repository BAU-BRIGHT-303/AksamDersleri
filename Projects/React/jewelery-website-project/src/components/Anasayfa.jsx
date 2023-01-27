import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/GlobalContext";
import veri from "./api";

function Anasayfa() {
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
      <div className="container menu">
        <div className="container">
          <div className="row">
            <img
              src="https://img.freepik.com/free-photo/cheerful-blonde-curly-woman-pearl-necklace-white-elegant-blouse-smiles-sincerely-looks-down-poses-outside_197531-29996.jpg?w=1800&t=st=1674034447~exp=1674035047~hmac=a2460bf6a360c92576cee634afc0f0234d6f8c0d03c6f5274982028a65510914"
              alt=""
              className="slider"
            />
          </div>
          <div className="container">
            <div className="row"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 my-3 ">
            <a href="/bileklikler">
              <div
                className="card m-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                style={{ width: "18rem", height: "400px" }}
              >
                <img
                  src="https://images.jujumood.com/9531035-bileklikkapak.png?format=webp&height=380&quality=80"
                  alt=""
                  className="menu-img"
                />
                <div class="menu-baslik bileklikler my-2 mt-4">Bileklikler</div>
              </div>
            </a>
          </div>
          <div className="col-md-3 my-3 ">
            <a href="/kolyeler">
              <div
                className="card m-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                style={{ width: "18rem", height: "400px" }}
              >
                <img
                  src="https://images.jujumood.com/1633690704631-kolye-ucu-locks.jpeg?format=webp&height=380&quality=80"
                  alt=""
                  className="menu-img"
                />
                <div class="menu-baslik kolyeler my-2 mt-4">Kolyeler</div>
              </div>
            </a>
          </div>

          <div className="col-md-3 my-3 ">
            <a href="/kupeler">
              <div
                className="card m-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                style={{ width: "18rem", height: "400px" }}
              >
                <img
                  src="https://images.jujumood.com/8067633-cem-1032-1.png?format=webp&height=380&quality=80"
                  alt=""
                  className="menu-img"
                />
                <div class="menu-baslik kupeler my-2 mt-4">Küpeler</div>
              </div>
            </a>
          </div>
          <div className="col-md-3 my-3 ">
            <a href="/yuzukler">
              <div
                className="card m-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                style={{ width: "18rem", height: "400px" }}
              >
                <img
                  src="https://images.jujumood.com/6156321-937142-5.png?format=webp&height=380&quality=80"
                  alt=""
                  className="menu-img"
                />
                <div class="menu-baslik yuzukler my-2 mt-4">Yüzükler</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Anasayfa;
