import React from "react";
import "./apartmentInfos.css";
import Stars from "../Stars/Stars";
import Slideshow from "../Slideshow/Slideshow.js";

const ApartmentInfos = (props) => {
  const fullName = props.props.host?.name || "";
  const [last, first] = fullName.split(" ");

  return (
    <div className="apartment">
      <div className="apartment-header">
        <div className="apartment-informations">
          <h2 className="apartment__title">{props.props.title}</h2>
          <h3 className="apartment__location">{props.props.location}</h3>
          {Array.isArray(props.props.tags) && (
            <ul className="apartment__tags">
              {props.props.tags.map((i, index) => (
                <li className="apartment__tag" key={index}>
                  {i}
                </li>
              ))}
            </ul>
          )}
        </div>
        {props.props.host && (
          <div className="apartment-host">
            <div className="apartment-host__profile">
              <img
                src={props.props.host.picture}
                className="apartment-host__picture"
                alt={"picture of " + props.props.host.name}
              />
              <div className="apartment-host__name">
                <h2>{last}</h2>
                <h2>{first}</h2>
              </div>
            </div>
            <div className="product-host__rating">
              <Stars props={props.props.rating} />
            </div>
          </div>
        )}
        {
          <div className="slideshow-parent">
            <Slideshow props={props.props.description} title={"Description"} />
            <Slideshow props={props.props.equipments} title={"Equipements"} />
          </div>
        }
      </div>
    </div>
  );
};

export default ApartmentInfos;
