import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../GlobalContext";

function Navbar() {
  const { favorilereEkle, favorilerdenCikar, favoriler } =
    useContext(AppContext);
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-danger">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Yamaha TÜRKİYE
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/motosikletler"
                >
                  Motosikletler
                </Link>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link active">
                  Hakkımızda
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link active">
                  İletişim
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/sepet">
                  Favoriler
                  <i className="fa-solid fa-bag-shopping mx-2"></i>
                  <span className="position-absolute top-10 start-80 translate-middle badge rounded-pill bg-danger">
                    {favoriler.length}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
