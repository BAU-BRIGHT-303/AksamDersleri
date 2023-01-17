import React from "react";

function Footer() {
  return (
    <div>
      <footer className="text-center text-white foot">
        {/* Grid container */}
        <div className="container pt-4">
          {/* Section: Social media */}
          <section className="mb-4">
            {/* Facebook */}
            <a
              className="btn btn-link btn-floating btn-lg  m-1 icon_1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f" />
            </a>
            {/* Twitter */}
            <a
              className="btn btn-link btn-floating btn-lg  m-1 icon_2"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter" />
            </a>
            {/* Google */}
            <a
              className="btn btn-link btn-floating btn-lg  m-1 icon_1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-google" />
            </a>
            {/* Instagram */}
            <a
              className="btn btn-link btn-floating btn-lg m-1 icon_2"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram" />
            </a>
            {/* Linkedin */}
            <a
              className="btn btn-link btn-floating btn-lg m-1 icon_1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin" />
            </a>
          </section>
          {/* Section: Social media */}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div
          className="text-center text-dark p-3 footer_yazi"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright
        </div>
        {/* Copyright */}
      </footer>
    </div>
  );
}

export default Footer;
