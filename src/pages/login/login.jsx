import React from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

function Login() {
  return (
    <div className="login">
      <h1>Join Bae.Area Club</h1>
      <h3>Sign in with your Google Account</h3>
      <button onClick={signInWithGoogle}>signInWithGoogle</button>
    </div>
  );
}

export default Login;
