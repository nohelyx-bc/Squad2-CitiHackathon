/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import logoazul from "../../assets/CitiLogo-azul.png";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div id="sidebar">
      <div className="toggle-btn">
        <span>&#9776</span>
      </div>
      <ul>
        <li>
          <img src={logoazul} alt="Logo Citibanamex" className="logo"></img>
        </li>
        <li>CONFIGURACION DE ACCESIBILIDAD</li>
        <li>MODO OSCURO</li>
        <li>ESCALA DE GRISES</li>
      </ul>
    </div>
  );
};

export default Sidebar;