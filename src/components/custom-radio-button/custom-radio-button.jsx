import React from "react";
import "./custom-radio-button.scss";
function CustomRadioButton() {
  return (
    <div className="radio-buttons">
      <input type="radio" id="fat" name="fatfit" />
      <input type="radio" id="fit" name="fatfit" />
      <input type="radio" id="other" name="fatfit" />

      <div className="button-label-container">
        <label for="fat">Male</label>
        <label for="fit">Female</label>
        <label for="other">Other</label>
      </div>
    </div>
  );
}

export default CustomRadioButton;
