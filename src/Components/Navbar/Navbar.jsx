import React from "react";
import "./Navbar.css";
import Logo from "../../Assets/SVG/logo.svg";
import { ExpandMore } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src={Logo} alt="Logo" className="navbarr__logo" />
        <p>
          <strong>Intugine</strong>
        </p>
      </div>
      <div className="navbar__right">
        <div className="navbar__right_item">Home</div>
        <div className="navbar__right_item">Brands</div>
        <div className="navbar__right_item">Transport</div>
        <div className="navbar__right_item">
          <Avatar />
        </div>
        <div className="navbar__right_item downarrow">
          <IconButton>
            <ExpandMore fontSize="large"/>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
