import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="w3-content w3-padding-64 w3-text-grey w3-xlarge ">
        <Link to="//www.facebook.com/">
        <i className="fa fa-facebook-official w3-hover-opacity" />
        </Link>
        <Link to="//www.instagram.com/">
        <i className="fa fa-instagram w3-hover-opacity" />
        </Link>
        <Link to="//twitter.com/">
        <i className="fa fa-twitter w3-hover-opacity" />
        </Link>
     
      </footer>
    </div>
  );
}

export default Footer;
