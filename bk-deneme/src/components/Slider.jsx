import React from "react";

function Slider() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img
              className="d-block w-100"
              src="https://www.burgerking.com.tr/CmsFiles/SliderImages/102/7.webp"
              alt="First slide"
            />
          </div>
          <div className="carousel-item ">
            <img
              className="d-block w-100"
              src="https://www.burgerking.com.tr/CmsFiles/SliderImages/1211/1.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item ">
            <img
              className="d-block w-100"
              src="https://www.burgerking.com.tr/CmsFiles/SliderImages/1212/1.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon ılerı_gerı"
            aria-hidden="true"
          />
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon ılerı_gerı"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  );
}

export default Slider;
