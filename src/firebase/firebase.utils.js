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
//---------Add-User-Data---------
export const addUserData = async (data) => {
  const uid = auth.currentUser.uid;
  const userRef = firestore.doc(`/users/${uid}`);
  const snapShot = await userRef.get();
  if (snapShot.exists) {
    try {
      await userRef.set(
        {
          ...data,
        },
        { merge: true }
      );
    } catch (e) {
      console.log("error creating user", e.message);
    }
  }
};
// firebase.initializeApp(firebaseConfig);
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
//-------------Gapi----------------------
var gapi = window.gapi;
export const gapiSignIn = () => {
  // var gapi = window.gapi;

  var CLIENT_ID =
    "827505988598-ch7qvic7uslgdtuelq6dlp2gqv90okiu.apps.googleusercontent.com";

  var API_KEY = "AIzaSyBnxarhsUZm-VTd1eD_uIILs1Qf0l2Ltg8";
  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];

  var SCOPES = "https://www.googleapis.com/auth/calendar";
  gapi.load("client:auth2", async () => {
    console.log("loaded client");

    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    });

    gapi.client.load("calendar", "v3", () => console.log("bam!"));
    const result = gapi.auth2.getAuthInstance().isSignedIn.get();
    console.log(result);
    gapiLogin();
    // updateSigninStatus(result);
  });
};
const gapiLogin = async () => {
  const googleAuth = gapi.auth2.getAuthInstance();
  const googleUser = await googleAuth.signIn();
  const token = googleUser.getAuthResponse().id_token;
  const credential = provider.credential(token);
  const user = await auth.signInWithCredential(credential);
};
export default firebase;
