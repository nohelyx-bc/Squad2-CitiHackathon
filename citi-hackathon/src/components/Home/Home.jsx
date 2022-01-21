import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PrincipalVista from "../PrincipalVista/PrincipalVista";

const Home = ({dataUser}) => {
  console.log('estoy en home', dataUser);
  // const styleBody={
  //   background:"red"
  // }
  
  return (
    <>
      <div className="container-predeterminado" >
        <Header />
        {/* <div className="render"> */}
          <PrincipalVista userInfo={dataUser}/>
        {/* </div> */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
