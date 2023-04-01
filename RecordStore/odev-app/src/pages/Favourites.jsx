import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/GlobalContext";

function Favourites() {
  const { addFavourites, removeFavourites, favourites } =
    useContext(AppContext);

  const controlFavourites = (x) => {
    const choice = favourites.some((a) => a.id == x);
    return choice;
  };

  const navigate = useNavigate();
  return (
    <div>
      <div className="container sayfa">
        {favourites.length == 0 ? (
          <div className="alert alert-info my-5 m-auto" role="alert" style={{width: "10rem"}}>
            You have no favourite yet !
          </div>
        ) : (
          <div className="row inline-block">
            {favourites.map((record, index) => (
              <div key={index} className="col-md-4 my-3">
                <div
                  className="card m-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ width: "18rem",color:"black"}}
                >
                  <img
                    src={record.img}
                    className="card-img-top m-auto"
                   
                    alt="..."
                    onClick={() => navigate(`/recordlist/${record.id}`)}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{record.name}</h6>
                    <p className="card-text">{record.album}</p>
                    <p className="card-text">{record.desc}</p>
                    <p className="card-text">{record.cost}</p>
                    {controlFavourites(record.id) ? (
                      <button
                        className="btn btn-danger mt-auto "
                        onClick={() => removeFavourites(record.id)}

                      >
                        Remove from Favourites
                      </button>
                    ) : (
                      <button
                        className="btn btn-warning "
                        onClick={() => addFavourites(record)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favourites;
