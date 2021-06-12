import { forwardRef } from "react";
import "./CustomInput.scss";
const CustomInput = forwardRef(
  ({ label, id, onChange, ...otherProps }, ref) => {
    return (
      <div className="name">
        <label htmlFor={id}>{label}</label>
        <input id={id} onChange={onChange} {...otherProps} ref={ref} />
      </div>
    );
  }
);

export default CustomInput;
