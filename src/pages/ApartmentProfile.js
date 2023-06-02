import React from "react";
import { useParams, useNavigate, useEffe } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import ApartmentInfos from "../components/ApartmentInfos/ApartmentInfos";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import ImageSlider from "../components/ImageSlider/ImageSlider";

const ApartmentProfile = () => {
  //utilisation du hook useNavigate pour la redirection vers la page 404
  let navigate = useNavigate();

  const { data } = useFetch("../apartments.json");
  const { id } = useParams();

  const arrOfData = [];
  Object.keys(data).forEach((key) => {
    arrOfData.push(data[key]);
  });

  const currentApartment = arrOfData.find((d) => d.id === id);

  // rajout d'un if else pour rediriger la page vers 404 en cas d'erreur dans l'ID du logement
  if (currentApartment) {
    return (
      <>
        <Header />
        {currentApartment && <ImageSlider props={currentApartment.pictures} />}
        {currentApartment && <ApartmentInfos props={currentApartment} />}
        <Footer />
      </>
    );
  } else {
    navigate("./404");
  }
};

export default ApartmentProfile;
