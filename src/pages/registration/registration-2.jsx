import "./registration.scss";
import { useHistory } from "react-router";
import { useRef } from "react";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import CustomInput from "../../components/custom-input/CustomInput";
import NextButton from "../../components/next-button/NextButton";
import { auth, firestore } from "../../firebase/firebase.utils";
function Registration2() {
  const history = useHistory();

  const linkedInRef = useRef();
  const phoneNoRef = useRef();
  //--------Methods-------------------
  const postData = async (data) => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    console.log(isValid);
    if (isValid) {
      const linkedInURL = linkedInRef.current.value;
      const phoneNo = phoneNoRef.current.value;
      const _data = {
        linkedInURL,
        phoneNo,
      };
      try {
        postData(_data);
        history.push("/register3");
      } catch (e) {
        console.log(e);
      }
    }
  };
  const validate = () => {
    let isValid = true;
    const linkedInURL = linkedInRef.current.value;
    const phoneNo = phoneNoRef.current.value;

    if (!linkedInURL) isValid = false;
    if (!phoneNo || !isMobilePhone(phoneNo)) isValid = false;
    return isValid;
  };
  //--------Render---------------------
  return (
    <div className="registration-container">
      <h1>We would like to verify it's you</h1>
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="name">
          <CustomInput
            type="text"
            label="Your LinkedIn URL"
            id="linkedInURL"
            ref={linkedInRef}
          />
          <CustomInput
            type="number"
            label="Phone number"
            id="phoneNo"
            ref={phoneNoRef}
          />
        </div>
        <NextButton />
      </form>
    </div>
  );
}

export default Registration2;
