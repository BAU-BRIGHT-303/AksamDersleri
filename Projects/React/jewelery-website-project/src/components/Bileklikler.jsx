import React from "react";
import veri from "./api";
import Card from "./Card";

function Bileklikler() {
  return (
    <div>
      <div className="container sayfa">
        <div className="header card-header alert alert-success my-5 m-auto">
          BİLEKLİKLER
        </div>
        <div className="row">
          {veri
            .filter((bileklik) => bileklik.category == "bileklik")
            .map((veri) => (
              <div className="col-md-4 my-3 ">
                <Card urun={veri} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Bileklikler;
