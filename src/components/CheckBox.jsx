import React, { useRef } from "react";
import PropTypes from "prop-types";

const CheckBox = props => {
  const inputRef = useRef(null);

  const { checked, label, onChange, shape = "", color } = props;

  const customOnChange = () => {
    if (onChange) {
      onChange(inputRef.current);
    }
  };

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        ref={inputRef}
        onChange={customOnChange}
        checked={checked}
      />
      <span className={`custom-checkbox__checkmark ${shape} ${color}`}>
        <i className="bx bx-check"></i>
      </span>
      {label}
    </label>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool
};

export default CheckBox;
