import React, { useEffect, useState } from "react";
import Card from "../Card/Card.js";
import './apartment.css'

const Apartments = () => {
  const [data, setData] = useState([]);
  const getApartmentsData = () => {
    fetch("./apartments.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  useEffect(() => {
    getApartmentsData();
  }, []);

  return (
    <div className="cards-gallery">      
        {data.map((apartment) => (
          <Card key={apartment.id} apartment={apartment} />
        ))}      
    </div>
  );
};

export default Apartments;
