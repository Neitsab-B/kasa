import React from "react";
import './card.css'

const Card = ({ apartment }) => {
  return (
      <div className="card-container">
        <img src={apartment.cover} alt={apartment.title} />
        <div className="infos">
          <h4>{apartment.title}</h4>
        </div>
      </div>
  );
};

export default Card;
