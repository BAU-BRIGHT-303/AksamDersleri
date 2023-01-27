import React from "react";

function Magazalar() {
  return (
    <div className="magazalar">
      <div>
        <img
          src="https://images.jujumood.com/hero-1.jpg?width=1920&height=1080&quality=80"
          alt=""
          className="magaza"
        />
      </div>
      <div>
        <div className="row mt-4">
          <div className="col-md-6 yazilar">
            <div>
              <h2>Nişantaşı Şubesi</h2>
              <p>
                <span> Çalışma Saatleri</span>
              </p>
              <p>Pazartesi- Cumartesi 10:00 - 19:30</p>
              <p>Pazar 10:00 - 18:00</p>
              <p>
                <span> Adres: </span>Ihlamuryolu Sokak No:20A Nişantaşı 34365
                İstanbul / Türkiye
              </p>
              <p>
                <span>Telefon Numarası:</span> +90 (212) 234 35 00&nbsp; {"  "}
                <i class="fa-solid fa-phone telefon"></i>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width={770}
                  height={510}
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Ihlamuryolu Sokak No:20A Nişantaşı &t=&z=17&ie=UTF8&iwloc=&output=embed"
                  frameBorder={0}
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                />
                <a href="https://2yu.co">2yu</a>
                <br />
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".mapouter{position:relative;text-align:right;height:510px;width:770px;}",
                  }}
                />
                <a href="https://embedgooglemap.2yu.co">
                  html embed google map
                </a>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".gmap_canvas {overflow:hidden;background:none!important;height:510px;width:770px;}",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Magazalar;
