import "./registration.scss";
import { useHistory } from "react-router";
import CustomRadioButton from "../../components/custom-radio-button/custom-radio-button";
import genderList from "../../data/gender";
import { useState, useRef } from "react";
import { addUserData } from "../../firebase/firebase.utils";
import CustomInput from "../../components/custom-input/CustomInput";
import NextButton from "../../components/next-button/NextButton";

function Registration5() {
  //----------------------Hooks---------------------------------
  const history = useHistory();
  const items = genderList;
  //-------------------State-Variables-------------------------
  const [selected, setSelected] = useState();
  const ageRef = useRef();
  const occupationRef = useRef();

  //--------------------Methods--------------------------------
  const handleSelection = (e) => {
    const { value } = e.target;
    setSelected(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const age = ageRef.current.value;
    const occupation = occupationRef.current.value;
    const isValid = validate();
    if (isValid) {
      const _data = {
        agePreference: age,
        occupationPreference: occupation,
        genderPreference: selected,
        //----is-Registered-flag-------
        isRegistered: true,
      };
      try {
        addUserData(_data);
        history.push("/dashboard");
      } catch (e) {
        console.log(e);
      }
    }
  };
  const validate = () => {
    let isValid = true;
    const age = ageRef.current.value;
    const occupation = occupationRef.current.value;
    if (!age || age < 18 || age > 50) isValid = false;
    if (!occupation) isValid = false;
    if (!selected) isValid = false;
    return isValid;
  };

  return (
    <div className="registration-container">
      <h1>Your Preferences</h1>
      <form className="input-form" onSubmit={handleSubmit} autoComplete="off">
        <div className="name">
          <CustomInput
            label="Age?"
            type="number"
            placeholder="age"
            name="age"
            id="age"
            min="18"
            max="50"
            ref={ageRef}
          />
          <CustomInput
            label="Any Preferences regarding your datae"
            type="text"
            placeholder="ex: #techie #banglore"
            name="occupation"
            id="occupation"
            ref={occupationRef}
          />
          <h4>Popular Choices</h4>
          <p>
            <span>#Product</span>
            <span>#Consultant</span>
            <span>#Doctor</span>
            <span>#Manager </span>
            <span>#Designer</span>
          </p>
          <p>
            <span>#Marketing</span>
            <span>#Techie</span>
            <span>#Enterpreneur</span>
            <span>#Business </span>
          </p>
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

export default Registration5;
