import React from "react";
import "./banner.css";

function Banner({image, text = false}) {
  return (
    <div className="banner">
      <img src={image} />
      {text && <p>{text}</p>}
    </div>
  );
}

export default Banner;
