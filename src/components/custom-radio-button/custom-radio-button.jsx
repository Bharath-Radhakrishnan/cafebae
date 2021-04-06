import React, { useState } from "react";
import "./custom-radio-button.scss";
const items = [
  { id: 1, value: "Male" },
  {
    id: 2,
    value: "Female",
  },
  {
    id: 3,
    value: "Other",
  },
];
function CustomRadioButton() {
  const [selected, setSelected] = useState("");
  const handleClick = (e) => {
    const { name } = e.target;
    setSelected(name);
  };

  return (
    <div className="radio-buttons">
      <div>
        {items.map((item) => {
          return (
            <input
              type="radio"
              id={item.value}
              name={item.value}
              onClick={handleClick}
            />
          );
        })}
      </div>

      <div className="button-label-container">
        {items.map((item) => {
          const isSelected = selected === item.value;
          return (
            <label
              for={item.value}
              className={`${isSelected ? "is-selected" : ""}`}
            >
              {item.value}
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default CustomRadioButton;
