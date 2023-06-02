import "./slideshow.css";
import { useState } from "react";

const Slideshow = ({ props, title }) => {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className="dropdown" onClick={toggleState}>
      <div className="dropdown-header">
        <h2 className="dropdown-title">{title}</h2>
        <img
          className={toggle ? "arrow" : "arrow-open"}
          src="../icons/arrowLeft.png"
          alt="arrow"
        />
      </div>
      <div
        className={
          toggle
            ? "dropdown-text dropdown-text-open"
            : "dropdown-text dropdown-text-close"
        }
      >
        {title === "Equipements" ? (
          <ul>
            {props.map((i, index) => (
              <li key={index}>{i}</li>
            ))}
          </ul>
        ) : (
          <p>{props}</p>
        )}
      </div>
    </div>
  );
};

export default Slideshow;
