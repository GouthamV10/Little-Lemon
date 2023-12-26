import React from "react";
import Nav from "./Nav";
import LittleLemonLogo from "../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <img src={LittleLemonLogo} alt="" className="logo" />
      <Nav />
    </header>
  );
};

export default Header;
