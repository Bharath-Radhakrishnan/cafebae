import React from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { useHistory } from "react-router-dom";

import { Redirect } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

function Login() {
  const [{ user }] = useStateValue();
  const history = useHistory();
  const signIn = async () => {
    const auth = await signInWithGoogle();
    if (auth) {
      history.push("/dashboard");
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
