import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
// import { Loader, Dimmer, Segment, Image } from "semantic-ui-react";
import Loader from "react-loader-spinner";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocument } from "react-firebase-hooks/firestore";
import { firestore, auth } from "../../firebase/firebase.utils";
import "./dashboard.scss";
function Dashboard(props) {
  const [user] = useAuthState(auth);
  const [userSnapshot, load, error] = useDocument(
    firestore.collection("users").doc(user?.uid)
  );
  const isRegistered = userSnapshot?.data().isRegistered;
  if (load) return <h1>Loading</h1>;
  if (isRegistered) {
    const {
      userName,
      email,
      gender,
      linkedInURL,
      phoneNo,
      occupation,
    } = userSnapshot?.data();
    return (
      <div className="dashboard">
        <h1>My Dashboard</h1>
        <table>
          <tbody>
            <tr>
              <td>userName:{userName}</td>
            </tr>
            <tr>
              <td>email:{email}</td>
            </tr>
            <tr>
              <td>linkedin:{linkedInURL}</td>
            </tr>
            <tr>
              <td>phoneno:{phoneNo}</td>
            </tr>
            <tr>
              <td>occupation:{occupation}</td>
            </tr>
          </tbody>
        </table>
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
