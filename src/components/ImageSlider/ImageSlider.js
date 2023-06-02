import React, { useState } from "react";
import "./imageSlider.css";

const Slider = ({ props }) => {
  let [index, setIndex] = useState(0);

  /* ajout de deux variables supplémentaires :
  une pour le numéro de l'image actuelle en se calquant sur l'index*/
  const [currentIndex, setCurrentIndex] = useState(0);
  // et une autre sur le nombre total d'images
  const totalImages = props.length;

  /* modification des fonction slider pour mettre à jour l'index de l'image ET
  le numéro affiché avec une logique différente et plus simple */
  const sliderNext = () => {
    let nextIndex = (currentIndex - 1 + totalImages) % totalImages;
    setIndex(nextIndex);
    setCurrentIndex(nextIndex);
  };

  const sliderPrev = () => {
    let prevIndex = (currentIndex + 1) % totalImages;
    setIndex(prevIndex);
    setCurrentIndex(prevIndex);
  };

  if (props.length === 1) {
    return (
      <div className="slider">
        <img className="slider__img" src={props[index]} alt={props} />
      </div>
    );
  } else {
    return (
      <div className="slider">
        {/* ajout d'une div pour afficher le numéro de l'image en court et le total */}
        <div className="count">
          {currentIndex + 1}/{totalImages}
        </div>
        <img
          src="/icons/arrowRight.png"
          className="arrow-right"
          onClick={sliderNext}
          alt="next"
        />
        <img
          src="/icons/arrowLeft.png"
          className="arrow-left"
          onClick={sliderPrev}
          alt="prev"
        />
        <img className="slider__img" src={props[index]} alt={props} />
      </div>
    );
  }
};

export default Slider;
