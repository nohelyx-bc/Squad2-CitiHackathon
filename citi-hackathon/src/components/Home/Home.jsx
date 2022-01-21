import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PrincipalVista from "../PrincipalVista/PrincipalVista";

const Home = () => {
  // const styleBody={
  //   background:"red"
  // }
  return (
    <>
      <div className="container-predeterminado" >
        <Header />
        <div className="render">
          <PrincipalVista />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
