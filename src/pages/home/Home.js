import React from "react";
import Slider from "../../components/Slider/Slider";
import Parts from "./Parts";
import Reviews from "../../components/reviews/Reviews";
import BusinessSummery from "../../components/businessSummery/BusinessSummery";
import FrequentlyAskQuestion from "../../components/frequentlyAskQuestion/FrequentlyAskQuestion";
import WhyWeAreBest from "../../components/whyWeAreBest/WhyWeAreBest";

const Home = () => {
  return (
    <main>
      <Slider />
      <Parts />
      <BusinessSummery />
      <WhyWeAreBest />
      <FrequentlyAskQuestion />
      <Reviews />
    </main>
  );
};

export default Home;
