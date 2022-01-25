import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Sidebar from "../Footer/Sidebar";
import Header from "../Header/Header";
import PrincipalVista from "../PrincipalVista/PrincipalVista";

const Home = ({ dataUser }) => {
  console.log('estoy en home', dataUser);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container-predeterminado" >
        <Header />
        <div className="render">
          <PrincipalVista userInfo={dataUser} />
        </div>
        <Footer setOpen={setOpen} />
        <Sidebar open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default Home;
