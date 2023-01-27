import React from "react";
import veri from "./api";
import Card from "./Card";

function Kupeler() {
  return (
    <div>
      <div>
        <div className="container sayfa">
          <div className="header card-header alert alert-success my-5 m-auto">
            KÜPELER
          </div>
          <div className="row">
            {veri
              .filter((kupe) => kupe.category == "kupe")
              .map((veri) => (
                <div className="col-md-4 my-3 ">
                  <Card urun={veri} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kupeler;
