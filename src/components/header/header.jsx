import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase/firebase.utils";
import "./header.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header(props) {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">Bae.Area Club</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/about">Features</Nav.Link>
            <Nav.Link href="/about">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            {user?.currentUser ? (
              <Navbar.Text>
                Signed in as:{" "}
                <span
                  onClick={() => {
                    auth.signOut();
                  }}
                  className="sign-out"
                >
                  {user?.currentUser?.displayName}
                </span>
              </Navbar.Text>
            ) : (
              <Nav.Link href="/login">Sign In</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
