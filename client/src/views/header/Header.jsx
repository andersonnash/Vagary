import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header-logo">
      <NavLink
        className="flex justify-start text-black mr-8 font-serif  text-2xl pt-"
        to="/"
      >
        Vagary
      </NavLink>
    </div>
  );
};

export default Header;
