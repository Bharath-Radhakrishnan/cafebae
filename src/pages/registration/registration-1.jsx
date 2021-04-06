import React from "react";
import CustomRadioButton from "../../components/custom-radio-button/custom-radio-button";
import "./registration.scss";
function Registration1() {
  return (
    <div className="registration-container">
      <h1>Let's Start with the Basics</h1>
      <form className="input-form">
        <div className="name">
          <label for="name">What is your name?</label>
          <input type="text" placeholder="name" name="name" id="name" />
          <label for="dob">Date of Birth</label>
          <input type="date" placeholder="dob" name="dob" id="dob" />
        </div>
        <label>Gender</label>
        <CustomRadioButton />
      </form>
    </div>
  );
}

export default Registration1;
