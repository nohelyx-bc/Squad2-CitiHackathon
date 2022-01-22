import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const ConfirmacionTransferencia = () => {
  const navigate = useNavigate();
  const handleConfirmar = () => {
    navigate("/");
  };
  const handleRegresar = () => {
    navigate("/Transferencias");
  };

  return (
    <>
      <div className="container-transferencias">
        <Header />
        <h2> HOLA USER</h2>
        <h2>TRANSFERENCIA</h2>
        <form className="info-container">
          <section className="info-cuenta-origen">
            <p className="center-item">CONFIRMACION</p>
            <p>PARA: USER_DESTINATARIO</p>
            <p>DE: CUENTA AHORRO USER</p>
            <p>MONTO 5.000.00</p>
            <p>DESCRIPCION: COMIDA</p>
          </section>
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
    </>
  );
};

export default ConfirmacionTransferencia;
