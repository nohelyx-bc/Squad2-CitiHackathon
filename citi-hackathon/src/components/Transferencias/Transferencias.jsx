/* eslint-disable no-unused-vars */
import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Footer/Sidebar";

const Transferencias = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleConfirmar = () => {
    navigate("/ConfirmacionTransferencia");
  };
  const handleRegresar = () => {
    navigate("/");
  };
  return (
    <>
      <div className="container-transferencias">
        <Header />
        <h2>TRANSFERENCIA</h2>
        <form className="info-container-transferencia">
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
      <Footer setOpen={setOpen}/>
      <Sidebar open={open} setOpen={setOpen}/>
    </>
  );
};
export default Transferencias;
