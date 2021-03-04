import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase/firebase.utils";
import "./header.scss";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        {/* <img src="/logo.png" alt="no img" /> */}

        <Logo className="logo" />
      </Link>
      <div className="options">
        {user?.currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
            }}
          >
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/login">
            SignIn
          </Link>
        )}

        {/* <Link className="option" to="/login">
          {user.currentUser ? "Login" : "Logout"}
        </Link> */}
        <Link className="option" to="/about">
          About
        </Link>
        <p>{user?.currentUser?.displayName}</p>
      </div>
    </div>
  );
}

export default Header;
