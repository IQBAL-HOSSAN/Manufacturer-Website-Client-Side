import React from "react";
import Slider from "../../components/Slider/Slider";
import Parts from "./Parts";

import Reviews from "../../components/reviews/Reviews";
import BusinessSummery from "../../components/businessSummery/BusinessSummery";

const Home = () => {
  return (
    <main>
      <Slider />
      <Parts />
      <BusinessSummery />
      <Reviews />
    </main>
  );
};

export default Home;
