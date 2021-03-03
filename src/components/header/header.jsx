import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.scss";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        {/* <img src="/logo.png" alt="no img" /> */}

        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/login">
          Login
        </Link>
        <Link className="option" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Header;
