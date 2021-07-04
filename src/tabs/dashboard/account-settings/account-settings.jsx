import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "../../../components/tab-panel/TabPanel";

import { useAuthState } from "react-firebase-hooks/auth";
import { useDocument } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../../../firebase/firebase.utils";
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100vh",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function AccountSettings() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const [user] = useAuthState(auth);

  const [userSnapshot, load, error] = useDocument(
    firestore.collection("users").doc(user?.uid)
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if (load) return <h1>Loading</h1>;
  const { userName, email, gender, linkedInURL, phoneNo, occupation } =
    userSnapshot?.data();
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Basic" {...a11yProps(0)} />
        <Tab label="Location" {...a11yProps(1)} />
        <Tab label="Preferences" {...a11yProps(2)} />
        <Tab label="Availability" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
        {userName}
        {email}
        {gender}
        {linkedInURL}
        {phoneNo}
        {occupation}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  );
}
