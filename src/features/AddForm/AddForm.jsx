// Импорт react'a не нужен
import React, { useState } from 'react';
import Button from '../../shared/Button/Button';
import Input from '../../shared/Input/Input';
import classNames from 'classnames';

import styles from './AddForm.module.scss';

// function -> const addForm = ({addTask}) =>
function AddForm({ addTask }) {
  const [value, setValue] = useState('');

  const inputHandler = event => {
    setValue(event.target.value);
  };

  const buttonHandler = () => {
    if (value !== '') {
      addTask({
        id: Date.now(),
        value: value,
        isCompleted: false,
      });
      setValue('');
      // Добавь скобки для else + не стоит использовать alert
    } else alert('Empty value');
  };

  return (
    <div className={classNames(styles.AddForm)}>
      <Input onChangeHandler={inputHandler} value={value} placeholder="New Task..." />
      <Button actionHandler={buttonHandler}>Add Task</Button>
    </div>
  );
}

export default AddForm;
