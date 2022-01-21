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
        <div className="render">
          <h1>Hola</h1>
          {/* {dataUser.tarjetas.map((val) => {
          return (
            <section key={val.id} className="content-items">
              <div className="img-qty">
                <img className="img-order" src={val.img_tarjeta} alt="coasa" /> */}
                {/* <p>{val.qty}</p> */}
              {/* </div> */}
              {/* <p id="food-name">{val.name}</p> */}
            {/* </section>
          );
        })} */}
          <PrincipalVista />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
