import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import datalar from '../API';
import { AppContext } from "../context/GlobalContext";


function RecordList() {
  const [records, setRecords] = useState([]);

  const { addFavourites, removeFavourites, favourites }=
  useContext(AppContext);

  const controlFavourites = (x) => {
    const choice = favourites.some((a) => a.id==x);
    return choice;
  };

  const navigate = useNavigate();

  useEffect(() => {
    axios
    .get(datalar)
    .then((res) => setRecords(res.data))
    .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="row">
    {datalar.map((data) => (
      <RecordList ozellikler={data} />
    ))}
 
<div className="w3-third w3-margin-bottom">
  <div className="w3-card-4">
    <img src={ozellikler.img} alt="Mike" style={{width: "15rem"}} />
    <div className="w3-container">
      <h3>{ozellikler.name}</h3>
      <h6 className="#">{ozellikler.album}</h6>
      <p className="w3-opacity">{ozellikler.desc}</p>
      <p className="text">{ozellikler.cost}</p>
   
      <p><button className="w3-button w3-white w3-padding-large w3-hover-black">Add to Bag</button></p>
      <p><button className="w3-button w3-white w3-padding-large w3-hover-black">Add to Favourites</button></p>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default RecordList;