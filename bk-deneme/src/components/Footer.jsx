import React from "react";

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      {/* Sosyal Medya Başlangıç */}
      <section className="d-flex justify-content-center justify-content-lg-between  p-4 border-bottom">
        <div
          className=" d-none d-lg-block "
          style={{ backgroundColor: "rgb(246,169,13)" }}
        >
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href className="me-4 text-reset">
            <i className="fab fa-facebook-f" />
          </a>
          <a href className="me-4 text-reset">
            <i className="fab fa-twitter" />
          </a>
          <a href className="me-4 text-reset">
            <i className="fab fa-google" />
          </a>
          <a href className="me-4 text-reset">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </section>
      {/* Sosyal Medya Bitiş */}
      {/* Footer Medya Başlangıç */}
      <section className>
        <div className="container text-center m-0 p-0">
          <div className="row pt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i class="fa-solid fa-burger"></i>
                Burger Kralı
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt sed ab ut libero quidem nisi laboriosam animi magnam
                accusamus? Saepe.
              </p>
            </div>

            <div className="text-center col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className=" fw-bold mb-4">Ürünler</h6>
              <p>
                <a href="#!" className="text-reset">
                  Burgerler
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Menüler
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Siparişler
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Yardım
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className=" fw-bold mb-4">İletişim</h6>
              <p>
                <i className="fas fa-home me-3" /> İstanbul, 00034, TR
              </p>
              <p className="mail">
                <i className="fas fa-envelope me-3 " />
                BuRgEr_KrAlİ@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3" /> 444 5 464
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgb(246,169,13)" }}
      >
        © 2023 Copyright:
        <a
          style={{ backgroundColor: "rgb(246,169,13)" }}
          className="text-reset fw-bold"
          href="#"
        >
          Burger Kralı
        </a>
      </div>
      {/* Footer Medya Başlangıç */}
    </footer>
  );
}

export default Footer;
