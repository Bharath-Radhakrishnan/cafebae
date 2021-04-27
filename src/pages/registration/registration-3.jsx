import "./registration.scss";
import { useHistory } from "react-router";
import { useStateValue } from "../../StateProvider";
import { useState } from "react";
import { registerActionTypes } from "../../reducers/register/register.types";

function Registration3() {
  const [{ register }, dispatch] = useStateValue();
  const history = useHistory();

  const [{ place, nativePlace, occupation }, setData] = useState({ place: "" });
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
          place,
          nativePlace,
          occupation,
        },
      });
      history.push("/register4");
    }
  };
  const validate = () => {
    let isValid = true;
    if (place === "") isValid = false;
    if (nativePlace === "") isValid = false;
    if (occupation === "") isValid = false;
    return isValid;
  };
  return (
    <div className="registration-container">
      <h1>Your location details</h1>
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="name">
          <label htmlFor="name">Based out of</label>
          <input
            type="text"
            placeholder="Location"
            name="place"
            id="Place"
            value={place}
            onChange={handleChange}
          />
          <label htmlFor="phone">Grew up here</label>
          <input
            type="text"
            placeholder="Location"
            name="nativePlace"
            id="nativePlace"
            value={nativePlace}
            onChange={handleChange}
          />
          <label htmlFor="phone">What do you do for a living?</label>
          <input
            type="text"
            placeholder="ex: product consultant"
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

        <button>Next</button>
      </form>
    </div>
  );
}

export default Registration3;
