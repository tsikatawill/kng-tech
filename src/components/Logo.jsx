import React from "react";
import { Link } from "react-router-dom";
import LogoLight from "../imgs/logo-light.svg";

const Logo = () => {
  return (
    <Link to="/">
      <img src={LogoLight} className="w-28 mx-auto sm:mx-0" alt="logo-white" />
    </Link>
  );
};

export default Logo;
