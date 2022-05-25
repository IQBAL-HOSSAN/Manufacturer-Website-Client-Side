import React from "react";
import { BsFillFlagFill, BsPeopleFill } from "react-icons/bs";
import { GrDeliver } from "react-icons/gr";
import { FaThumbsUp } from "react-icons/fa";
import "./businessSummery.css";

const BusinessSummery = () => {
  const summery = [
    { icon: BsFillFlagFill, number: 80, text: "Countries" },
    { icon: GrDeliver, number: 600, text: "Completed Delivery" },
    { icon: BsPeopleFill, number: 300, text: "Happy Clients" },
    { icon: FaThumbsUp, number: 530, text: "Feedbacks" },
  ];
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center">
        ABOUT HLC METAL PARTS MANUFACTURER
      </h2>
      <h3 className="text-2xl mt-3 text-center">
        Try to understand user expectation
      </h3>
      {/* <p>
        We are technical in the development and design of precision tooling and
        the production of precision metal parts (such as precision casting,
        stamping, CNC machining metal parts) and plastic parts. We also provide
        assembling and fitting service of metal and plastic accessories.
      </p> */}
      <div className=" mt-10 grid grid-cols-1  mx-auto gap-y-8 md:gap-x-8 justify-items-center lg:px-32 md:grid-cols-4 lg:grid-cols-4">
        <div className="w-full text-center shadow rounded p-5">
          <div className="text-secondary text-6xl flex justify-center  ">
            <BsFillFlagFill />
          </div>
          <h3 className="text-4xl font-bold my-6">72</h3>
          <p className="text-2xl font-bold">Countries</p>
        </div>
        <div className="w-full text-center shadow rounded p-5">
          <div
            style={{ color: "#fff" }}
            className="text-primary text-6xl flex justify-center  "
          >
            <GrDeliver className="icon" style={{ color: "#fff" }} />
          </div>
          <h3 className="text-4xl font-bold my-6">700</h3>
          <p className="text-2xl font-bold">Complete Delivery</p>
        </div>
        <div className="w-full text-center shadow rounded p-5">
          <div className="text-secondary text-6xl flex justify-center  ">
            <BsPeopleFill />
          </div>
          <h3 className="text-4xl font-bold my-6">500</h3>
          <p className="text-2xl font-bold">Happy Clients</p>
        </div>
        <div className="w-full text-center shadow rounded p-5">
          <div className="text-secondary text-6xl flex justify-center  ">
            <FaThumbsUp />
          </div>
          <h3 className="text-4xl font-bold my-6">679</h3>
          <p className="text-2xl font-bold">Feedback</p>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummery;
