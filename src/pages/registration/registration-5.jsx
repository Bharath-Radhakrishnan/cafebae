import "./registration.scss";
import { useHistory } from "react-router";
import { useStateValue } from "../../StateProvider";
import CustomRadioButton from "../../components/custom-radio-button/custom-radio-button";
import genderList from "../../data/gender";
import { useState } from "react";
import { auth, firestore } from "../../firebase/firebase.utils";
import { useAuthState } from "react-firebase-hooks/auth";

function Registration5() {
  //----------------------Hooks---------------------------------
  const [{ register }, dispatch] = useStateValue();
  const history = useHistory();
  const items = genderList;
  //-------------------State-Variables-------------------------
  const [{ age, occupation }, setData] = useState({ age: "", occupation: "" });
  const [selected, setSelected] = useState("");
  //--------------------Methods--------------------------------
  const handleSelection = (e) => {
    const { value } = e.target;
    setSelected(value);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      let data = register;
      data = {
        ...data,
        agePreference: age,
        occupationPreference: occupation,
        genderPreference: selected,
      };
      postData(data);
      history.push("/dashboard");
    }
  };
  const validate = () => {
    let isValid = true;
    if (age === "") isValid = false;
    if (occupation === "") isValid = false;
    if (selected === "") isValid = false;
    return isValid;
  };

  const postData = async (data) => {
    const uid = auth.currentUser.uid;
    const userRef = firestore.doc(`/users/${uid}`);
    const snapShot = await userRef.get();
    if (snapShot.exists) {
      try {
        await userRef.set(
          {
            ...data,
            isRegistered: true,
          },
          { merge: true }
        );
      } catch (e) {
        console.log("error creating user", e.message);
      }
    }
  };
  return (
    <div className="registration-container">
      <h1>Your Preferences</h1>
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            min="18"
            max="100"
            placeholder="age"
            name="age"
            id="age"
            value={age}
            onChange={handleChange}
          />
          <label htmlFor="bio">Any Preferences regarding your datae</label>
          <input
            type="text"
            placeholder="ex: #techie #banglore"
            name="occupation"
            id="occupation"
            value={occupation}
            onChange={handleChange}
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
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Registration5;
