import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/GlobalContext";

function Navbar() {
  const { favorilereEkle, favorilerdenCikar, favoriler } =
    useContext(AppContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand brandName mx-1" to="/">
            Sahibinden
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse mx-1" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Kategoriler
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/emlak">
                      Kiralık & Satılık Evler
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/araclar">
                      Araçlar
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/elektronik">
                      Elektronik
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favoriler">
                  Favoriler <i className="bi bi-heart-fill"></i>
                  <span className="position-absolute top-10 start-90 translate-middle badge rounded-pill bg-warning">
                    {favoriler.length}
                  </span>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link">
                  Sepet <i className="bi bi-bag-check"></i>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
