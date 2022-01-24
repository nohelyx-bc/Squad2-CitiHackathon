/* eslint-disable no-unused-vars */
import React from "react";
import logoazul from "../../assets/CitiLogo-azul.png";
import TamañoLetra from "../../assets/TamañoLetra-azul.png";
import { ButtonA } from "../ButtonA";

const Sidebar = ({open}) => {
  
  return open ? ( 
    <div id="sidebar">
      <ul>
        <li className="center-item">
          <img src={logoazul} alt="Logo Citibanamex" className="logo"></img>
        </li>
        <li className="btn-title">CONFIGURACION DE ACCESIBILIDAD</li>
        <li className="alinear-horizontal">
        < ButtonA />
        <img className="icon-pequeño" src={TamañoLetra} alt="Letra pequeña"/>
        <img className="icon-mediano" src={TamañoLetra} alt="Letra mediana"/>
        <img className="icon-grande" src={TamañoLetra} alt="Letra grande"/>
      </li>
        <li className="btn-oscuro">MODO OSCURO</li>
        <li className="btn-grises">ESCALA DE GRISES</li>
        <li className="btn-predefinida">PREDEFINIDA</li>
      </ul>
    </div>
  ) : null
};

export default Sidebar;