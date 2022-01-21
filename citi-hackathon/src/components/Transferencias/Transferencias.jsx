import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Transferencias = () => {

  return (
    <> 
    <div className="container-transferencias">
    <Header />
      <h2>TRANSFERENCIA</h2>
      <form className="info-container">
        <section className="info-cuenta-origen">
        <p>SALDO DISPONIBLE</p>
        <p>$20.000.00</p>
        <p>DESDE CUENTA DE ORIGEN</p>
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
    </>
  );
};
export default Transferencias;
