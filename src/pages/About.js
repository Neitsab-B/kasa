import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Slideshow from "../components/Slideshow/Slideshow";

const About = () => {
  return (
    <div>
      <Header />
      <Banner image="./images/mountainsLandscape.png" />
      <Slideshow />
      <Footer />
    </div>
  );
};

export default About;
