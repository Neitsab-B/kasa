import React from "react";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import Banner from "../components/Banner/Banner.js";
import Gallery from "../components/Gallery/Gallery.js";

const Home = () => {
  return (
    <>
      <Header />
      <Banner
        image="/images/rocksSeaLandscape.png"
        text="Chez vous, partout et ailleurs"
      />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
