import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { Loader, Dimmer, Segment, Image } from "semantic-ui-react";
import { auth, firestore } from "../../firebase/firebase.utils";

function Dashboard(props) {
  console.log(props);
  let id = auth?.currentUser?.uid;
  const [reg, setReg] = useState(true);
  const isRegistered = async () => {
    const userRef = firestore.doc(`/users/${id}`);
    const snapShot = await userRef.get();
    if (snapShot.exists) {
      try {
        let data = await snapShot.data();
        console.log("ggg", data.isRegistered);
        if (data.isRegistered) {
          console.log("setting true");
          setReg(true);
        } else {
          console.log("setting false");
          setReg(false);
        }
      } catch (e) {
        console.log("error creating user", e.message);
      }
    }
  };
  useEffect(() => {
    isRegistered();
  }, [id]);
  useEffect(() => {
    if (!reg) {
      // <Redirect to="/register1" />;
      // props.history.push("/register1");
    }
  }, [reg]);
  if (!reg) {
    <Redirect to="/register1" />;
    // props.history.push("/register1");
  }
  return <div>My Dashboard</div>;
}

export default Dashboard;
