import React from "react";

function Footer() {
  return (
    <div className="footer bg-danger mt-3">
      <div className="container ">
        <div className="row">
          <div className="col-md-2 text-align-center alan1">
            <ul className="justify-content-center d-flex">
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/800px-Flag_of_Turkey.svg.png"
                  alt=""
                  style={{ weight: "20px", height: "20px" }}
                />
              </li>
              <li>
                <a href="" className="mx-3 turkiye ">
                  Türkiye
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 alan2">
            <ul className="nav-item nav-link active">
              <li>
                <h6>Kurumsal</h6>
              </li>
              <li>
                <a href="">Hakkımızda</a>
              </li>
              <li>
                <a href="">Yamaha Bayisi Olmak</a>
              </li>
              <li>
                <a href="">Yamaha'da Kariyer</a>
              </li>
              <li>
                <a href="">Yamaha Motor Global</a>
              </li>
              <li>
                <a href="">Yamaha Racing</a>
              </li>
              <li>
                <a href="">Yamaha Music</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 alan3">
            <ul className="nav-item nav-link active">
              <li>
                <h6>Haberler</h6>
              </li>
              <li>
                <a href="">Yamaha'dan Haberler</a>
              </li>
              <li>
                <a href="">Basın</a>
              </li>
              <li>
                <a href="">Katalog</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 alan4">
            <ul className="nav-item nav-link active">
              <li>
                <h6>B2B</h6>
              </li>
              <li>
                <a href="">eBisiklet Sistemleri</a>
              </li>
              <li>
                <a href="">Yamaha Motor Robotic</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 alan5">
            <ul className="nav-item nav-link active">
              <li>
                <h6>Gizlilik</h6>
              </li>
              <li>
                <a href="">Gizlilik & Çerezler</a>
              </li>
              <li>
                <a href="">Çerez Bilgileri</a>
              </li>
              <li>
                <a href="">Yasal Bildirim</a>
              </li>
              <li>
                <a href="">Gizlilik Politikası</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
