import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import motordetay from "../Datalar/MotorDetay";

function MotorDetay() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (id === "1") {
    return (
      <div className="container sayfa">
        <div className="row">
          {motordetay.map((bike, index) => (
            <div className="row" key={index}>
              <h1 className="display-2">{bike.baslik}</h1>
              <div className="col-md-4 my-5">
                <img
                  src={bike.img}
                  alt=""
                  style={{ height: "350px", width: "350px" }}
                />
              </div>
              <div className="col-md-8 my-5">
                <p>{bike.aciklama}</p>
              </div>
              <div style={{ textAlign: "left" }}>
                <p>Motor Tipi: {bike.motortip}</p>
                <p>Motor Hacmi: {bike.motorhacim}</p>
                <p>Maxsimum Güç: {bike.maxguc}</p>
                <p>Maxsimum Tork: {bike.maxtork}</p>
                <p>Yağlama: {bike.yaglama}</p>
                <p>Yakıt Tüketimi: {bike.yakittuketim}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (id === "2") {
    return (
      <div className="container sayfa">
        <div className="row">
          {motordetay.map((bike, index) => (
            <div className="row" key={index}>
              <h1 className="display-2">{bike.baslik}</h1>
              <div className="col-md-4 my-5">
                <img
                  src={bike.img}
                  alt=""
                  style={{ height: "350px", width: "350px" }}
                />
              </div>
              <div className="col-md-8 my-5">
                <p>{bike.aciklama}</p>
              </div>
              <div style={{ textAlign: "left" }}>
                <p>Motor Tipi: {bike.motortip}</p>
                <p>Motor Hacmi: {bike.motorhacim}</p>
                <p>Maxsimum Güç: {bike.maxguc}</p>
                <p>Maxsimum Tork: {bike.maxtork}</p>
                <p>Yağlama: {bike.yaglama}</p>
                <p>Yakıt Tüketimi: {bike.yakittuketim}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (id === "3") {
    return (
      <div className="container sayfa">
        <div className="row">
          {motordetay.map((bike, index) => (
            <div className="row" key={index}>
              <h1 className="display-2">{bike.baslik}</h1>
              <div className="col-md-4 my-5">
                <img
                  src={bike.img}
                  alt=""
                  style={{ height: "350px", width: "350px" }}
                />
              </div>
              <div className="col-md-8 my-5">
                <p>{bike.aciklama}</p>
              </div>
              <div style={{ textAlign: "left" }}>
                <p>Motor Tipi: {bike.motortip}</p>
                <p>Motor Hacmi: {bike.motorhacim}</p>
                <p>Maxsimum Güç: {bike.maxguc}</p>
                <p>Maxsimum Tork: {bike.maxtork}</p>
                <p>Yağlama: {bike.yaglama}</p>
                <p>Yakıt Tüketimi: {bike.yakittuketim}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MotorDetay;
