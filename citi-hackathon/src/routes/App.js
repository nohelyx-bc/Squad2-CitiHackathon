/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from '../components/Home/Home';
import Transferencias from '../components/Transferencias';
import AltaBeneficiario from '../components/AltaBeneficiario';
import ConfirmacionTransferencia from '../components/ConfirmacionTransferencia';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { DataIteration } from "../components/Home/DataIteration";

const App  = () => {
  const[data, setData] = useState({});

  // let url = `${process.env.REACT_APP_JSON_SERVER_USER}`;
  let url='https://citibanamex-hackathon.herokuapp.com/User'
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
  console.log(data)

  return (
    <Router>
      <Routes>
      {data && <Route exact path="/" element={<DataIteration dataUser={data}/>} />}
        <Route exact path="/Transferencias" element={<Transferencias />} />
        <Route exact path="/AltaBeneficiario" element={<AltaBeneficiario />} />
        <Route exact path="/ConfirmacionTransferencia" element={<ConfirmacionTransferencia />} />
        <Route exact path="/Header" element={<Header />} />
        <Route exact path="/Footer" element={<Footer />} />
      </Routes>
    </Router>
  );
};

export default App;
