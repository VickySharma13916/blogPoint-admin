import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const NativeSelect = React.forwardRef(
  ({ className, label, id, error, options, value, ...rest }, ref) => {
    return (
      <span
        className={`d-inline-block w-100 position-relative pt-2 pb-4 input__wrapper ${
          error ? "error" : ""
        }`}
        ref={ref}
      >
        <select
          id={`native-select-input-${id}`}
          className={`${className}`}
          defaultValue={value}
          {...rest}
        >
          <option value="">{label ? label : "Select..."}</option>
          {options &&
            options.map((option, index) => (
              <option key={`select-option-${index}`} value={option.id}>
                {option.label}
              </option>
            ))}
        </select>
        <label htmlFor={`native-select-input-${id}`}>{label}</label>
        <span className="input-error">{error}</span>
      </span>
    );
  }
);

NativeSelect.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.array,
};

NativeSelect.defaultProps = {
  className: "",
  onChange: () => null,
  label: "",
  id: uuidv4(),
  error: "",
  options: [],
};

export default NativeSelect;
