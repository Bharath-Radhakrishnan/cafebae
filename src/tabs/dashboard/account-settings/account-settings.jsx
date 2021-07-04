import { useAuthState } from "react-firebase-hooks/auth";
import { useDocument } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../../../firebase/firebase.utils";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./account-settings.scss";
function AccountSettings() {
  const [user] = useAuthState(auth);

  const [userSnapshot, load, error] = useDocument(
    firestore.collection("users").doc(user?.uid)
  );
  //   const isRegistered = userSnapshot?.data().isRegistered;
  if (load) return <h1>Loading</h1>;
  const { userName, email, gender, linkedInURL, phoneNo, occupation } =
    userSnapshot?.data();
  return (
    <div className="account-settings-container">
      <Tabs className="account-settings-tab">
        <TabList>
          <Tab>
            <p>Basic</p>
          </Tab>
          <Tab>
            <p>Location</p>
          </Tab>
          <Tab>
            <p>Preferences</p>
          </Tab>
          <Tab>
            <p>Availability</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <h2>Any content 1</h2>
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
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 2</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 3</h2>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <h2>Any content 4</h2>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default AccountSettings;
