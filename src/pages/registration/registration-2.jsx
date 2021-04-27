import "./registration.scss";
import { useStateValue } from "../../StateProvider";
import { registerActionTypes } from "../../reducers/register/register.types";
import { useHistory } from "react-router";
import { useState } from "react";
function Registration2() {
  const [{ register }, dispatch] = useStateValue();
  const history = useHistory();

  const [{ linkedInURL, phoneNo }, setData] = useState({
    linkedInURL: "",
    phoneNo: "",
  });
  //--------Methods-------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      dispatch({
        type: registerActionTypes.ADD_REGISTER_DATA,
        payload: {
          linkedInURL,
          phoneNo,
        },
      });
      history.push("/register3");
    }
  };
  const validate = () => {
    let isValid = true;
    if (linkedInURL === "") isValid = false;
    if (phoneNo === "") isValid = false;
    return isValid;
  };
  //--------Render---------------------
  return (
    <div className="registration-container">
      <h1>We would like to verify it's you</h1>
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor="name">Your LinkedIn URL</label>
          <input
            type="text"
            name="linkedInURL"
            id="linkedInURL"
            value={linkedInURL}
            onChange={handleChange}
          />
          <label htmlFor="phone">Phone number</label>
          <input
            type="number"
            name="phoneNo"
            id="phoneNo"
            value={phoneNo}
            onChange={handleChange}
          />
        </div>
        <button>Next</button>
      </form>
    </div>
  );
}

export default Registration2;
