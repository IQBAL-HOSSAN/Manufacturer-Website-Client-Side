import React from "react";

const FrequentlyAskQuestion = () => {
  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center">Our Clients' Question</h2>
      <div className=" mt-10 grid grid-cols-1  mx-auto gap-y-8 md:gap-x-8 justify-items-center lg:px-32 md:grid-cols-2 lg:grid-cols-2">
        {/* question left */}
        <div className="w-full bg-white p-5 rounded-lg">
          <div
            tabIndex="0"
            className="collapse collapse-arrow border-b border-b-base-300 bg-base-100 "
          >
            <div className="collapse-title text-xl font-medium">
              Can be customized?
            </div>
            <div className="collapse-content">
              <p>Yes, 2D or 3D, samples are welcome.</p>
            </div>
          </div>
          <div
            tabIndex="0"
            className="collapse collapse-arrow border-b border-b-base-300 bg-base-100 "
          >
            <div className="collapse-title text-xl font-medium">
              What location are your factory in?
            </div>
            <div className="collapse-content">
              <p>
                We are located in Dongguan, Guangdong, it is nearby Shenzhen
                port.{" "}
              </p>
            </div>
          </div>
          <div
            tabIndex="0"
            className="collapse collapse-arrow border-b border-b-base-300 bg-base-100 "
          >
            <div className="collapse-title text-xl font-medium">
              What tolerance can you meet?
            </div>
            <div className="collapse-content">
              <p>For the cnc turning parts: 0.001~0.005</p>
            </div>
          </div>
        </div>
        {/* question right */}
        <div className="w-full bg-white p-5 rounded-lg">
          <div
            tabIndex="0"
            className="collapse collapse-arrow border-b border-b-base-300 bg-base-100 "
          >
            <div className="collapse-title text-xl font-medium">
              Can provide the PPAP when samples?
            </div>
            <div className="collapse-content">
              <p>Yes, We can </p>
            </div>
          </div>
          <div
            tabIndex="0"
            className="collapse collapse-arrow border-b border-b-base-300 bg-base-100 "
          >
            <div className="collapse-title text-xl font-medium">
              How many stamping machines do you have ?{" "}
            </div>
            <div className="collapse-content">
              <p>
                Stamping machines: 35sets <br />
                CNC turning machines: 35sets
              </p>
            </div>
          </div>
          <div
            tabIndex="0"
            className="collapse collapse-arrow border-b border-b-base-300 bg-base-100 "
          >
            <div className="collapse-title text-xl font-medium">
              What's the nearest export port?
            </div>
            <div className="collapse-content">
              <p>Shenzhen port</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskQuestion;
