import classNames from 'classnames';

import styles from './Select.module.scss';

const Select = ({ options, defaultOption, value, onChange }) => {
  return (
    <select
      className={classNames(styles.Select)}
      value={value}
      onChange={event => onChange(event.target.value)}
    >
      {options.map((option, index) => {
        const disabled = option.value === defaultOption;
        return disabled ? (
          <option disabled key={index} value={option.value}>
            {option.name}
          </option>
        ) : (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
