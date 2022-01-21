import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const AltaBeneficiario = () => {
  return (
    <>
      <Header />
      <h2>HOLA USER!</h2>
      <form action="" className="altaBeneficiario-form">
        <legend>AGREGAR CUENTAS A TERCEROS</legend>
        <label htmlFor="TipoDeCuenta">TIPO DE CUENTA</label>
        <input type="text" id="TipoDeCuenta" />
        <label htmlFor="NumDeCuenta">NUMERO DE CUENTA</label>
        <input type="text" id="NumDeCuenta" />
        <label htmlFor="NombreTitular">NOMBRE DEL TITULAR</label>
        <input type="text" id="NombreTitular" />
        <label htmlFor="MontoMax">MONTO MAXIMO A TRANSFERIR</label>
        <input type="text" id="MontoMax" />
        <input type="submit" name="submit" value="Guardar"></input>
      </form>
      <Footer />
    </>
  );
};

export default AltaBeneficiario;
