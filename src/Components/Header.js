import React from "react";
import Nav from "./Nav";
import LittleLemonLogo from "../images/Logo.svg";

const Header = () => {
  return (
    <header>
      <img src={LittleLemonLogo} alt="" />
      <Nav />
    </header>
  );
};

export default Header;
