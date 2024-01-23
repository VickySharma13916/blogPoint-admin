import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { default as ReactSelect } from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const Select = React.forwardRef(
  ({ options, placeHolder, isClearable, name, isMulti, className, label, id, error, ...rest }, ref) => {
    return (
      <span
        className={`d-inline-block w-100 position-relative pt-2 pb-4 input__wrapper ${error ? 'error' : ''}`}
        ref={ref}
      >
        <ReactSelect
          id={`input-select-${id}`}
          name={name}
          placeholder={placeHolder}
          components={animatedComponents}
          closeMenuOnSelect={!isMulti}
          isMulti={isMulti}
          options={options?.map((option) => {
            return {
              value: option.value,
              label: option.label,
              // isDisabled: !!option.isDisabled,
            };
          })}
          isClearable={isClearable}
          className={`input__select ${className}`}
          {...rest}
        />
        {label && <label htmlFor={`input-select-${id}`}>{label}</label>}
        <span className="input-error">{error}</span>
      </span>
    );
  }
);

Select.propTypes = {
  options: PropTypes.array.isRequired,
  placeHolder: PropTypes.string,
  isClearable: PropTypes.bool,
  name: PropTypes.string,
  isMulti: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
};

Select.defaultProps = {
  placeHolder: 'Select',
  isClearable: false,
  name: '',
  isMulti: false,
  className: '',
  onChange: () => null,
  required: false,
  label: '',
  id: uuidv4(),
  error: '',
};

export default Select;
