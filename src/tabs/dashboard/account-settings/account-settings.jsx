import { useAuthState } from "react-firebase-hooks/auth";
import { useDocument } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../../../firebase/firebase.utils";

function AccountSettings() {
  const [user] = useAuthState(auth);

  const [userSnapshot, load, error] = useDocument(
    firestore.collection("users").doc(user?.uid)
  );
  //   const isRegistered = userSnapshot?.data().isRegistered;
  if (load) return <h1>Loading</h1>;
  const {
    userName,
    email,
    gender,
    linkedInURL,
    phoneNo,
    occupation,
  } = userSnapshot?.data();
  return (
    <div>
      <h2>Any content 2</h2>
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
}

export default AccountSettings;
