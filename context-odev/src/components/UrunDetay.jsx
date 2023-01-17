import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import veri from "../components/api";

function UrunDetay() {
  const { id } = useParams();

  return (
    <div key={veri.id}>
      <h1 className="display-2">{veri.title}</h1>
      <div className="row">
        <img src={veri.image} alt="" />
      </div>
      <div className="col-md-8 my-5">
        <h2>{veri.category}</h2>
        <h3>{veri.price}</h3>
        <p>{veri.description}</p>
      </div>
    </div>
  );
}

export default UrunDetay;
