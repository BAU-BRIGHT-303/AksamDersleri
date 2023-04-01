import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/GlobalContext";

function Cart() {
  const { addToCart, removeFromCart, cart } =
    useContext(AppContext);

  const controlCart = (x) => {
    const choice = cart.some((a) => a.id == x);
    return choice;
  };

  const navigate = useNavigate();
  return (
    <div>
      <div className="container sayfa">
        {cart.length == 0 ? (
          <div className="alert alert-info my-5 m-auto" role="alert" style={{width: "10rem"}}>
          You didn't add any cart items
        </div>
        ) : (
          <div className="row inline-block ">
            {cart.map((record, index) => (
              <div key={index} className="col-md-4 my-3 ">
                <div
                  className="card m-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ width: "18rem" , color: "black" }}
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
                   
                      <button
                        className="btn btn-danger "
                        onClick={() => removeFromCart(record.id)}
                      >
                        Remove from Cart
                      </button>
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

export default Cart;
