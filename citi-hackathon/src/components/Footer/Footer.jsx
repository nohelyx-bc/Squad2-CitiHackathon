/* eslint-disable no-unused-vars */
import React from "react";

import { useNavigate } from "react-router-dom";
import accesibilidad from "../../assets/Access-white.png";
import voz from "../../assets/Voice.png";
import tamañoLetra from "../../assets/Font.png";


const Footer = ({ setOpen }) => {
  
  function mediumMode() {
    if (document.body.className === 'medium-mode') {
      document.body.className = ''
      return
    } else {
      document.body.className = 'medium-mode'
    }
  }

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
        id="font-down" onClick={mediumMode}
      />
    </footer>
  );
};
export default Footer;
