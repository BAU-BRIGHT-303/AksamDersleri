import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div>
        <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
         
          <img
            src="http://photos1.blogger.com/blogger/6614/3540/1600/460966_91083212.jpg"
            style={{ width: "100%" }}
          />
          <Link
            to="/"
            className="w3-bar-item w3-button w3-padding-large w3-black"
          >
            <i className="fa fa-home w3-xxlarge" />
            <p>HOME</p>
          </Link>
          <Link
            to="/about"
            className="w3-bar-item w3-button w3-padding-large w3-hover-black"
          >
            <i className="fa fa-info w3-xxlarge" />
            <p>ABOUT</p>
          </Link>
          <Link
            to="/recordlist"
            className="w3-bar-item w3-button w3-padding-large w3-hover-black"
          >
            <i className="fa fa-eye w3-xxlarge" />
            <p>RECORD LIST</p>
          </Link>
          <Link
            to="/favourites"
            className="w3-bar-item w3-button w3-padding-large w3-hover-black"
          >
            <i className="fa fa-heart w3-xxlarge" />
            <p>FAVOURITES</p>
          </Link>
          <Link
            to="/cart"
            className="w3-bar-item w3-button w3-padding-large w3-hover-black"
          >
          <i className="fa fa-shopping-cart w3-xxlarge"></i>
            <p>CART</p>
          </Link>
          <Link
            to="/contact"
            className="w3-bar-item w3-button w3-padding-large w3-hover-black"
          >
            <i className="fa fa-envelope w3-xxlarge" />
            <p>CONTACT</p>
          </Link>
          <Link
            to="/sign-in"
            className="w3-bar-item w3-button w3-padding-large w3-hover-black"
          >
            <i className="fa fa-user w3-xxlarge" />
            <p>LOGIN</p>
          </Link>
        </nav>
      </div>
      </div>
  )}

export default Navbar;
