import React from "react";
import { Redirect, Route } from "react-router";
import { auth } from "../../firebase/firebase.utils";

function ProtectedRoute({ component: Component, ...rest }) {
  const isAuthenticated = auth.currentUser;
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
