import React from 'react';

function Input({ className, value, placeholder, onChangeHandler, readOnly }) {
  return (
    <input
      className={className}
      value={value}
      placeholder={placeholder}
      onChange={onChangeHandler}
      readOnly={readOnly}
    />
  );
}

export default Input;
