import React, { useState } from 'react';
import Button from '../../shared/Button/Button';
import Input from '../../shared/Input/Input';

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
    } else alert('Empty value');
  };

  return (
    <div>
      <Input onChangeHandler={inputHandler} value={value} />
      <Button actionHandler={buttonHandler}>Add Task</Button>
    </div>
  );
}

export default AddForm;
