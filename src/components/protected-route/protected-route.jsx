import React, { useEffect } from "react";
import { Redirect, Route } from "react-router";
import { auth } from "../../firebase/firebase.utils";
import { useStateValue } from "../../StateProvider";

function ProtectedRoute({ component: Component, ...rest }) {
  const [{ user }, dispatch] = useStateValue();
  let isAuthenticated;

  const getUser = async () => {
    console.log(user);
    let val = await user?.currentUser;
    return val;
  };
  useEffect(() => {
    isAuthenticated = getUser();
  }, []);
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
