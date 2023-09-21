import { useState } from 'react';

import classNames from 'classnames';

import Button from 'shared/UI/Button/Button';
import Input from 'shared/UI/Input/Input';

import styles from './AddForm.module.scss';

const AddForm = ({ addTask }) => {
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
    } else {
      alert('Empty value');
    }
  };

  return (
    <div className={classNames(styles.AddForm)}>
      <Input onChangeHandler={inputHandler} value={value} placeholder="New Task..." />
      <Button actionHandler={buttonHandler}>Add Task</Button>
    </div>
  );
};

export default AddForm;
