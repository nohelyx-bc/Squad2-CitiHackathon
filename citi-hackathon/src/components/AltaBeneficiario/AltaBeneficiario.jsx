import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AltaBeneficiario = () => {
  return (
    <>
      <div className="container-transferencias">
        <Header />
        <h2 className="AltaBeneficiario-legend">HOLA USER!</h2>
        <form action="" className="altaBeneficiario-form">
          <legend className="AltaBeneficiario-legend">
            AGREGAR CUENTAS A TERCEROS
          </legend>
          <label htmlFor="TipoDeCuenta" className="AltaBeneficiario-label">
            TIPO DE CUENTA
          </label>
          <input type="text" id="TipoDeCuenta" />
          <label htmlFor="NumDeCuenta" className="AltaBeneficiario-label">
            NUMERO DE CUENTA
          </label>
          <input type="text" id="NumDeCuenta" />
          <label htmlFor="NombreTitular" className="AltaBeneficiario-label">
            NOMBRE DEL TITULAR
          </label>
          <input type="text" id="NombreTitular" />
          <label htmlFor="MontoMax" className="AltaBeneficiario-label">
            MONTO MAXIMO A TRANSFERIR
          </label>
          <input type="text" id="MontoMax" />
          <input
            type="submit"
            name="submit"
            value="Guardar"
            className="boton-guardar"
          ></input>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AltaBeneficiario;
