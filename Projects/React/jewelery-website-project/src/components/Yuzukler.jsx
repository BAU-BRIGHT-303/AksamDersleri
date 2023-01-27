import React from "react";
import veri from "./api";
import Card from "./Card";

function Yuzukler() {
  return (
    <div>
      <div>
        <div>
          <div className="container sayfa">
            <div className="header card-header alert alert-success my-5 m-auto">
              YÜZÜKLER
            </div>
            <div className="row">
              {veri
                .filter((yuzuk) => yuzuk.category == "yuzuk")
                .map((veri) => (
                  <div className="col-md-4 my-3 ">
                    <Card urun={veri} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yuzukler;
