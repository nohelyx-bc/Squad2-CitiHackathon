/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import logoazul from "../../assets/CitiLogo-azul.png";
import tamañoLetra from "../../assets/TamañoLetra-azul.png";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div id="sidebar">
      <ul>
        <li className="center-item">
          <img src={logoazul} alt="Logo Citibanamex" className="logo"></img>
        </li>
        <li className="btn-title">CONFIGURACION DE ACCESIBILIDAD</li>
        <li className="alinear-horizontal">
        <img className="icon-pequeño" src={tamañoLetra} alt="Letra pequeña"/>
        <img className="icon-mediano" src={tamañoLetra} alt="Letra mediana"/>
        <img className="icon-grande" src={tamañoLetra} alt="Letra grande"/>
      </li>
        <li className="btn-oscuro">MODO OSCURO</li>
        <li className="btn-grises">ESCALA DE GRISES</li>
        <li className="btn-predefinida">PREDEFINIDA</li>
      </ul>
    </div>
  );
};

export default Sidebar;