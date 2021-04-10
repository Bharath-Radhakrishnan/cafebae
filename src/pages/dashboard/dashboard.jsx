import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
// import { Loader, Dimmer, Segment, Image } from "semantic-ui-react";
import Loader from "react-loader-spinner";

import AuthenticationService from "../../services/authenticationservice";

function Dashboard(props) {
  const isRegistered = AuthenticationService.getUserCredentials().isRegistered;
  if (isRegistered) {
    return (
      <div>
        <h1>My Dashboard</h1>
      </div>
    );
  } else {
    return (
      <Redirect
        to={{ pathname: "/register1", state: { from: props.location } }}
      />
    );
  }
}

export default Dashboard;
