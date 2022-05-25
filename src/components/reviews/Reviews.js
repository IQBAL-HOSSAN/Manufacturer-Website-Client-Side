import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/review")
      .then((res) => res.json())
      .then((reviews) => setReviews(reviews));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
  };

  return (
    <section className=" py-20 ">
      <h2 className="text-3xl font-bold text-center mb-8">
        What our clients says!
      </h2>
      <div className=" w-2/4 mx-auto  ">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div
              key={review._id}
              className="text-center bg-gray-100 rounded w-96"
            >
              <div className="card-body">
                <div className="flex justify-center">
                  <ReactStars size={30} value={review.rating} edit={false} />
                </div>

                <p className="justify-center text-xl font-semibold card-title text-gray-500 ">
                  {review.review}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
