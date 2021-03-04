import React from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

function Login() {
  return (
    <div className="login">
      <h1>Login Page</h1>
      <button onClick={signInWithGoogle}>signInWithGoogle</button>
    </div>
  );
}

export default Login;
