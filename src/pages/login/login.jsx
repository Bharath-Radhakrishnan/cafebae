import React from "react";
import { signInWithGoogle, gapiSignIn } from "../../firebase/firebase.utils";
import { useHistory } from "react-router-dom";

import "./login.scss";
function Login() {
  const history = useHistory();
  const signIn = async () => {
    // const auth = await signInWithGoogle();
    const auth = await gapiSignIn();

    if (auth) {
      history.replace("/dashboard");
    }
  };
  return (
    <div className="login">
      <h1>Join Bae.Area Club</h1>
      <h3>Sign in with your Google Account</h3>
      <button onClick={signIn}>signInWithGoogle</button>
    </div>
  );
}

export default Login;
