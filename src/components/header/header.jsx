import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        {/* <Logo className="logo" /> */}
        Logo
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
