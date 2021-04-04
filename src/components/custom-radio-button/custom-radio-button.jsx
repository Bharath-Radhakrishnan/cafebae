import React, { useState } from "react";
import "./custom-radio-button.scss";
function CustomRadioButton() {
  const [selected, setSelected] = useState("");
  const handleClick = (e) => {
    const { name } = e.target;
    setSelected(name);
    console.log("clicked", e.target, name);
    console.log({ selected });
  };

  const style = {
    boxShadow:
      "inset 0 0 0 4px #1597ff, 0 15px 15px -10px rgba(darken(#1597ff, 10%), 0.375)",
  };
  return (
    <div className="radio-buttons">
      <input type="radio" id="fat" name="fat" onClick={handleClick} />
      <input type="radio" id="fit" name="fit" onClick={handleClick} />
      <input type="radio" id="other" name="other" onClick={handleClick} />

      <div className="button-label-container">
        <label for="fat" style={style}>
          Male
        </label>
        <label for="fit">Female</label>
        <label for="other">Other</label>
      </div>
    </div>
  );
}

export default CustomRadioButton;
