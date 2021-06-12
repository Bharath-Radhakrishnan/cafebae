import "./registration.scss";
import { useHistory } from "react-router";
import CustomInput from "../../components/custom-input/CustomInput";
import CustomRadioButton from "../../components/custom-radio-button/custom-radio-button";
import { useState, useRef } from "react";
import settlementList from "../../data/settlement";
import NextButton from "../../components/next-button/NextButton";
import { addUserData } from "../../firebase/firebase.utils";
function Registration4() {
  const items = settlementList;
  const [selected, setSelected] = useState("");

  const availabilityRef = useRef();
  const bioRef = useRef();
  const history = useHistory();

  //------------------Methods---------------
  const handleSelection = (e) => {
    const { value } = e.target;
    setSelected(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      const availability = availabilityRef.current.value;
      const bio = bioRef.current.value;
      console.log({ selected, availability, bio });
      const _data = {
        settlementYear: selected,
        availability,
        bio,
      };
      try {
        addUserData(_data);
        history.push("/register5");
      } catch (e) {
        console.log(e);
      }
    }
  };
  const validate = () => {
    const availability = availabilityRef.current.value;
    const bio = bioRef.current.value;

    let isValid = true;
    if (selected === "") isValid = false;
    if (!availability) isValid = false;
    if (!bio) isValid = false;
    return isValid;
  };
  //-----------Render-----------------------
  return (
    <div className="registration-container">
      <form className="input-form" onSubmit={handleSubmit}>
        <label>When do you plan to settle on</label>
        <CustomRadioButton
          items={items}
          selected={selected}
          onClick={handleSelection}
        />
        <div className="name">
          <CustomInput
            label="Your Availability?"
            type="text"
            placeholder="name"
            name="availability"
            id="availability"
            ref={availabilityRef}
          />
          <label htmlFor="bio">About you</label>
          <textarea placeholder="bio" name="bio" id="bio" ref={bioRef} />
        </div>
        <NextButton />
      </form>
    </div>
  );
}

export default Registration4;
