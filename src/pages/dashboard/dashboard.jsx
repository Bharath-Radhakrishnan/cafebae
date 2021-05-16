import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Redirect } from "react-router";
// import { Loader, Dimmer, Segment, Image } from "semantic-ui-react";
import Loader from "react-loader-spinner";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocument } from "react-firebase-hooks/firestore";
import { firestore, auth } from "../../firebase/firebase.utils";
import "./dashboard.scss";
import Meetings from "../../tabs/dashboard/meetings/meetings";
import AccountSettings from "../../tabs/dashboard/account-settings/account-settings";

function Dashboard(props) {
  const [user] = useAuthState(auth);
  const [userSnapshot, load, error] = useDocument(
    firestore.collection("users").doc(user?.uid)
  );
  const isRegistered = userSnapshot?.data().isRegistered;
  if (load) return <h1>Loading</h1>;
  if (isRegistered) {
    const { userName } = userSnapshot?.data();
    return (
      <div className="dashboard">
        <h1>{userName}'s dashboard</h1>
        <Tabs>
          <TabList>
            <Tab>Meetings</Tab>
            <Tab>Account Preferences</Tab>
          </TabList>

          <TabPanel className="custom-tab-panel">
            <Meetings />
          </TabPanel>
          <TabPanel lassName="custom-tab-panel">
            <AccountSettings />
          </TabPanel>
        </Tabs>
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
