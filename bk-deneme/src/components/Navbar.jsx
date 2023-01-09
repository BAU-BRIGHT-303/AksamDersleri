import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand ms-1 burger_logo " href="#">
          <i class="fa-solid fa-burger"></i> Burger Kralı
        </a>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  ">
            <li className="nav-item">
              <a className="nav-link yazi sepet " href="#">
                Anasayfa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link yazi sepet " href="#">
                Menüler
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link yazi sepet " href="#">
                Hakkımızda
              </a>
            </li>
          </ul>
          <ul className=" list-inline nav-item ms-auto">
            <li className="nav-item ms-auto me-1 ">
              <a className="nav-link yazi sepet " href="#">
                Sepet <i class="fa-solid fa-bag-shopping"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
