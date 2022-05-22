import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "./Brands.css";

const Brands = () => {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className=" brand-section text-center  py-5">
      <Container>
        <h2 className=" mb-4">Brans</h2>
        <Slider {...settings}>
          <div>
            <img
              src="https://templates.scriptsbundle.com/carspot/demos/images/brands/3.png"
              height="200px"
            />
          </div>
          <div>
            <img
              src="https://templates.scriptsbundle.com/carspot/demos/images/brands/2.png"
              height="200px"
            />
          </div>
          <div>
            <img
              src="https://templates.scriptsbundle.com/carspot/demos/images/brands/4.png"
              height="200px"
            />
          </div>
          <div>
            <img
              src="https://templates.scriptsbundle.com/carspot/demos/images/brands/1.png"
              height="200px"
            />
          </div>
          <div>
            <img
              src="https://templates.scriptsbundle.com/carspot/demos/images/brands/4.png"
              height="200px"
            />
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default Brands;
