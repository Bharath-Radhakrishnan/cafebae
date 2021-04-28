import React, { useState } from "react";
import "./custom-radio-button.scss";
function CustomRadioButton({ items, selected, onClick }) {
  return (
    <div className="radio-buttons">
      <div>
        {items.map(({label,value}, index) => {
          return (
            <input
              key={index}
              type="radio"
              id={label}
              value={value}
              onClick={onClick}
            />
          );
        })}
      </div>

      <div className="button-label-container">
        {items.map(({label,value}, index) => {
          const isSelected = parseInt(selected) === value;
          return (
            <label
              key={index}
              htmlFor={label}
              className={`${isSelected ? "is-selected" : ""}`}
            >
              {label}
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default CustomRadioButton;
