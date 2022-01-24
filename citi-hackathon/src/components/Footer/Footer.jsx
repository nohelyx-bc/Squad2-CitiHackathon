/* eslint-disable no-unused-vars */
import React from "react";

const Footer = ({setOpen}) => {
  function openSidebar () {
    setOpen(true)
  }
  return (
    <footer>
      <div
        className="icon-footer-access"
        alt="icono para acceder a menu de accesibilidad" onClick={openSidebar}
      />
      <div
        className="icon-footer-voice"
        alt="icono de accesibilidad de voz"
      />
      <div
        className="icon-footer-font"
        alt="icono para aumentar el tamaño de letra"
      />
    </footer>
  );
};

export default Footer;
