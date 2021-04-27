import React, { useState } from "react";
import CustomRadioButton from "../../components/custom-radio-button/custom-radio-button";
import FormatDate from "../../services/dateservice";
import Loader from "react-loader-spinner";
import "./registration.scss";
import { useStateValue } from "../../StateProvider";
import { registerActionTypes } from "../../reducers/register/register.types";
import { useHistory } from "react-router";
function Registration1() {
  const [{ register }, dispatch] = useStateValue();
  const history = useHistory();
  const items = ["Male", "Female", "Other"];
  //-------------State-Variables--------------------------
  const [{ name, dob }, setData] = useState({ name: "", dob: "" });
  const [selected, setSelected] = useState("");

  //--------Methods-------------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevState) => {
      if (name === "") {
        let date = FormatDate(value);
        return { ...prevState, dob: date };
      } else return { ...prevState, [name]: value };
    });
  };
  const handleSelection = (e) => {
    const { name } = e.target;
    setSelected(name);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      dispatch({
        type: registerActionTypes.ADD_REGISTER_DATA,
        payload: {
          userName: name,
          dob: dob,
          gender: selected,
        },
      });
      history.push("/register2");
    }
  };

  const validate = () => {
    let isValid = true;
    if (name === "") isValid = false;
    if (dob === "") isValid = false;
    if (selected === "") isValid = false;
    return isValid;
  };

  //-----------Render----------------------
  return (
    <div className="registration-container">
      <h1>Let's Start with the Basics</h1>
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor="name">What is your name?</label>
          <input
            type="text"
            placeholder="name"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
          />
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            placeholder="dob"
            name="dob"
            id="dob"
            value={dob}
            onChange={handleChange}
          />
        </div>
        <label>Gender</label>
        <CustomRadioButton
          items={items}
          selected={selected}
          onClick={handleSelection}
        />
        <button>Next</button>
      </form>
    </div>
  );
}

export default Registration1;
