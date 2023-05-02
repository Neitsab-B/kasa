import React from "react";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import Banner from "../components/Banner/Banner.js";
import Apartments from "../components/Apartment/Apartment.js";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner
        image="/images/rocksSeaLandscape.png"
        text="Chez vous, partout et ailleurs"
      />
      <Apartments />
      <Footer />
    </div>
  );
};

export default Home;
