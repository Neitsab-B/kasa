import React, { useState } from "react";
import "./imageSlider.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrent] = useState(0);

  const previousImage = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrent(newIndex);
  };

  const nextImage = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrent(newIndex);
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className="slider">
      <img src='./images/arrowLeft' className="leftArrow" onClick={previousImage} alt="Left arrow">     
      </img>
      <img src='./images/arrowRight' className="rightArrow" onClick={nextImage} alt="Right arrow">
      </img>
      <div style={slideStyles}></div>
    </div>
  );
};

export default ImageSlider;
