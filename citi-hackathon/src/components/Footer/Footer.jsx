/* eslint-disable no-unused-vars */
import React from "react";
import accesibilidad from "../../assets/accesibilidadBlanco.png";
import voz from "../../assets/Voz-azul.png";
import tamañoLetra from "../../assets/TamañoLetra-azul.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <img className="icon-footer" src={voz} alt="icon de voz" />
        <img className="icon-footer" src={tamañoLetra} alt="icon de letra" />
        <img
          className="icon-footer"
          src={accesibilidad}
          alt="icon accesibilidad"
        />
      </footer>
    </div>
  );
};

export default Footer;
