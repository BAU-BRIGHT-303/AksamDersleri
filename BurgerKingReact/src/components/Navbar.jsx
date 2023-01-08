import React, { useState } from "react";
import Menu, { sayac, SayacDeneme } from "./Menu";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand" href="#">
          Burger King
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
            <li className="nav-item">
              <a className="nav-link" href="#">
                Anasayfa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                İletisim
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">
                Sepet <i class="fa-solid fa-bag-shopping"></i>
                <span className="position-absolute top-70 start-85 translate-middle badge rounded-pill bg-danger text-warning sepet">
                  <a>{sayac}</a>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
