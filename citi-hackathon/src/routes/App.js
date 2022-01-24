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
import VoiceAssistant from "../components/VoiceAssistant";

const App  = ({fontSize}) => {
  const[data, setData] = useState({});

  // let url = `${process.env.REACT_APP_JSON_SERVER_USER}`;
  let url='https://citibanamex-hackathon.herokuapp.com/User?id=1230'
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
      <Sidebar />
      <Routes>
      
      {data && <Route exact path="/" element={<DataIteration dataUser={data}/>} />}
        <Route exact path="/Transferencias" element={<Transferencias  />} />
        <Route exact path="/AltaBeneficiario" element={<AltaBeneficiario />} />
        <Route
          exact
          path="/ConfirmacionTransferencia"
          element={<ConfirmacionTransferencia />}
        />
        <Route exact path="/Header" element={<Header />} />
        <Route exact path="/Footer" element={<Footer />} />
        <Route exact path="/Sidebar" element={<Sidebar />} />
        <Route exact path="/VoiceAssistant" element={<VoiceAssistant />} />
      </Routes>
    </Router>
  );
};

export default App;
