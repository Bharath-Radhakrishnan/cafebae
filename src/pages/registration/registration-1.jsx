import React, { useState } from "react";
import CustomInput from "../../components/custom-input/CustomInput";
import NextButton from "../../components/next-button/NextButton";
import CustomRadioButton from "../../components/custom-radio-button/custom-radio-button";
import FormatDate from "../../services/dateservice";
import "./registration.scss";
import { useStateValue } from "../../StateProvider";
import { registerActionTypes } from "../../reducers/register/register.types";
import { useHistory } from "react-router";
import genderList from "../../data/gender";
function Registration1() {
  const [{ register }, dispatch] = useStateValue();
  const history = useHistory();
  const items = genderList;
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
    const { value } = e.target;
    setSelected(value);
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
      <form className="input-form" onSubmit={handleSubmit} autoComplete="off">
        <div className="name">
          <CustomInput
            type="text"
            placeholder="name"
            label="What is your name?"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
          />
          <CustomInput
            type="date"
            placeholder="dob"
            label="Date of Birth"
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
        <NextButton />
      </form>
    </div>
  );
}

export default Registration1;
