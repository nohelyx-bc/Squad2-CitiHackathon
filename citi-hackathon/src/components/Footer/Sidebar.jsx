/* eslint-disable no-unused-vars */
import React from "react";
import tamañoLetra from "../../assets/TamañoLetra-azul.png";


const Sidebar = ({ open, setOpen }) => {
  
  function closeSidebar(){
    console.log(setOpen)
    setOpen(false);
  }

  function darkMode() {
    if (document.body.className === 'dark') {
      document.body.className = ''
      return
    } else {
      document.body.className = 'dark'
    }
  }

  function greyMode() {
    if (document.body.className === 'grey') {
      document.body.className = ''
      return
    } else {
      document.body.className = 'grey'
    }
  }

  function defaultMode() {
    document.body.className = ''
  }

  return open ? (
    <div id="sidebar">
      <div className="content">
        <ul>
          <li className="center-item">
            <div className="logo"></div>
          </li>
          <li className="btn-title">CONFIGURACION DE ACCESIBILIDAD</li>
          <li className="alinear-horizontal">
            <img className="icon-pequeño" src={tamañoLetra} alt="Letra pequeña" />
            <img className="icon-mediano" src={tamañoLetra} alt="Letra mediana" />
            <img className="icon-grande" src={tamañoLetra} alt="Letra grande" /> 
          </li>
          <li className="btn-oscuro" onClick={darkMode}>MODO OSCURO</li>
          <li className="btn-grises" onClick={greyMode}>ESCALA DE GRISES</li>
          <li className="btn-predefinida" onClick={defaultMode}>PREDEFINIDA</li>
        </ul>
      </div>
      <div className="close style-close" onClick={closeSidebar}>X</div>
    </div>
  ) : null
};

export default Sidebar;