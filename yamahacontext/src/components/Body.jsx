import React from "react";

function Body() {
  return (
    <div>
      <div className="body1">
        <div className="container">
          <div className="row ">
            <div className="col-md-12 body2">
              <h1>MT-09 Pure</h1>
              <h4>
                Yeni MT-09 Pure sizlere en iyi sürüş deneyimini vermeye hazır!
              </h4>
              <button className="btn btn-outline-danger">Modeli Keşfet</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 text-align-center text-center">
          <h1 className="mt-2" style={{ color: "crimson" }}>
            Saf sürüş keyfi
          </h1>
          <p>
            Motosikletin 690 cc CP2 motorunu çalıştırır çalıştırmaz bunun çok
            özel bir motosiklet olduğunu hemen anlayacaksınız. Yamaha'nın cross
            plane (çapraz düzlem) teknolojisi kullanılarak geliştirilen motorun
            asimetrik ateşleme sırası, güçlü ve doğrusal torkla heyecan verici
            bir hızlanma sağlarken titreşimli egzoz her sürüşte mükemmel bir ses
            performansı sunar.
          </p>
          <p className="mb-3">
            YZF-R ve MT Pure,serileri ile doğal ergonomisi sayesinde her sürücü
            için ideal uyumu sunar. Motosikletin kompakt boyutları, bu en çok
            satan Hyper Naked'in her koşulda en çevik performanslardan birini
            göstermesini sağlar. Heyecan verici bir sürüş deneyimiyle tüm
            dikkatleri üzerine çeken bu motosiklet, istediğiniz tüm özelliklere
            sahip olabilecek şekilde tasarlanmıştır. Hatta çok daha fazlasını
            sunar.
          </p>
        </div>
        <div className="col-md-6 mt-2 mb-3">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval={5000}>
                <img
                  style={{ weight: "250px", height: "400px" }}
                  src="https://cdn2.yamaha-motor.eu/prod/product-assets/2022/YZF1000R1SPL/2022-Yamaha-YZF1000R1SPL-EU-Icon_Performance-Action-001-03.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval={5000}>
                <img
                  style={{ weight: "250px", height: "400px" }}
                  src="https://red-live.imgix.net/wp-content/uploads/2018/12/19/14/30/yam-R1M-2016-07.jpg?auto=format%2Ccompress"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval={5000}>
                <img
                  style={{ weight: "250px", height: "400px" }}
                  src="https://cdn.motor1.com/images/mgl/OWnke/s1/2020-yamaha-yzf-r1.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval={5000}>
                <img
                  style={{ weight: "250px", height: "400px" }}
                  src="data:image/jpeg;base64,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"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval={5000}>
                <img
                  style={{ weight: "250px", height: "400px" }}
                  src="https://cdn.motor1.com/images/mgl/l0brW/s1/4x3/yamaha-yzf-r1m-2018.webp"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className="row video mb-2 ">
        <div className="col-md-12">
          <iframe
            width="1200"
            height="600"
            src="https://www.youtube.com/embed/DiSqcCafnSQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="row mb-3 mt-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d385342.34638101025!2d28.595287745698386!3d41.014598472623476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d40.9882728!2d29.0343543!4m5!1s0x14caa089745d1f0d%3A0xe4cd6ef3ef898c72!2syamaha%20istanbul!3m2!1d41.001506299999996!2d28.6892534!5e0!3m2!1str!2str!4v1673858166676!5m2!1str!2str"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

export default Body;
