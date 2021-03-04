import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBnxarhsUZm-VTd1eD_uIILs1Qf0l2Ltg8",
  authDomain: "cafe-bae.firebaseapp.com",
  projectId: "cafe-bae",
  storageBucket: "cafe-bae.appspot.com",
  messagingSenderId: "827505988598",
  appId: "1:827505988598:web:65aff358599208673aadd7",
};
// Initialize Firebase
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdDate,
        ...additionalData,
      });
    } catch (e) {
      console.log("error creating user", e.message);
    }
  }
  return userRef;
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
