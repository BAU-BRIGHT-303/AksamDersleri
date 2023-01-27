import React, { useContext } from "react";
import { AppContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";
function Navbar() {
  const { favoriler, sepet } = useContext(AppContext);
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            ANASAYFA
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ÜRÜNLER
                </Link>
                <ul className="dropdown-menu ">
                  <li>
                    <Link className="dropdown-item" to="/bileklikler">
                      Bileklikler
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/kolyeler">
                      Kolyeler
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/kupeler">
                      Küpeler
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/yuzukler">
                      Yüzükler
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/magazalar"
                >
                  MAĞAZALAR
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  KEŞFET
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  BASIN
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  BLOG
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-2">
                <Link className="nav-link" to="#">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link className="nav-link" to="/sepet">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <span className="position-absolute top-10 start-90 translate-middle badge rounded-pill bg-danger">
                    {sepet.length}
                  </span>
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link className="nav-link" to="/favoriler">
                  <i class="fa-solid fa-heart"></i>{" "}
                  <span className="position-absolute top-10 start-80 translate-middle badge rounded-pill bg-danger"></span>
                  <span className="top-10 start-80 translate-middle badge rounded-pill bg-danger">
                    {favoriler.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/girisyap"
                >
                  Üye Girişi
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/kayitol"
                >
                  Kayıt Ol
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
