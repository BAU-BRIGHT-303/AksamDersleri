import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import datalar from "../API";
import { AppContext } from "../context/GlobalContext";

function RecordList() {
  const [records, setRecords] = useState([]);

  const { addFavourites, removeFavourites, favourites } =
    useContext(AppContext);

  const controlFavourites = (x) => {
    const choice = favourites.some((a) => a.id == x);
    return choice;
  };

  const { addToCart, removeFromCart, cart } =
  useContext(AppContext);

const controlCart= (x) => {
  const choice = cart.some((a) => a.id == x);
  return choice;
};

  const navigate = useNavigate();

  return (
    <div>
      <div className="row">
        {datalar.map((ozellikler) => (
          <div className="w3-row w3-padding-32">
            <div className="w3-card-4">
              <img 
              src={ozellikler.img} 
              alt="Mike" 
              style={{ width: "18rem"}}
              className="card-img-top m-auto mt-3 p-4" />
              <div className="w3-container">
                <h3>{ozellikler.name}</h3>
                <h6 className="#">{ozellikler.album}</h6>
                <p className="w3-opacity">{ozellikler.desc}</p>
                <p className="text">{ozellikler.cost}</p>
                <p>
                  <button
                    className="w3-button w3-white w3-padding-small w3-hover-black "
                    onClick={() => addFavourites(ozellikler)}
                  >
                    Add to Favourites
                  </button>
                 
                  <button
                    className="w3-button w3-white w3-padding-small w3-hover-black p-5"
                    onClick={() => addToCart(ozellikler)}
                  >
                    Add to Cart
                  </button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecordList;
