import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Parts = () => {
  const [parts, setParts] = useState([]);
  const navigate = useNavigate();

  const handlePurchaseBtn = (_id) => {
    navigate(`/purchase/${_id}`);
  };

  const allParts = (_id) => {
    navigate(`/products`);
  };

  const maxItem = parts.slice(0, 6);

  useEffect(() => {
    fetch("https://guarded-ocean-54362.herokuapp.com/parts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);

  return (
    <section className=" mt-20 py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Parts</h2>
      <div className=" grid grid-cols-1  mx-auto gap-y-8 md:gap-x-8 justify-items-center lg:px-32 md:grid-cols-2 lg:grid-cols-3">
        {maxItem.map((part) => (
          <div
            key={part._id}
            className="text-center shadow-xl card w-96 bg-base-100"
          >
            <div className="card-body">
              <img src={part.img} alt="" />
              <h3 className="justify-center text-xl font-semibold card-title ">
                {part.name}
              </h3>

              <p className="text-lg">
                {" "}
                <strong>Price:</strong> {part.price}
              </p>
              <div className="justify-center card-actions">
                <button
                  onClick={() => handlePurchaseBtn(part._id)}
                  className="text-base text-white btn btn-primary btn-sm text-bold bg-gradient-to-r from-primary to-secondary "
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="justify-end  card-actions lg:px-40 mt-10">
        <button
          onClick={allParts}
          className="text-base text-white btn btn-primary text-bold bg-gradient-to-r from-primary to-secondary "
        >
          More Parts <BsArrowRight className="text-2xl" />
        </button>
      </div>
    </section>
  );
};

export default Parts;
