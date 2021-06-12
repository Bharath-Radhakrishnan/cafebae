import React from "react";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase/firebase.utils";
import "./header.scss";
import { Link } from "react-router-dom";
function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">Bae Area Club</div>
      </div>

      {/* //--------HamBurger-Menu-Buton--------------- */}
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      {/* //--------HamBurger-Menu-Buton--------------- */}

      <div className="nav-links">
        <Link to="/" className="options">
          HOME
        </Link>{" "}
        <Link to="/about" className="options">
          ABOUT US
        </Link>{" "}
        {user?.currentUser && (
          <Link to="/dashboard" className="options">
            {user?.currentUser?.displayName}
          </Link>
        )}
        {user?.currentUser ? (
          <div className="options" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/login" className="options">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
}
export default Header;
