import React, { useState } from "react";
import CustomRadioButton from "../../components/custom-radio-button/custom-radio-button";
import FormatDate from "../../services/dateservice";
import Loader from "react-loader-spinner";
import "./registration.scss";
function Registration1() {
  const items = ["Male", "Female", "Other"];
  const [data, setData] = useState({});
  const [selected, setSelected] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevState) => {
      if (name === "") {
        let date = FormatDate(value);
        console.log(date);
        return { ...prevState, dob: date };
      } else return { ...prevState, [name]: value };
    });
  };
  const handleClick = (e) => {
    const { name } = e.target;
    setSelected(name);
  };
  console.log(data);
  const { name, dob } = data;
  return (
    <div className="registration-container">
      <h1>Let's Start with the Basics</h1>
      <form className="input-form">
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
          onClick={handleClick}
        />
      </form>
      <div>
        <button>Next</button>
      </div>
    </div>
  );
}

export default Registration1;
