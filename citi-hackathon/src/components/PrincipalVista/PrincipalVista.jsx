import React from "react";
import { useNavigate } from "react-router-dom";

const PrincipalVista = (propsUser, {fontSize}) => {

  console.log("estoy en principal vista", propsUser.userInfo)
  console.log(propsUser.userInfo.tarjetas)
  const navigate = useNavigate()
  const handleTransferencias = () => {
    navigate("/Transferencias");
  };
  const handleCuentasTerceros = () => {
    navigate("/AltaBeneficiario");
  };
  
  return (
    <main>
      {/* {propsUser.userInfo.forEach((user) => {
        return (
           <section key={user.id} className="content-items">  */}
      <h3 style={{
          fontSize: `${fontSize}px`
        }} className="titulos-predeterminado">BIENVENIDO</h3>
      <h3>{propsUser.userInfo.nombre_titular}</h3>
      <section className="container-botones-principal">
        <button className="boton-confirmar-principal" onClick={handleTransferencias}>TRANSFERENCIA</button>
        <button className="boton-confirmar-principal" onClick={handleCuentasTerceros}>AGREGAR CUENTAS DE TERCEROS</button>
      </section>
      <section className="info-container">

        {propsUser.userInfo.tarjetas.map((val) => {
          return (
            
            <section  key={val.id} className="content-items">
              <p  style={{
          fontSize: `${fontSize}px`
        }}>{val.tipo_tarjeta}</p>
              <section>
                <p style={{
          fontSize: `${fontSize}px`
        }}>***{val.numero_cuenta.slice(12,16)}</p>
                <p style={{
          fontSize: `${fontSize}px`
        }}>$ {val.saldo} mxp</p>
              </section>

            </section>



          );
        })}
        {/* <p>CUENTA AHORRO CITIBANAMEX</p>
        <section>
          <p>***587</p>
          <p>20.000.00 MXN</p>
        </section> */}
      </section>
      {/* </section> */}
      {/* ); */}
      {/* })}  */}
    </main>
  );
};

export default PrincipalVista;
