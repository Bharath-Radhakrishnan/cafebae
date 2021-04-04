import React from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { Redirect } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

function Login() {
  const [{ user }] = useStateValue();
  if (user.currentUser) {
    return <Redirect to={"/dashboard"} />;
  }
  return (
    <div className="login">
      <h1>Join Bae.Area Club</h1>
      <h3>Sign in with your Google Account</h3>
      <button onClick={signInWithGoogle}>signInWithGoogle</button>
    </div>
  );
}

export default Login;
