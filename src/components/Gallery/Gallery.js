import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider.js";
import "./gallery.css";

const Gallery = () => {

  const slides = [
    { url: "../images/mountainsLandscape.png", title: "Mountains" },
    { url: "../images/rocksSeaLandscape.png", title: "Rocks" },
  ];

  return (
    <div>
      <h1>Fiche Logement</h1>
      <div className="slides-container">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Gallery;
