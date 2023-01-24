import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToCartAction } from "../actions/cartActions";

function CartPage() {
  const cartState = useSelector((state) => state.cartReducer);

  const cartItems = cartState.cartItems;
  const totalPrice = cartItems.reduce(
    (total, urun) => total + urun.fiyatlar,
    0
  );

  const dispatch = useDispatch();
  const deleteToCart = (id) => {
    dispatch(deleteToCartAction(id));
  };

  return (
    <div>
      <div className="container">
        <div className="text-center">
          <h2 className="display-2 text-warning">Sepetim</h2>

          {cartItems.map((urun) => (
            <div className="row border-box border border-warning rounded mb-2 mt-2">
              <div className="col-md-4">
                <img src={urun.img} alt="" />
              </div>
              <div className="col-md-4 text-center my-auto">
                <h1>{urun.ad}</h1>
                <h5>{urun.desc}</h5>
              </div>
              <div className="col-md-4 my-auto">
                <h3>Ürün Adet: {urun.miktar}</h3>
                <hr className="w-50 mx-auto" />

                <h3>{urun.fiyatlar} ₺</h3>

                <div className="d-flex justify-content-center align-items-center">
                  <button
                    className="btn btn-warning w-75"
                    onClick={() => deleteToCart(urun._id)}
                  >
                    SEPETTEN ÇIKAR
                  </button>
                </div>
              </div>
            </div>
          ))}

          <h3 className="mt-3">Toplam Fiyat: {totalPrice} ₺</h3>

          <Link to="/">
            <button className="btn btn-success">Sipariş Ver</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
