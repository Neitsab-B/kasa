import React from "react";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Header />
      <div className="error-container">
        <div className="error-number">404</div>
        <div className="error-text">
          Oups! La page que vous avez demandé n'existe pas.
        </div>
        <div className="back-home-link">
          <Link to="/">Retourner sur la page d'accueil</Link>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
