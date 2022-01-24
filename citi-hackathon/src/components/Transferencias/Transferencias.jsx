/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ConfirmacionTransferencia from "../ConfirmacionTransferencia";

const Transferencias = ({ dataUser ,onAdd }) => {
  const [userInfo, setUserInfo] = useState(...dataUser);
  const [importeState, setImporte] = useState({});
  const [conceptoState, setConcepto] = useState({});
  const [beneficiarioState, setbeneficiario] = useState({});
  const [saldoState, setSaldo] = useState({});
  const [origenState, setTarjetaOrigen] = useState({});
  // console.log('estoy en trans',userInfo.beneficiarios)

  // const { importe } = importeState;

  const navigate = useNavigate();
  //const handleConfirmar = () => {navigate("/ConfirmacionTransferencia"); };
  const handleRegresar = () => {navigate("/");};
  const handleconfirmar = () => {navigate("/Confirmar");};
  const handleImporte = (e) => setImporte({ ...importeState, importe: e.target.value });
  const handleConcepto = (e) => setConcepto({ ...conceptoState, concepto: e.target.value });
  const handleBeneficiario = (e) => setbeneficiario({ ...beneficiarioState, beneficiario: e.target.value });
  const handleSaldo = (e) => setSaldo({ ...saldoState, saldo: e.target.value });
  const handleTarjetaOrigen = (e) => setTarjetaOrigen({ ...origenState, origen: e.target.value });

  const { importe } = importeState;
  const { concepto } = conceptoState;
  const { beneficiario } = beneficiarioState;//pendiente xq falta cachar el val del select
  const { saldo } = saldoState; //listo para hacer la actualizacion y validacion
  const { origen } = origenState;
  return (
    <>
      <div className="container-transferencias">
        <Header />
        <h2>TRANSFERENCIA</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // onAdd(importe,concepto,saldo)
            
            // <ConfirmacionTransferencia importe={importeState} concepto={concepto} onAdd={onAdd}/>
            handleconfirmar();
            //agregar validacion y metodo para actualizar 
            //beneficiario 
            // e.target.reset();
            // cleanOrder();
          }}
        >
          
          <section className="info-container">
          <section className="info-cuenta-origen">
            <p>CUENTA DE ORIGEN</p>
            {/* <select name="tarjetas" className="tarjeta">
            <option value="Elige">Elige tarjeta</option>
          {/* {userInfo.tarjetas.map((val) => {
            
           return (
               <option  key={val.id} value='{val.numero_cuenta}' handleChange={(e)=>{setTarjeta(e.value)}}> {val.numero_cuenta}</option>
               
           );
           })}; */}
            {/* </select> */}
            {userInfo.tarjetas.map((val) => {
              return (
                <div key={val.id}>
                  <p
                  className="origen"
                  onChange={handleTarjetaOrigen}>{val.numero_cuenta}</p>
                  <p>SALDO DISPONIBLE</p>
                  <p
                  className="saldo"
                  onChange={handleSaldo}
                  >$ {val.saldo}</p>
                </div>
              );
            })};


          </section>
          {/* <input placeholder="BENEFICIARIO"></input> */}
          <select name="tarjetas" className="tarjeta">
            <option value="Elige">BENEFICIARIO</option>
            {userInfo.beneficiarios.map((beneficiario) => {
              return (
                <option className="beneficiario"
                  onChange={handleBeneficiario}
                  key={beneficiario.id}
                  value={beneficiario.nombre_beneficiario}> {beneficiario.nombre_beneficiario}</option>
              );
            })};

          </select>
          <input
            className="concepto"
            onChange={handleConcepto}
            placeholder="CONCEPTO"
            required></input>
          <input
          type="number"
            className="importe"
            onChange={handleImporte}
            placeholder="IMPORTE"
            required></input>

</section>
            <section className="botones">
          <button className="boton-regresar" onClick={handleRegresar}>
            REGRESAR
          </button>
          <button className="boton-confirmar" >
            {/* onClick={handleConfirmar} */}
            CONFIRMAR
          </button>
        </section>

        </form>
        
      </div>
      <Footer />
    </>
  );
};
export default Transferencias;
