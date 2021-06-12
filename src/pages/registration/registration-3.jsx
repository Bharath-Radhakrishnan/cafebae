import "./registration.scss";
import { useHistory } from "react-router";
import { useRef } from "react";
import NextButton from "../../components/next-button/NextButton";
import CustomInput from "../../components/custom-input/CustomInput";
import { addUserData } from "../../firebase/firebase.utils";

function Registration3() {
  const history = useHistory();

  const placeRef = useRef();
  const nativePlaceRef = useRef();
  const occupationRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      const place = placeRef.current.value;
      const nativePlace = nativePlaceRef.current.value;
      const occupation = occupationRef.current.value;
      const _data = {
        place,
        nativePlace,
        occupation,
      };
      try {
        addUserData(_data);
        history.push("/register4");
      } catch (e) {
        console.log(e);
      }
    }
  };
  const validate = () => {
    let isValid = true;
    const place = placeRef.current.value;
    const nativePlace = nativePlaceRef.current.value;
    const occupation = occupationRef.current.value;
    if (!place) isValid = false;
    if (!nativePlace) isValid = false;
    if (!occupation) isValid = false;
    return isValid;
  };
  return (
    <div className="registration-container">
      <h1>Your location details</h1>
      <form className="input-form" autoComplete="off" onSubmit={handleSubmit}>
        <div className="name">
          <CustomInput
            type="text"
            label="Based out of"
            placeholder="Location"
            name="place"
            id="Place"
            ref={placeRef}
          />

          <CustomInput
            type="text"
            label="Grew up here"
            placeholder="Location"
            name="nativePlace"
            id="nativePlace"
            ref={nativePlaceRef}
          />
          <CustomInput
            type="text"
            label="What do you do for a living?"
            placeholder="ex: product consultant"
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
        <NextButton />
      </form>
    </div>
  );
}

export default Registration3;
