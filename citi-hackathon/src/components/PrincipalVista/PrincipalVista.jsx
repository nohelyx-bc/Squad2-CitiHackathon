import React from "react";

const PrincipalVista = () => {
  return (
    <main>
      <h3 className="titulos-predeterminado">BIENVENID@ USUARI@</h3>
      <section className="botones">
        <button className="confirmar">TRANSFERENCIA</button>
        <button className="confirmar">AGREGAR CUENTAS A TERCEROS</button>
      </section>
      <section className="info-container">
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
