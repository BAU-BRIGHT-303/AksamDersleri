import React from "react";

function RockBands({ ozellikler }) {
  return (
    <div className="col-md-6 ">
      <div className="card m-auto my-5" style={{ width: "18rem" }}>
        <img src={ozellikler.img} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{ozellikler.name}</h5>
          <p className="card-text">{ozellikler.desc}</p>
          <a href="#" className="btn btn-primary">
            {ozellikler.genre}
          </a>
        </div>
      </div>
    </div>
  );
}

export default RockBands;
