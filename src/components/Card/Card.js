import React from "react";
import "./card.css";
import { useFetch } from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";

function Card() {
  const { data } = useFetch("../apartments.json");
  const arrOfData = [];
  Object.keys(data).forEach((key) => {
    arrOfData.push(data[key]);
  });

  return arrOfData.map((i, index) => (
    <NavLink to={"/apartment/" + i.id} className="card" key={index}>
      <img className="card_img" src={i.cover} alt={i.title} />
      <h2 className="card_title">{i.title}</h2>
    </NavLink>
  ));
}

export default Card;
