import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase/firebase.utils";
import "./header.scss";
import { Link } from "react-router-dom";
import AuthenticationService from "../../services/authenticationservice";

// function Header(props) {
//   const [{ user }] = useStateValue();
//   return (
//     <div className="header">
//       <Link to="/" className="logo-container">
//         <Logo className="logo" />
//       </Link>
//       <div className="options">
//         <Link className="option" to="/">
//           HOME
//         </Link>{" "}
//         <Link className="option" to="/about">
//           ABOUT US
//         </Link>{" "}
//         <Link className="option" to="/dashboard">
//           DASHBOARD
//         </Link>
//         <Link className="option" to="/about">
//           CONTACT US
//         </Link>
//         {user?.currentUser ? (
//           <div
//             className="option"
//             onClick={() => {
//               AuthenticationService.logout();
//               auth.signOut();
//             }}
//           >
//             SIGN OUT
//           </div>
//         ) : (
//           <Link className="option" to="/login">
//             SIGN IN
//           </Link>
//         )}
//         <p>{user?.currentUser?.displayName}</p>
//       </div>
//     </div>
//   );
// }

// export default Header;

function Header() {
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
        <Link to="/">HOME</Link> <Link to="/about">ABOUT US</Link>{" "}
        <Link to="/dashboard">DASHBOARD</Link>
        <Link to="/login">CONTACT US</Link>
        {/* <a href="" target="">
          Github
        </a>
        <a href="" target="">
          Stackoverflow
        </a>
        <a href="" target="">
          LinkedIn
        </a>
        <a href="" target="">
          Codepen
        </a>
        <a href="" target="">
          JsFiddle
        </a> */}
      </div>
    </div>
  );
}
export default Header;
