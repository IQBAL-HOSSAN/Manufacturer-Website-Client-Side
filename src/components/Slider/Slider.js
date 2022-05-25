import React from "react";
import "./Slider.css";

import Slider from "react-slick";

const slickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <img
            src="https://www.electronics.com.bd/image/cache/catalog/banner/2022%20Banners/Front_Big_Banners/Fentastic-Products-1760x880.webp"
            height="600px"
            width="100%"
          />
        </div>
        <div>
          <img
            src="https://www.electronics.com.bd/image/cache/catalog/banner/2022%20Banners/Front_Big_Banners/Default-resolution%20/Express-Delivery-opt-1760x880.webp"
            height="600px"
            width="100%"
          />
        </div>
        <div>
          <img
            src="https://www.electronics.com.bd/image/cache/catalog/banner/2022%20Banners/Front_Big_Banners/Default-resolution%20/WROPO-1760x880.webp"
            height="600px"
            width="100%"
          />
        </div>
      </Slider>
    </>
  );
};

export default slickSlider;
