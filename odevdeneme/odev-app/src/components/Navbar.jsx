import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
        <div>
  <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
    {/* Avatar image in top left corner */}
    <img src="http://photos1.blogger.com/blogger/6614/3540/1600/460966_91083212.jpg" style={{width: '100%'}} />
    <Link to="#" className="w3-bar-item w3-button w3-padding-large w3-black">
      <i className="fa fa-home w3-xxlarge" />
      <p>HOME</p>
    </Link>
    <Link to="/about" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
      <i className="fa fa-user w3-xxlarge" />
      <p>ABOUT</p>
    </Link>
    <Link to="/recordlist" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
      <i className="fa fa-eye w3-xxlarge" />
      <p>RECORD LIST</p>
    </Link>
    <Link to="/favourites" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
    <i className="fa fa-heart w3-xxlarge" />
      <p>FAVOURITES</p>
    </Link>
    <Link to="/contact" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
      <i className="fa fa-envelope w3-xxlarge" />
      <p>CONTACT</p>
    </Link>
  </nav>
  {/* Navbar on small screens (Hidden on medium and large screens) */}
  <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
    <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
      <Link to="#" className="w3-bar-item w3-button" style={{width: '25% !important'}}>HOME</Link>
      <Link to="#about" className="w3-bar-item w3-button" style={{width: '25% !important'}}>ABOUT</Link>
      <Link to="#photos" className="w3-bar-item w3-button" style={{width: '25% !important'}}>PHOTOS</Link>
      <Link to="#contact" className="w3-bar-item w3-button" style={{width: '25% !important'}}>CONTACT</Link>
    </div>
  </div>
</div>

    </div>
  )
}

export default Navbar;