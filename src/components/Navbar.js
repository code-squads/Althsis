import React from "react";
import { NavbarStyled, Profile } from "./Navbar.styled";

import ThemeToggle from "./ThemeToggle";

import { initialsFromName } from "../utils/data";
import AlthsisIcon from "../assets/icons/analysis.png";

const Navbar = () => {
  return (
    <NavbarStyled>
      <div className="d-flex float-start justify-content-center align-items-center m-2 mx-5">
        <img src={AlthsisIcon} alt="Althsis" />
        <h3 className="mx-3 pt-1">Althsis</h3>
      </div>
      <div className="float-end m-1 mx-3 d-flex align-items-center justify-content-center">
        <ThemeToggle />
        <Profile>
          <div>{initialsFromName("John Doe")}</div>
        </Profile>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
