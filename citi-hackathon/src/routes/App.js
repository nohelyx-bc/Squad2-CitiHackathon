/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "../components/Footer/Sidebar";
import Transferencias from '../components/Transferencias/Transferencias';
import AltaBeneficiario from '../components/AltaBeneficiario/AltaBeneficiario';
import ConfirmacionTransferencia from '../components/ConfirmacionTransferencia';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { DataIteration } from "../components/Home/DataIteration";

const App  = () => {
  
  // const users= ['1230' ,'1232'];
  // const value= Math.floor(Math.random()*users.length);
  // const[user]= useState(users[value]);
  const user=1230;
  const[data, setData] = useState({});
  const[dataBeneficiarios, setdataBeneficiarios] = useState({});
  const[saldoNew, setSaldoNew]=useState(null);
  const[cuentaOrigen, cuentaOrigenNew]=useState(null);
  const[importeState, setImporte]=useState(null);
  const[conceptoState, setConcepto]=useState(null);
  const[beneficiarioState,setBeneficiario]=useState(null);
  
  // let url = `${process.env.REACT_APP_JSON_SERVER_USER}`;?id=1232
  // let url_benfeiciarios=`https://citibanamex-hackathon.herokuapp.com/beneficiarios?=id_usuario=${user}`
  
  let url=`https://citibanamex-hackathon.herokuapp.com/User?id=${user}`
  let url_benfeiciarios=`https://citibanamex-hackathon.herokuapp.com/beneficiarios?=id_usuario=${user}`
  
  
  let api = helpHttp();

  useEffect(() => {
    // setLoading(true);
    api.get(url).then((res) => {
      if (!res.err) {
        setData(res);
        setSaldoNew(res[0].tarjetas[0].saldo)
        cuentaOrigenNew(res[0].tarjetas[0].numero_cuenta)
        console.log(cuentaOrigen)
        // setError(null);
      } else {
        setData(null);
        
        // setError(res);
      }
      // setLoading(false);
    });

    api.get(url_benfeiciarios).then((values) => {
      if (!values.err) {
        setdataBeneficiarios(values);
        // setError(null);
      } else {
        setdataBeneficiarios(null);
        
        // setError(res);
      }
      // setLoading(false);
    });

  }, [url]);

  console.log(dataBeneficiarios)

  
const validacionImporte= async (importe,beneficiario, concepto)=>{
  
  if(saldoNew >= importe){
    setImporte(importe);
    setConcepto(concepto);
    setBeneficiario(beneficiario);
    
    return true
    //actualizar saldo
  }
  else{
    return false
    //Poner audio de Saldo insuficiente
  }
  

}
  const addBeneficiary = (numCuenta, montoMax, tipoCuenta , nombreTitular) => {
    console.log(numCuenta, montoMax,tipoCuenta, nombreTitular )
    const id = Date.now();
    let options = {
      body: {
        id: id,
        id_usurio:user,
        nombre_beneficiario:nombreTitular,
        numero_cuenta:numCuenta,
        monto_maximo: montoMax,
        tipo_cuenta:tipoCuenta
      },
      headers: { "content-type": "application/json" },
    };
     api
      .post('https://citibanamex-hackathon.herokuapp.com/beneficiarios', options)
      .then((res) => {
        console.log(res);
        if (!res.err) {
         console.log('echo')
        } else {
          // setError(res);
        }
      });

  }
  
  const onAdd = async(importe,concepto,beneficiario, cuenta, saldoActual) => {
   const id = Date.now();
   
    let options = {
      body: {
        id: id,
        beneficiario:beneficiario,
        concepto:concepto,
        importe:importe,
        fecha: new Date(),
        id_cliente_origen:user ,
        tarjeta_origen: cuenta
      },
      headers: { "content-type": "application/json" },
    };
    api
      .post('https://citibanamex-hackathon.herokuapp.com/transferencias', options)
      .then((res) => {
        console.log(res);
        if (!res.err) {
         return true
        } else {
          return false
          // setError(res);
        }
      });
  };

  return (
    <Router>
      <Sidebar />
      <Routes>
      
      {data && <Route   exact path="/" element={<DataIteration dataUser={data}/>} />}
        <Route exact path="/Transferencias" element={<Transferencias  dataUser={data} onAdd={onAdd} validacionImporte={validacionImporte} dataBeneficiarios={dataBeneficiarios} />} /> 
        {/* saldoUser={saldoNew} */}
        <Route exact path="/AltaBeneficiario" element={<AltaBeneficiario addBeneficiary={addBeneficiary} />} />
        <Route exact path="/Confirmar" element={<ConfirmacionTransferencia 
        importeState={importeState} 
        conceptoState={conceptoState} 
        beneficiarioState={beneficiarioState} 
        cuentaOrigen={cuentaOrigen} 
        saldoNew={saldoNew}
        onAdd={onAdd}/>} />
        <Route exact path="/Header" element={<Header />} />
        <Route exact path="/Footer" element={<Footer />} />
        <Route exact path="/Sidebar" element={<Sidebar />} />
      </Routes>
    </Router>
  );
};

export default App;
