import React from "react";
import Helmet from "../components/Helmet";
import Slider from "../components/Slider";
import sliderData from "../assets/Json/sliderData.json";
const Home = () => {
  return (
    <Helmet title="Home">
      {/* Slider*/}
      <Slider data={sliderData} />
      {/*End slider */}
    </Helmet>
  );
};

export default Home;
