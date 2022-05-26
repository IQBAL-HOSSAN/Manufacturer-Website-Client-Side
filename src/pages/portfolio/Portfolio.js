import React from "react";
import { Link } from "react-router-dom";
import Iqbal from "../../img/developerIqbal.jpg";
import Laywer from "../../img/portfolio/lawyer.png";
import WareHouse from "../../img/portfolio/wareHouse.png";
import Manufacture from "../../img/portfolio/manufacture.png";

const Portfolio = () => {
  return (
    <main className="px-3  lg:px-32 mx-auto ">
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-3">About Me</h2>
        <div className="flex justify-center mb-20">
          <div
            style={{ background: "#e23d8a" }}
            className="divide-y-8  h-1 w-20"
          ></div>
        </div>
        {/* about */}
        <div className=" grid grid-cols-1   gap-y-8 md:gap-x-8 items-center justify-center md:grid-cols-2 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold text-gray-400 mb-2">
              Developer Iqbal Hossan
            </h2>
            <div className="mb-3">
              <div
                style={{ background: "#e23d8a" }}
                className="divide-y-8  h-1 w-44"
              ></div>
            </div>
            <p className="text-2xl ">Full stack developer</p>
            <div className="mt-8">
              <p>
                <strong className="text-gray-400">AGE:</strong> 23
              </p>
              <p>
                <strong className="text-gray-400">PHONE:</strong>{" "}
                +880-1845555047{" "}
              </p>
              <p>
                <strong className="text-gray-400">EMAIL:</strong>{" "}
                engiqbal1999@gmail.com
              </p>
              <p>
                <strong className="text-gray-400">ADDRESS:</strong> Begumganj,
                Noakhali
              </p>
            </div>
          </div>
          <div>
            <img src={Iqbal} alt="" />
          </div>
        </div>
        {/* welcome */}
        <div className="mt-10">
          <h2 className="text-4xl font-bold text-gray-400 mb-3">Hi</h2>
          <div className="mb-5">
            <div
              style={{ background: "#e23d8a" }}
              className="divide-y-8  h-1 w-10"
            ></div>
          </div>
          <p>
            Welcome to Iqbal Hossan. I'm a professional web designer and
            developer. I have 2+ years experience in developing creative and
            responsive websites on various Platforms, CMS and Languages. I build
            High-End Lucrative, Professional, Responsive and Eye-Catching
            websites from scratch any current website AND can fix bugs in any
            website. My major goal is to give my clients exactly what they need
            and guide them all through the procedure. Lets connect and begin
            taking a shot at your fantasy site.
          </p>
          <button className="btn btn-primary mt-4">Learn More</button>
        </div>
      </section>

      {/* resume */}
      <section>
        <div className=" grid grid-cols-1   gap-y-8 md:gap-x-8  justify-center md:grid-cols-2 lg:grid-cols-2">
          <div>
            <h3 className="text-3xl text-gray-400 mb-8">Education</h3>
            <div className="mb-5">
              <h3 className="text-2xl text-primary text-semibold">
                Laxmipur Polytechnic Institute
              </h3>
              <p className="text-sm text-gray-400 mt-2 mb-3">2017 - 2021</p>
              <h3 className="text-2xl">Diploma In Engineering</h3>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl text-primary text-semibold">
                Vaterchar Islamia Dakhil Madrasah
              </h3>
              <p className="text-sm text-gray-400 mt-2 mb-3">2015 - 2017</p>
              <h3 className="text-2xl">SSC/Dakhil</h3>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl text-primary text-semibold">
                Vaterchar Islamia Dakhil Madrasah
              </h3>
              <p className="text-sm text-gray-400 mt-2 mb-3">2014</p>
              <h3 className="text-2xl">JSC</h3>
            </div>
          </div>
          {/* skills */}
          <div>
            <h3 className="text-3xl text-gray-400 mb-8">Skills</h3>
            <div className="mb-4">
              <p className="font-semibold text-gray-400">HTML</p>
              <progress
                className="progress progress-secondary w-3/4"
                value="90"
                max="100"
              ></progress>
              <br />
              <p className="font-semibold text-gray-400">css</p>
              <progress
                className="progress progress-secondary  w-3/4"
                value="80"
                max="100"
              ></progress>
              <br />
              <p className="font-semibold text-gray-400">Bootstrap</p>
              <progress
                className="progress progress-secondary  w-3/4"
                value="80"
                max="100"
              ></progress>
              <br />
              <p className="font-semibold text-gray-400">Tailwind Css</p>
              <progress
                className="progress progress-secondary  w-3/4"
                value="70"
                max="100"
              ></progress>{" "}
              <br />
              <p className="font-semibold text-gray-400">Javascript</p>
              <progress
                className="progress progress-secondary  w-3/4"
                value="70"
                max="100"
              ></progress>
              <br />
              <p className="font-semibold text-gray-400">ReactJs</p>
              <progress
                className="progress progress-secondary  w-3/4"
                value="90"
                max="100"
              ></progress>
              <br />
              <p className="font-semibold text-gray-400">Express</p>
              <progress
                className="progress progress-secondary  w-3/4"
                value="90"
                max="100"
              ></progress>
              <br />
              <p className="font-semibold text-gray-400">MongoDB</p>
              <progress
                className="progress progress-secondary  w-3/4"
                value="70"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </section>
      {/* Projects */}
      <section className="py-20 ">
        <h2 className="text-4xl font-bold text-center  mb-3">Projects</h2>
        <div className="mb-10 flex justify-center">
          <div
            style={{ background: "#e23d8a" }}
            className="divide-y-8  h-1 w-20"
          ></div>
        </div>
        <div className=" grid grid-cols-1   gap-y-8 md:gap-x-8 items-center justify-center md:grid-cols-2 lg:grid-cols-3">
          <a
            style={{ height: "500px", width: "340px" }}
            href="https://assignment-10-lawyer.web.app/"
          >
            <img src={Laywer} alt="" />
          </a>
          <a
            style={{ height: "500px", width: "340px" }}
            href="https://warehouse-management-f437e.web.app/"
          >
            <img src={WareHouse} alt="" />
          </a>
          <Link style={{ height: "500px", width: "340px" }} to="/">
            <img src={Manufacture} alt="" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
