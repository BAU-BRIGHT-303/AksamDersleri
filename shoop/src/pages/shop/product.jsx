import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context'; 

export const Product = (props) => {
    const {id,productName,price,productImage} = props.data;
    const {addToCart,cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems [id]


  return (
 
    <div className="col product">
  <div className="card h-100">
    <img src={productImage} className="card-img-top" alt="..." />
    <div className="card-body description">
      <h5 className="card-title">{productName}</h5>
      <p className="card-text">{price}$</p>
      <div>

<button className='addToCartBttn' onClick={() =>addToCart(id) }>Satın Al {cartItemAmount>0 && <> ({cartItemAmount}) </> }</button>
</div>
 
    </div>
  </div>
</div>

    
  )
};
