/* eslint-disable no-unused-vars */
import React from "react";
import accesibilidad from "../../assets/accesibilidadBlanco.png";
import voz from "../../assets/Voz-azul.png";
import tamañoLetra from "../../assets/TamañoLetra-azul.png";

const Footer = ({setOpen}) => {
  function openSidebar () {
    setOpen(true)
  }
  return (
    <footer>
      <img
        className="icon-footer"
        src={accesibilidad}
        alt="icono para acceder a menu de accesibilidad" onClick={openSidebar}
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
  );
};

export default Footer;
