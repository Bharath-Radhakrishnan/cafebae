import React, { useState } from "react";
import "./custom-radio-button.scss";
function CustomRadioButton({ items, selected, onClick }) {
  return (
    <div className="radio-buttons">
      <div>
        {items.map((item, index) => {
          return (
            <input
              key={index}
              type="radio"
              id={item}
              name={item}
              onClick={onClick}
            />
          );
        })}
      </div>

      <div className="button-label-container">
        {items.map((item, index) => {
          const isSelected = selected === item;
          return (
            <label
              key={index}
              htmlFor={item}
              className={`${isSelected ? "is-selected" : ""}`}
            >
              {item}
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default CustomRadioButton;
