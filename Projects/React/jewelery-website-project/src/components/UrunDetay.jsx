import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import veri from "../components/api";

function UrunDetay() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="display-2">{veri[id - 1].title}</h1>
      <div className="row">
        <img src={veri[id - 1].image} alt="" />
      </div>
      <div className="col-md-8 my-5">
        <h2>{veri[id - 1].category}</h2>
        <h3>{veri[id - 1].price}</h3>
        <p>{veri[id - 1].description}</p>
      </div>
    </div>
  );
}

export default UrunDetay;
