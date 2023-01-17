import React from 'react'
import {Link} from "react-router-dom";
import {ShoppingCart} from 'phosphor-react'
import "./navbar.css";
import {Activity} from 'phosphor-react'

export const Navbar = () => {
  return (
    <div className='navbar'>
        
        <Activity size={32} />
      
          <h1 >HepsiŞurada</h1>

          <Activity size={32} />

         
        <div className='links'>
            <Link to="/"> Shop </Link>
            
            <Link to="/cart"><ShoppingCart size={32}  /> </Link>

        </div>
    </div>
  )
};
