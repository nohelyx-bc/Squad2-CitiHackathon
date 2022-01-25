import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Footer/Sidebar";

const ConfirmacionTransferencia = ({ importeState, conceptoState, beneficiarioState, cuentaOrigen, saldoNew, onAdd }) => {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleRegresar = () => {
    navigate("/Transferencias");
  };
  const handleConfirmar = () => {
    navigate("/");
  };
  return (
    <>
      <div className="container-transferencias">
        <Header />
        <h2>TRANSFERENCIA</h2>
        <form className="info-container">
          <section className="info-cuenta-origen">
            <p className="center-item">CONFIRMACION</p>
            <p>PARA: {beneficiarioState}</p>
            <p>DE: **{cuentaOrigen.slice(12, 16)}</p>
            <p>DESCRIPCION: {conceptoState}</p>
            <p>MONTO: $ {importeState}</p>
          </section>
        </form>
        <section className="botones">
          <button className="boton-regresar" onClick={handleRegresar}>
            REGRESAR
          </button>
          <button className="boton-confirmar" onClick={(e) => {
            onAdd(importeState, conceptoState, beneficiarioState, cuentaOrigen, saldoNew);
            handleConfirmar()
          }} >
            CONFIRMAR
          </button>
        </section>
      </div>
      <Footer setOpen={setOpen}/>
      <Sidebar open={open} setOpen={setOpen}/>
    </>
  );
  
};

export default ConfirmacionTransferencia;
