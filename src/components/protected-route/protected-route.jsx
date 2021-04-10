import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router";
import { auth } from "../../firebase/firebase.utils";
import Loader from "react-loader-spinner";
import { useStateValue } from "../../StateProvider";
import AuthenticationService from "../../services/authenticationservice";

function ProtectedRoute({ component: Component, ...rest }) {
  const isAuthenticated = AuthenticationService.getUserCredentials() !== null;
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    ></Route>
  );
}

export default ProtectedRoute;
