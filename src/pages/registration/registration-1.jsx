import React, { useState, useRef } from "react";
import CustomInput from "../../components/custom-input/CustomInput";
import NextButton from "../../components/next-button/NextButton";
import CustomRadioButton from "../../components/custom-radio-button/custom-radio-button";
import FormatDate from "../../services/dateservice";
import { useHistory } from "react-router";
import genderList from "../../data/gender";
import { addUserData } from "../../firebase/firebase.utils";

//-----StyleSheet-------------
import "./registration.scss";

function Registration1() {
  const history = useHistory();
  const items = genderList;
  //-------------State-Variables--------------------------
  const nameRef = useRef();
  const dobRef = useRef();
  const [selected, setSelected] = useState("");

  //--------Methods-------------------

  const handleSelection = (e) => {
    const { value } = e.target;
    setSelected(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    const name = nameRef.current.value;
    const dob = dobRef.current.value;

    if (isValid) {
      const _data = {
        userName: name,
        dob: FormatDate(dob),
        gender: selected,
      };
      try {
        addUserData(_data);
        history.push("/register2");
      } catch (e) {
        console.log(e.message);
      }
    }
  };

  const validate = () => {
    const name = nameRef.current.value;
    const dob = dobRef.current.value;
    let isValid = true;
    if (!name) isValid = false;
    if (!dob) isValid = false;
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
            placeholder="Name"
            label="What is your name?"
            name="name"
            id="name"
            ref={nameRef}
          />
          <CustomInput
            type="date"
            placeholder="dob"
            label="Date of Birth"
            name="dob"
            id="dob"
            ref={dobRef}
          />
        </div>
        <label>Gender</label>
        <CustomRadioButton
          items={items}
          selected={selected}
          onClick={handleSelection}
        />
        <div className="button-container ">
          <NextButton />
        </div>
      </form>
    </div>
  );
}

export default Registration1;
