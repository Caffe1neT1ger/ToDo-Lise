import React from 'react';

function Select({ options, defaultOption, value, onChange }) {
  return (
    <select value={value} onChange={event => onChange(event.target.value)}>
      {options.map((option, index) =>
        option.value === defaultOption ? (
          <option disabled key={index} value={option.value}>
            {option.name}
          </option>
        ) : (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        )
      )}
    </select>
  );
}

export default Select;
