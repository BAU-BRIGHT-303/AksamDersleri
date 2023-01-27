import React from "react";
import veri from "./api";
import Card from "./Card";

function Kolyeler() {
  return (
    <div>
      <div className="container sayfa">
        <div className="header card-header alert alert-success my-5 m-auto">
          KOLYELER
        </div>
        <div className="row">
          {veri
            .filter((kolye) => kolye.category == "kolye")
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

export default Kolyeler;
