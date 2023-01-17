import React, { useState, useHistory } from "react";
import { generatePath, useNavigate } from "react-router-dom";
//import { useHistory, } from "react-router-dom";
import motosikletler from "../Datalar/Motosikletler";

function Motosikletler() {
  const navigate = useNavigate();

  const handleProceed = (id) => {
    debugger;
    id && navigate(generatePath("/motosikletlistesi/:id", { id }));
  };
  return (
    <div className="motosikletler mt-3">
      <div className="row">
        {motosikletler.map((moto, index) => (
          <div key={index} className="col-md-12 my-3">
            <div
              className="card m-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded sezer"
              style={{ width: "25rem", backgroundcolor: "rgb(0, 132, 197)" }}
            >
              <img
                src={moto.img}
                className="card-img-top"
                style={{ height: "300px" }}
                alt="..."
              />
              <div
                className="card-body sezer"
                style={{ backgroundcolor: "rgb(0, 132, 197)" }}
              >
                <h5 className="card-title" style={{}}>
                  {moto.ad}
                </h5>

                <p className="card-title" style={{}}>
                  {moto.title}
                </p>

                <button
                  onClick={(e) => {
                    debugger;
                    handleProceed(moto.id);
                  }}
                  className="btn btn-primary mt-3"
                >
                  İNCELE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Motosikletler;
