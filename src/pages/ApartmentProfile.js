import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import ApartmentInfos from "../components/ApartmentInfos/ApartmentInfos";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js"
import ImageSlider from "../components/ImageSlider/ImageSlider"

const ApartmentProfile = () => {
  const { data } = useFetch("../apartments.json");
  const { id } = useParams();

  const arrOfData = [];
  Object.keys(data).forEach((key) => {
    arrOfData.push(data[key]);
    console.log(arrOfData);
  });

  const currentApartment = arrOfData.find((d) => d.id === id);
  console.log(currentApartment);

  return (
    <>
      <Header />
      {currentApartment && <ImageSlider props={currentApartment.pictures} /> }
      {currentApartment && <ApartmentInfos props={currentApartment} />}
      <Footer />
    </>
  );
};

export default ApartmentProfile;