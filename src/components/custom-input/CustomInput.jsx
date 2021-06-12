import "./CustomInput.scss";
function CustomInput({ label, id, onChange, ...otherProps }) {
  return (
    <div className="name">
      <label htmlFor={id}>{label}</label>
      <input id={id} onChange={onChange} {...otherProps} />
    </div>
  );
}

export default CustomInput;
