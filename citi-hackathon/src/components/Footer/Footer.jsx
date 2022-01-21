/* eslint-disable no-unused-vars */
import React from "react";
import accesibilidad from "../../assets/accesibilidadBlanco.png";
import voz from "../../assets/Voz-azul.png";
import tamañoLetra from "../../assets/tamañofuente-EscalaDeGrises.png";

const Footer = () => {
  return (
    <div>
      <footer>
      <img
        className="icon-footer"
        src={accesibilidad}
        alt="icono para acceder a menu de accesibilidad"
      />
      <img
        className="icon-footer"
        src={voz}
        alt="icono de accesibilidad de voz"
      />
      <img
        className="icon-footer"
        src={tamañoLetra}
        alt="icono para aumentar el tamaño de letra"
      />
      </footer>
    </div>
  );
};

export default Footer;
