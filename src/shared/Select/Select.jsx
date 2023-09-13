import React from 'react';

import styles from './Select.module.scss';
import classNames from 'classnames';

function Select({ options, defaultOption, value, onChange }) {
  return (
    <select
      className={classNames(styles.Select)}
      value={value}
      onChange={event => onChange(event.target.value)}
    >
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
