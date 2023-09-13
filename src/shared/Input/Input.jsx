import React from 'react';

import classNames from 'classnames';

import styles from './Input.module.scss';

export const background = {
  PRIMARY: '#FFF4D3',
  EDIT: 'none',
};

function Input({
  className,
  value,
  placeholder,
  onChangeHandler,
  readOnly,
  backgroundColor = background.PRIMARY,
}) {
  return (
    <input
      className={classNames(styles.Input, {}, [className])}
      value={value}
      placeholder={placeholder}
      onChange={onChangeHandler}
      readOnly={readOnly}
      style={{ backgroundColor }}
    />
  );
}

export default Input;
