import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../components/Home/Home';

import AltaBeneficiario from '../components/AltaBeneficiario';
import ConfirmacionTransferencia from '../components/ConfirmacionTransferencia';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Transferencias from "../components/Transferencias/Transferencias";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
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
