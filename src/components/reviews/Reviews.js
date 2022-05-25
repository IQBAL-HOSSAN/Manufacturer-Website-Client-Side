import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/review")
      .then((res) => res.json())
      .then((reviews) => setReviews(reviews));
  }, []);
  return (
    <section className="container py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">
        What our clients says!
      </h2>
      <div className=" grid grid-cols-1  mx-auto gap-y-8 md:gap-x-8 justify-items-center lg:px-32 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="text-center shadow-xl card w-96 bg-base-100"
          >
            <div className="card-body">
              <p>{review.rating}</p>
              <h3 className="justify-center text-xl font-semibold card-title text-secondary">
                {review.review}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
