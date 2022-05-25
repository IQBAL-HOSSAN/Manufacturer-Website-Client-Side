import React from "react";
import {
  AiOutlineSafetyCertificate,
  AiOutlineDeliveredProcedure,
  AiTwotoneCloseSquare,
} from "react-icons/ai";

const WhyWeAreBest = () => {
  return (
    <section className=" py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-8">
        Why HLC is the best Metal Parts <br />
        Manufacturer And Supplier Choice?{" "}
      </h2>
      <div className=" mt-10 grid grid-cols-1  mx-auto gap-y-8 md:gap-x-8 justify-items-center lg:px-32 md:grid-cols-3 lg:grid-cols-3">
        <div className="w-full text-center shadow rounded p-5">
          <div className="text-secondary text-6xl flex justify-center  ">
            <AiOutlineSafetyCertificate />
          </div>
          <h3 className="text-4xl font-semibold my-6">Certificates</h3>
          <p className="text-2xl ">IATF16949 ISO13... Certified</p>
        </div>
        <div className="w-full text-center shadow rounded p-5">
          <div className="text-secondary text-6xl flex justify-center  ">
            <AiOutlineDeliveredProcedure />
          </div>
          <h3 className="text-4xl font-semibold my-6">Fast Delivery</h3>
          <p className="text-2xl ">
            All metal parts are supported with a fast delivery service.
          </p>
        </div>
        <div className="w-full text-center shadow rounded p-5">
          <div className="text-secondary text-6xl flex justify-center  ">
            <AiTwotoneCloseSquare />
          </div>
          <h3 className="text-4xl font-semibold my-6">After-service</h3>
          <p className="text-2xl ">
            Overseas factory can provide the local production in South America
            and East Europe
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreBest;
