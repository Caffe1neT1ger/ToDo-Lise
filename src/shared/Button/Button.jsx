import React from 'react';

import classNames from 'classnames';

import checkIcon from '../Assets/Icons/check_ring_round.svg';
import editIcon from '../Assets/Icons/Edit.svg';
import deleteIcon from '../Assets/Icons/Trash.svg';
import closeIcon from '../Assets/Icons/close_ring.svg';

import styles from './Button.module.scss';

export const Type = {
  EDIT: editIcon,
  DELETE: deleteIcon,
  DONE: checkIcon,
  UNDONE: closeIcon,
  NONE: '',
};

function Button({
  className,
  actionHandler,
  children,
  type = Type.NONE,
  disabled = false,
  active = false,
}) {
  return (
    <button
      className={classNames(styles.Button, {}, [className, active ? styles.active : ''])}
      onClick={actionHandler}
      disabled={disabled}
      style={{ background: `${type != Type.NONE ? 'transparent' : ''}` }}
    >
      {type ? <img src={type} fill={type == Type.DONE ? '#67FF71' : '#FF6C71'}></img> : ''}
      {children}
    </button>
  );
}

export default Button;
