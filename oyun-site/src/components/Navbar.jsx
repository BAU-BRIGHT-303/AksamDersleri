import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/GlobalContext";

function Navbar() {
  const { favorilereEkle, favorilerdenCikar, favoriler } =
    useContext(AppContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light  ">
        <a className="navbar-brand navbar_yazi" href="#">
          <i class="fa-brands fa-steam steam_icon"></i> STEAM
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link navbar_yazi" to="/">
                Anasayfa
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link navbar_yazi" to="/favoriler">
                Oyunlar
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active ">
              <Link className="nav-link navbar_yazi" to="/favoriler">
                Favoriler{" "}
                <span className="position-absolute top-10 start-90 translate-middle badge rounded-pill sepet">
                  {favoriler.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
