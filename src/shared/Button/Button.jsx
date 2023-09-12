import React from 'react';

function Button({ classNames = '', type, actionHandler, children }) {
  return (
    <button className={classNames} onClick={actionHandler}>
      {children}
    </button>
  );
}

export default Button;
