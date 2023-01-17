import React, {useContext} from 'react'
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context'; 
import { CartItem } from './card-item';
import "./cart.css";
import {useNavigate} from 'react-router-dom'




export const Cart = () => {

  const {cartItems,getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()

  const navigate =useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>Alışveriş Sepeti</h1>

      </div>

      <div className="cardItems">

        {PRODUCTS.map((product)=>{ 
          if(cartItems[product.id] !== 0) {
            return <CartItem  data={product} />
          }

        })}

      </div>
  {totalAmount >0 ?
      <div className="checkout">
        <p>Toplam: {totalAmount}   $</p>
        <button onClick={() => navigate("/")}>Alışverişe Devam Et</button>
        <button>Çıkış</button>
      </div>
  : <h1>Sepetiniz boş</h1>    }

      
      
      </div>
  )
};

