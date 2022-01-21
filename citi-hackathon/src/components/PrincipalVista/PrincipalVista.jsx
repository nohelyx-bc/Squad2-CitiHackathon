import React from "react";
import { useNavigate } from "react-router-dom";

const PrincipalVista = () => {
  const navigate= useNavigate()
  const handleTransferencias = () => {
    navigate("/Transferencias");
  };
  const handleCuentasTerceros = () => {
    navigate("/AltaBeneficiario");
  };
  return (
    <main>
      <h3 className="titulos-predeterminado">BIENVENID@ USUARI@</h3>
      <section className="container-botones-principal">
        <button className="boton-confirmar-principal" onClick={handleTransferencias}>TRANSFERENCIA</button>
        <button className="boton-confirmar-principal" onClick={handleCuentasTerceros}>AGREGAR CUENTAS DE TERCEROS</button>
      </section>
      <section className="info-container-principal ">
        <p>CUENTA AHORRO CITIBANAMEX</p>
        <section>
          <p>***587</p>
          <p>20.000.00 MXN</p>
        </section>
      </section>
    </main>
  );
};

export default PrincipalVista;
