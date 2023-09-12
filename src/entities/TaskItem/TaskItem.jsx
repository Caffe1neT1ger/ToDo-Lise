import React, { useState } from 'react';
import Button from '../../shared/Button/Button';
import Input from '../../shared/Input/Input';

function TaskItem({ itemIndex, id, value, isCompleted, changeStatus, deleteTask, editTask }) {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const completeTask = () => {
    changeStatus(id);
  };

  const deleteTaskHandler = () => {
    deleteTask(id);
  };
  const editHandler = () => {
    if (editing) {
      value = editValue;
      editTask(id, value);
      setEditing(false);
    } else setEditing(true);
  };
  const onChangeHandler = event => {
    setEditValue(event.target.value);
  };
  return (
    <div>
      <div>
        <h1>{itemIndex || 0}</h1>
        {editing ? (
          <Input value={editValue} onChangeHandler={onChangeHandler} />
        ) : (
          <p>{value || 'body'}</p>
        )}
        <p>{isCompleted ? '+' : '-'}</p>
      </div>
      <div>
        <Button actionHandler={completeTask}>Complete</Button>
        <Button actionHandler={deleteTaskHandler}>Delete</Button>
        <Button actionHandler={editHandler}>{editing ? 'Save Changes' : 'Edit'}</Button>
      </div>
    </div>
  );
}

export default TaskItem;
