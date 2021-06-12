import React from "react";
import { Redirect, Route } from "react-router";
import { auth } from "../../firebase/firebase.utils";
import CustomLoader from "../custom-loader/CustomLoader";
import { useAuthState } from "react-firebase-hooks/auth";

function ProtectedRoute({ component: Component, ...rest }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <CustomLoader />;
  if (!user) return <Redirect to={{ pathname: "/" }} />;
  return (
    <Route>
      <Component />
    </Route>
  );
}

export default ProtectedRoute;
