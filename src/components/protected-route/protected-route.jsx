import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router";
import { auth } from "../../firebase/firebase.utils";
import Loader from "react-loader-spinner";
import { useStateValue } from "../../StateProvider";
import AuthenticationService from "../../services/authenticationservice";
import { useAuthState } from "react-firebase-hooks/auth";

function ProtectedRoute({ component: Component, ...rest }) {
  const isAuthenticated = AuthenticationService.getUserCredentials() !== null;
  const [user, loading] = useAuthState(auth);

  if (loading) return <div>Loading</div>;
  if (!user) return <Redirect to={{ pathname: "/" }} />;
  return (
    <Route>
      <Component />;
    </Route>
  );
}

export default ProtectedRoute;
