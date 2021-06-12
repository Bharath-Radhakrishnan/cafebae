import "./registration.scss";
import { useHistory } from "react-router";
import { useRef } from "react";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import CustomInput from "../../components/custom-input/CustomInput";
import NextButton from "../../components/next-button/NextButton";
import { addUserData, auth, firestore } from "../../firebase/firebase.utils";
function Registration2() {
  const history = useHistory();

  const linkedInRef = useRef();
  const phoneNoRef = useRef();
  //--------Methods-------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      const linkedInURL = linkedInRef.current.value;
      const phoneNo = phoneNoRef.current.value;
      const _data = {
        linkedInURL,
        phoneNo,
      };
      try {
        addUserData(_data);
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
      <form className="input-form" onSubmit={handleSubmit} autoComplete="off">
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
