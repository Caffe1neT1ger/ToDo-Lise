// Тут не нужен импорт реакта
import React from 'react';

import classNames from 'classnames';

import checkIcon from 'shared/assets/Icons/check_ring_round.svg';
import editIcon from 'shared/assets/Icons/Edit.svg';
import deleteIcon from 'shared/assets/Icons/Trash.svg';
import closeIcon from 'shared/assets/Icons/close_ring.svg';

import styles from './Button.module.scss';

export const ButtonType = {
  EDIT: editIcon,
  DELETE: deleteIcon,
  DONE: checkIcon,
  UNDONE: closeIcon,
  NONE: '',
};

const Button = ({
  className,
  actionHandler,
  children,
  type = ButtonType.NONE,
  disabled = false,
  active = false,
}) => {
  return (
    <button
      className={classNames(styles.Button, {}, [className, active ? styles.active : ''])}
      onClick={actionHandler}
      disabled={disabled}
      style={{ background: type && 'transparent' }}
    >
      {type && (
        <img src={type} fill={type === ButtonType.DONE ? '#67FF71' : '#FF6C71'} alt="icon"></img>
      )}
      {children}
    </button>
  );
};

export default Button;
