import React from "react";
import logoHeader from "../../assets/Citi-predeterminado.png";

const Header = () => {
  return (
    <header>
      <img className="img-logo" src={logoHeader} alt="logo de Citibanamex" />
    </header>
  );
};
export default Header;
