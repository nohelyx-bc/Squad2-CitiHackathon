/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "../components/Footer/Sidebar";
// import Home from '../components/Home/Home';
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
  

  // let url = `${process.env.REACT_APP_JSON_SERVER_USER}`;?id=1232
  let url=`https://citibanamex-hackathon.herokuapp.com/User?id=${user}`
  let api = helpHttp();

  useEffect(() => {
    // setLoading(true);
    api.get(url).then((res) => {
      if (!res.err) {
        setData(res);
        // setError(null);
      } else {
        setData(null);
        
        // setError(res);
      }
      // setLoading(false);
    });
  }, [url]);

  const addBeneficiary = (numCuenta, montoMax, tipoCuenta , nombreTitular) => {
    console.log(numCuenta, montoMax,tipoCuenta, nombreTitular )
    const id = Date.now();
    let options = {
      body: {
        id: id,
        id_usurio:data.id,
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
  
  const onAdd = (importe, concepto) => {
  
    //meter comprobacion si importe es menor a saldo y guardar tarjeta de origen y resta de saldo
    const id = Date.now();
    let options = {
      body: {
        id: id,
        beneficiario:"Laboratoria",
        concepto:concepto,
        importe:importe,
        dateOrder: new Date(),
        id_cliente_origen: data.id,
         tarjeta_origen: ""
      },
      headers: { "content-type": "application/json" },
    };
    api
      .post('https://citibanamex-hackathon.herokuapp.com/transferencias', options)
      .then((res) => {
        console.log(res);
        if (!res.err) {
         console.log('echo')
        } else {
          // setError(res);
        }
      });
  };

  return (
    <Router>
      <Sidebar />
      <Routes>
      
      {data && <Route   exact path="/" element={<DataIteration dataUser={data}/>} />}
        <Route exact path="/Transferencias" element={<Transferencias dataUser={data} onAdd={onAdd}/>} />
        <Route exact path="/AltaBeneficiario" element={<AltaBeneficiario addBeneficiary={addBeneficiary} />} />
        <Route exact path="/Confirmar" element={<ConfirmacionTransferencia />} />
        <Route
          exact
          path="/ConfirmacionTransferencia"
          element={<ConfirmacionTransferencia />}
        />
        <Route exact path="/Header" element={<Header />} />
        <Route exact path="/Footer" element={<Footer />} />
        <Route exact path="/Sidebar" element={<Sidebar />} />
      </Routes>
    </Router>
  );
};

export default App;
