import React from "react";
import { useNavigate } from "react-router-dom";

const PrincipalVista = (propsUser) => {

  console.log("estoy en principal vista", propsUser.userInfo)
  // console.log(propsUser.userInfo.id)
  
  const navigate = useNavigate()
  const handleTransferencias = () => {
    navigate("/Transferencias");
  };
  const handleCuentasTerceros = () => {
    navigate("/AltaBeneficiario");
  };
  
  return (
    <main>
      {/* {propsUser.userInfo.nombre_titular.map((user) => {
        return (
          <h3>{user}</h3>
          //  <section key={user.id} className="content-items"> 
        )
        })} */}

      <h2 className="titulos-predeterminado">BIENVENIDO</h2>
      <h3>{propsUser.userInfo.nombre_titular}</h3>
      <section className="container-botones-principal">
        <button className="boton-confirmar-principal"  onClick={handleTransferencias} >TRANSFERENCIA</button>
        <button className="boton-confirmar-principal" onClick={handleCuentasTerceros}>AGREGAR CUENTAS DE TERCEROS</button>
      </section>
      
        {propsUser.userInfo.tarjetas.map((val) => {
           
          return (
            <div key={val.id} className="border">
              <section>
              <p>{val.tipo_tarjeta}</p>
              <section>
                <p>***{val.numero_cuenta.slice(12,16)}</p>
                <p>$ {val.saldo} mxp</p>
              </section>

            </section>
            </div>
          );
        })}
    </main>
  );
};

export default PrincipalVista;
