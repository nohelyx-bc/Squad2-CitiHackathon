import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../Footer/Sidebar";

const AltaBeneficiario = ({ addBeneficiary, fontSize }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const [tipoCuentaState, setTipoCuenta] = useState({});
  const [montoMaxState, setMontoMax] = useState({});
  const [numCuentaState, setNumCuenta] = useState({});
  const [nombreTitularState, setNombreTitular] = useState({});
  const handleTipoCuenta = (e) => setTipoCuenta({ ...tipoCuentaState, tipoCuenta: e.target.value });
  const handleMontoMax = (e) => setMontoMax({ ...montoMaxState, montoMax: e.target.value });
  const handleNumCuenta = (e) => setNumCuenta({ ...numCuentaState, numCuenta: e.target.value });
  const handleNombreTitular = (e) => setNombreTitular({ ...nombreTitularState, nombreTitular: e.target.value });



  const { tipoCuenta } = tipoCuentaState;
  const { montoMax } = montoMaxState;
  const { numCuenta } = numCuentaState;
  const { nombreTitular } = nombreTitularState;


  const handleTransferencia = () => {
    navigate("/");
  };

  return (
    <>
      <div className="container-transferencias">
        <Header />
        <h2 style={{ fontSize: `${fontSize}px` }}>HOLA </h2>
        <legend className="AltaBeneficiario-legend">
          AGREGAR CUENTAS A TERCEROS
        </legend>
        <form action="" className="altaBeneficiario-form info-container"
        // onSubmit={(e) => {
        //       e.preventDefault();
        //       addBeneficiary(tipoCuenta, montoMax, numCuenta, nombreTitular)
        //     }}
        >

          <label htmlFor="TipoDeCuenta" className="AltaBeneficiario-label">TIPO DE CUENTA </label>
          <input
            className="tipoCuenta"
            onChange={handleTipoCuenta}
            type="text"
            id="TipoDeCuenta"
            required />

          <label htmlFor="NumDeCuenta" className="AltaBeneficiario-label"> NUMERO DE CUENTA</label>
          <input
            className="numCuenta"
            onChange={handleNumCuenta}
            type="number"
            id="NumDeCuenta"
            required />

          <label htmlFor="NombreTitular" className="AltaBeneficiario-label">NOMBRE DEL TITULAR</label>
          <input
            className="nombreTitular"
            onChange={handleNombreTitular}
            type="text"
            id="NombreTitular"
            required />

          <label htmlFor="MontoMax" className="AltaBeneficiario-label"> MONTO MAXIMO A TRANSFERIR </label>
          <input
            className="montoMax"
            onChange={handleMontoMax}
            type="number"
            id="MontoMax"
            required />

        
        </form>
        <button className="boton-confirmar" onClick={(e) => {
          addBeneficiary(tipoCuenta, montoMax, numCuenta, nombreTitular)
          handleTransferencia()
        }} >GUARDAR</button>
      </div>
      <Footer setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default AltaBeneficiario;
