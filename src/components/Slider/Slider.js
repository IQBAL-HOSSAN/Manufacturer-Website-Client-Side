import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Slider.css";

import Slider from "react-slick";

// import img1 from "../../imgs/sliderImages/slide-show1.jpg";
// import img2 from "../../imgs/sliderImages/slide-show2.jpg";
// import img3 from "../../imgs/sliderImages/slide-show3.jpg";

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
