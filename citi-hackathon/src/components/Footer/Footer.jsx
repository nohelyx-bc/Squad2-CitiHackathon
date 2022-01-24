/* eslint-disable no-unused-vars */
import React from "react";

import { useNavigate } from "react-router-dom";
import accesibilidad from "../../assets/Access-white.png";
import voz from "../../assets/Voice.png";
import tamañoLetra from "../../assets/Font.png";


const Footer = ({ setOpen }) => {
  const navigate = useNavigate();
  const handleAsistenteVoz = () => {
    navigate("/VoiceAssistant");
  };

  function openSidebar() {
    setOpen(true);
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
        onClick={handleAsistenteVoz}
      />

      <div
        className="icon-footer-font"
        alt="icono para aumentar el tamaño de letra"
        id="font-down"
      />
    </footer>
  );
};

export default Footer;
