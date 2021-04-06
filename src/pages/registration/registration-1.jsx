import React, { useState } from "react";
import CustomRadioButton from "../../components/custom-radio-button/custom-radio-button";
import "./registration.scss";
function Registration1() {
  const items = ["Male", "Female", "Other"];
  const [selected, setSelected] = useState("");
  const handleClick = (e) => {
    const { name } = e.target;
    setSelected(name);
  };
  return (
    <div className="registration-container">
      <h1>Let's Start with the Basics</h1>
      <form className="input-form">
        <div className="name">
          <label htmlFor="name">What is your name?</label>
          <input type="text" placeholder="name" name="name" id="name" />
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" placeholder="dob" name="dob" id="dob" />
        </div>
        <label>Gender</label>
        <CustomRadioButton
          items={items}
          selected={selected}
          onClick={handleClick}
        />
      </form>
    </div>
  );
}

export default Registration1;
