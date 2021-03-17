import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase/firebase.utils";
import "./header.scss";
import CustomButton from "../custom-button/custom-button";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/about">
          HOME
        </Link>{" "}
        <Link className="option" to="/about">
          ABOUT US
        </Link>{" "}
        <Link className="option" to="/about">
          FEATURES
        </Link>
        <Link className="option" to="/about">
          CONTACT US
        </Link>
        {user?.currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/login">
            SIGN IN
          </Link>
        )}
        <CustomButton>Hello</CustomButton>
        <p>{user?.currentUser?.displayName}</p>
      </div>
    </div>
  );
}

export default Header;
