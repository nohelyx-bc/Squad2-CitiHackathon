import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  // const styleBody={
  //   background:"red"
  // }
  return (
    <>
      <div className="container-predeterminado" >
        <Header />
        <div className="render">
          <h1>Hola</h1>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
