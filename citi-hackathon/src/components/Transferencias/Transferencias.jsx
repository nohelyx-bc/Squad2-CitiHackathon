import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Transferencias = () => {

  return (
    <> 
    <div className="container-transferencias">
    <Header />
      <h1>TRANSFERENCIA</h1>
      <form className="info-transferencia">
        <h2>CUENTA DE ORIGEN</h2>
        <h3>***587852</h3>
        <input className="input-destinatario" placeholder= "BENEFICIARIO"></input>
        <input className="input-concepto" placeholder="CONCEPTO"></input>
        <input className="input-importe" placeholder="IMPORTE"></input>
      </form>
      <section className="botones">
        <button className="boton-regresar">REGRESAR</button>
        <button className="boton-confirmar">CONFIRMAR</button>
      </section>
    <Footer />
    </div>
    </>
  );
};
export default Transferencias;
