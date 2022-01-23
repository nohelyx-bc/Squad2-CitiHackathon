/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import logoazul from "../../assets/CitiLogo-azul.png";
import tamañoLetra from "../../assets/TamañoLetra-azul.png";


const Sidebar = ({open}) => {
  const [fontSize, setFontSize]= useState(16);
  return open ? ( 
    <div id="sidebar">
      <ul>
        <li className="center-item">
          <img src={logoazul} alt="Logo Citibanamex" className="logo"></img>
        </li>
        <li className="btn-title">CONFIGURACION DE ACCESIBILIDAD</li>
        <li className="alinear-horizontal">
        <img className="icon-pequeño" onClick={()=>setFontSize(fontSize)} src={tamañoLetra} alt="icono para colocar Letra pequeña"/>
        <img className="icon-mediano" onClick={()=>setFontSize(fontSize+2)} src={tamañoLetra} alt="icono para colocar Letra mediana"/>
        <img className="icon-grande" onClick={()=>setFontSize(fontSize+2)} src={tamañoLetra} alt="icono para colocar Letra grande"/>
      </li>
        <li className="btn-oscuro">MODO OSCURO</li>
        <li className="btn-grises">ESCALA DE GRISES</li>
        <li className="btn-predefinida">PREDEFINIDA</li>
      </ul>
    </div>
  ) : null
};

export default Sidebar;