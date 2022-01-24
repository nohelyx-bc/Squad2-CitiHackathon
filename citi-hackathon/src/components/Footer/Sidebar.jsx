/* eslint-disable no-unused-vars */
import React from "react";


const Sidebar = ({ open, setOpen }) => {
  
  function closeSidebar(){
    console.log(setOpen)
    setOpen(false);
  }

  function smallMode() {
    if (document.body.className === 'small-mode') {
      document.body.className = ''
      return
    } else {
      document.body.className = 'small-mode'
    }
  }

  function mediumMode() {
    if (document.body.className === 'medium-mode') {
      document.body.className = ''
      return
    } else {
      document.body.className = 'medium-mode'
    }
  }

  function bigMode() {
    if (document.body.className === 'big-mode') {
      document.body.className = ''
      return
    } else {
      document.body.className = 'big-mode'
    }
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
            <div className="icon-pequeño" onClick={smallMode}></div>
            <div className="icon-mediano" onClick={mediumMode}></div>
            <div className="icon-grande" onClick={bigMode}></div>
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