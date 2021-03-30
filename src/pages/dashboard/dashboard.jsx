import React, { useEffect } from "react";
import { auth, firestore } from "../../firebase/firebase.utils";

function Dashboard(props) {
  const blah = async () => {
    console.log(auth.currentUser.uid);
    let id = auth.currentUser.uid;
    const userRef = firestore.doc(`/users/${id}`);
    const snapShot = await userRef.get();
    console.log(snapShot);
    if (snapShot.exists) {
      try {
        let email = await snapShot.data();
        console.log(email);
      } catch (e) {
        console.log("error creating user", e.message);
      }
    }
  };
  useEffect(() => {
    blah();
  }, []);
  //   console.log(props);
  return <div>My Dashboard</div>;
}

export default Dashboard;
