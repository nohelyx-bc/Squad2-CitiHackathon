/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Transferencias = () => {
  const navigate = useNavigate();
  const handleConfirmar = () => {
    navigate("/ConfirmacionTransferencia");
  };
  const handleRegresar = () => {
    navigate("/");
  };
  return (
<<<<<<< HEAD
    <> 
    <div className="container-transferencias">
    <Header />
      <h2>TRANSFERENCIA</h2>
      <form className="info-container">
        <section className="info-cuenta-origen">
        <h3>SALDO DISPONIBLE</h3>
        <p>$20.000.00</p>
        <h3>DESDE CUENTA ORIGEN</h3>
        <p>***587852</p>
        </section>
        <input placeholder= "BENEFICIARIO"></input>
        <input placeholder="CONCEPTO"></input>
        <input placeholder="IMPORTE"></input>
      </form>
      <section className="botones">
        <button className="boton-regresar">REGRESAR</button>
        <button className="boton-confirmar">CONFIRMAR</button>     
      </section>
    </div>
    <Footer />
=======
    <>
      <div className="container-transferencias">
        <Header />
        <h2>TRANSFERENCIA</h2>
        <form className="info-container">
          <section className="info-cuenta-origen">
            <p>SALDO DISPONIBLE</p>
            <p>$20.000.00</p>
            <p>CUENTA DE ORIGEN</p>
            <p>***587852</p>
          </section>
          <input placeholder="BENEFICIARIO"></input>
          <input placeholder="CONCEPTO"></input>
          <input placeholder="IMPORTE"></input>
        </form>
        <section className="botones">
          <button className="boton-regresar" onClick={handleRegresar}>
            REGRESAR
          </button>
          <button className="boton-confirmar" onClick={handleConfirmar}>
            CONFIRMAR
          </button>
        </section>
      </div>
      <Footer />
>>>>>>> 735cc710197399cc145e6f550bd6349d9eaf6633
    </>
  );
};
export default Transferencias;
