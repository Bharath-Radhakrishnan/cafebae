import React from "react";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase/firebase.utils";
import "./header.scss";
import { Link } from "react-router-dom";
function Header() {
  const [{ user }] = useStateValue();

  return (
    <div class="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <div class="nav-title">Bae Area Club</div>
      </div>

      {/* //--------HamBurger-Menu-Buton--------------- */}
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      {/* //--------HamBurger-Menu-Buton--------------- */}

      <div class="nav-links">
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
