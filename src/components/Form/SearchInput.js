import React, { useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import _ from "lodash-es";

import { MdOutlineSearch, MdCancel } from "react-icons/md";

const SearchInput = React.forwardRef(({ className, onChange, onBlur, placeHolder, id, reset, ...rest }, ref) => {
  const inputRef = useRef(null);

  const handleOnChange = _.debounce((event) => {
    onChange(event.target.value);
  }, 700);

  const handleOnClear = () => {
    inputRef.current.value = "";
    onChange(null);
  }

  useEffect(() => {
    if(reset) {
      inputRef.current.value = "";
    }
  }, [reset, inputRef]);

  return (
    <span className={`d-inline-block w-100 position-relative search-input__wrapper`} ref={ref}>
      <input
        ref={inputRef}
        id={`input-${id}`}
        type="text"
        className={`${className}`}
        onChange={handleOnChange}
        onBlur={onBlur}
        placeholder={placeHolder}
        {...rest}
      />
      <label htmlFor={`input-${id}`}>{placeHolder}</label>
      <MdCancel className="cancel-icon" size={18} onClick={handleOnClear} />
      <MdOutlineSearch className="search-icon" />
    </span>
  )
});

SearchInput.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeHolder: PropTypes.string,
  id: PropTypes.string,
  reset: PropTypes.string
};

SearchInput.defaultProps = {
  className: "",
  onChange: () => null,
  onBlur: () => null,
  placeHolder: "Search",
  id: uuidv4(),
  reset: null,
}

export default SearchInput;