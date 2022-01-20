import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../components/Home';
import Transferencias from '../components/Transferencias';
import AltaBeneficiario from '../components/AltaBeneficiario';
import ConfirmacionTransferencia from '../components/ConfirmacionTransferencia';

const app = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Transferencias" element={<Transferencias />} />
        <Route exact path="/AltaBeneficiario" element={<AltaBeneficiario />} />
        <Route exact path="/ConfirmacionTransferencia" element={<ConfirmacionTransferencia />} />
      </Routes>
    </Router>
  );
};

export default app;
