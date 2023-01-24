import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCartAction } from "../actions/cartActions";
import { updateCartItemAction } from "../actions/cartActions";
import { Link } from "react-router-dom";

function CartPage() {
  const cartState = useSelector((state) => state.cartReducer);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  console.log(quantity);
  console.log(cartState);

  const cartItems = cartState.cartItems;
  const totalPrice = cartItems.reduce(
    (total, urun) => total + urun.fiyatlar,
    0
  );

  const handleRemove = (id) => {
    dispatch(removeFromCartAction(id));
  };

  const adetHandler = (e) => {
    setQuantity(parseFloat(e.target.value));
  };

  const handleUpdate = (id) => {
    dispatch(updateCartItemAction(id, quantity));
  };

  return (
    <div>
      <div className="container pb-5 mt-n2 mt-md-n3">
        <div className="row">
          <div className="col-xl-12 col-md-12">
            <h2 className="h6 d-flex flex-wrap justify-content-between align-items-center px-4 py-3 mt-3 bg-secondary">
              <span>Products</span>
              <Link className="font-size-sm" to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-left"
                  style={{ width: "1rem", height: "1rem" }}
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                Continue shopping
              </Link>
            </h2>
            {/* Item*/}
            {cartItems.map((urun) => (
              <div className="d-sm-flex justify-content-between my-4 pb-4 border-bottom">
                <div
                  key={urun._id}
                  className="media d-block d-sm-flex text-center text-sm-left"
                >
                  <img src={urun.img} alt="Product" width={240} height={240} />
                  <div className="media-body pt-3">
                    <h3 className="product-card-title font-weight-semibold border-0 pb-0">
                      <p>{urun.ad}</p>
                    </h3>
                    <div className="font-size-sm">
                      <span className="text-muted mr-2">
                        Kategori: {urun.kategori}
                      </span>
                    </div>
                    <div className="font-size-sm">
                      <span className="text-muted mr-2">
                        Açıklama: {urun.desc}
                      </span>
                    </div>
                    <div
                      className="font-size-lg text-primary pt-2"
                      id="fiyatlar"
                    >
                      ₺{urun.fiyatlar}
                    </div>
                  </div>
                </div>
                <div
                  className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left"
                  style={{ maxWidth: "10rem" }}
                >
                  <div className="form-group mb-2">
                    <label htmlFor="quantity1">Quantity</label>
                    <select
                      id=""
                      className="form-select"
                      defaultValue={urun.miktar}
                      onChange={adetHandler}
                    >
                      {[...Array(11).keys()].map((x) => (
                        <option value={x}>{x}</option>
                      ))}
                    </select>
                  </div>
                  <button
                    className="btn btn-outline-secondary btn-sm btn-block mb-2"
                    type="button"
                    onClick={() => handleUpdate(urun._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-refresh-cw mr-1"
                    >
                      <polyline points="23 4 23 10 17 10"></polyline>
                      <polyline points="1 20 1 14 7 14"></polyline>
                      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                    </svg>
                    Güncelle
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm btn-block mb-2"
                    type="button"
                    onClick={() => handleRemove(urun._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash-2 mr-1"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      <line x1={10} y1={11} x2={10} y2={17} />
                      <line x1={14} y1={11} x2={14} y2={17} />
                    </svg>
                    Çıkar
                  </button>
                </div>
              </div>
            ))}
            <label>Toplam fiyat : {totalPrice}₺</label>
            <br />
            <button className="btn btn-success mt-2">SATIN AL</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
