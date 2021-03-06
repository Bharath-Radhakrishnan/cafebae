import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Redirect } from "react-router";
import CustomLoader from "../../components/custom-loader/CustomLoader";
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
  if (load) return <CustomLoader />;
  if (error)
    return (
      <div>
        <h1>Sorry</h1>
        <p>Something went wrong</p>
      </div>
    );
  if (isRegistered) {
    const { userName } = userSnapshot?.data();
    return (
      <div className="mx-6 mt-4 mb-12 md:mx-60">
        <h1>Aloha {userName}</h1>
        <h4 className="mb-12">
          We are excited to match you with interesting folks this weekend 😀
        </h4>
        <Meetings />

        {/* <Tabs>
          <TabList>
            <Tab>Meetings</Tab>
            <Tab>Account Preferences</Tab>
          </TabList>

          <TabPanel className="custom-tab-panel"> */}
        {/* <Meetings />
          </TabPanel>
          <TabPanel className="custom-tab-panel">
            <AccountSettings />
          </TabPanel>
        </Tabs> */}
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
