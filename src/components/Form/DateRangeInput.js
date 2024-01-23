import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { MdCancel } from 'react-icons/md';

import 'bootstrap-daterangepicker/daterangepicker.css';

const DateRangeInput = React.forwardRef(
  ({ className, onChange, label, maxDate, singleDatePicker, id, error, isClearable, value, format, ...rest }, ref) => {
    const [dates, setDates] = useState({ start: undefined, end: undefined });

    const onClear = () => {
      setDates({ start: undefined, end: undefined });
      onChange({ start: undefined, end: undefined });
    };

    const handleCallback = (start, end) => {
      setDates({ start, end });
      onChange({ start, end });
    };

    useEffect(() => {
      if (value && value.start && value.end) {
        setDates({ start: value.start, end: value.end });
      } else if (value && singleDatePicker) {
        setDates({ start: value, end: undefined });
      } else {
        setDates({ start: undefined, end: undefined });
      }
    }, [value, singleDatePicker]);

    return (
      <span
        className={`d-inline-block w-100 position-relative pt-2 pb-4 input__wrapper ${error ? 'error' : ''}`}
        ref={ref}
      >
        <DateRangePicker
          initialSettings={{
            drops: 'down',
            opens: 'left',
            maxDate: maxDate ? new Date() : undefined,
            singleDatePicker,
            autoApply: true,
            locale: {
              format: format,
            },
            ...dates,
          }}
          onCallback={handleCallback}
        >
          <input
            id={`daterange-input-${id}`}
            className={`${className}${isClearable ? ' input-clearable' : ''}`}
            placeholder={label}
            {...rest}
            value={`${
              dates.start
                ? singleDatePicker
                  ? `${dates.start.format(format)}`
                  : `${dates.start.format(format)} - ${dates.end.format(format)}`
                : ''
            }`}
            readOnly
          />
        </DateRangePicker>
        <label htmlFor={`input-${id}`}>{label}</label>
        <span className="input-error">{error}</span>
        {isClearable && <MdCancel className="input-clear-btn" size={18} onClick={onClear} />}
      </span>
    );
  }
);

DateRangeInput.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
  isClearable: PropTypes.bool,
  value: PropTypes.any,
  format: PropTypes.any,
};

DateRangeInput.defaultProps = {
  className: '',
  format: 'MMM DD, YYYY',
  onChange: () => null,
  onBlur: () => null,
  label: '',
  id: uuidv4(),
  error: '',
  isClearable: false,
  value: null,
};

export default DateRangeInput;
