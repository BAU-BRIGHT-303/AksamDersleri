import React from "react";
import datalar from "./cokluData";

function Mezun({ ozellikler }) {
  return (
    <div>
      <h2>Hoşgeldiniz {ozellikler.lakap}</h2>
      <hr />
      <h3>Lakabınız: {ozellikler.lakap}</h3>
      <h3>Yaşınız: {ozellikler.yas}</h3>
      <h3>Okulunuz: {ozellikler.universite}</h3>
      <h3>Meslek Unvanınız: {ozellikler.unvan}</h3>

      <hr />
      <br />

      <div className="row">
        {datalar.map((data) => (
          <div className="col-md-6 my-5">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{data.x}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">{data.y}</p>
                <a href="#" className="card-link">
                  {data.z}
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mezun;
