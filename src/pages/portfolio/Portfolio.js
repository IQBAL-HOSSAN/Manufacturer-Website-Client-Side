import React from "react";
import Logo from "../../logo.svg";

const Portfolio = () => {
  return (
    <main>
      <section className="py-20">
        <div className=" grid grid-cols-1  mx-auto gap-y-8 md:gap-x-8 justify-items-center lg:px-32 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl text-primary"> Developer Iqbal Hossan</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eum
              itaque dolorem quisquam omnis, excepturi placeat? Error non
              possimus officia, natus in alias numquam consectetur ad
              perspiciatis cum adipisci dolore!
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
          <div>
            <img src={Logo} alt="" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
