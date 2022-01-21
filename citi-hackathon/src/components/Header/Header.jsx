import React from "react";
import logoHeader from "../../assets/Citi-predeterminado.png";

const Header = () => {
  return (
    <div>
      <header>
        <img className="img-logo" src={logoHeader} alt="logo de Citibanamex" />
      </header>
    </div>
  );
};
export default Header;
