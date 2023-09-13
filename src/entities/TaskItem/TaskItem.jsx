import React, { useState } from 'react';

import classNames from 'classnames';

import Button, { Type } from '../../shared/Button/Button';
import Input, { background } from '../../shared/Input/Input';

import styles from './TaskItem.module.scss';

const options = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

function TaskItem({
  className,
  itemIndex,
  id,
  value,
  isCompleted,
  changeStatus,
  deleteTask,
  editTask,
}) {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const [completed, setCompleted] = useState(isCompleted);

  const completeTask = () => {
    setCompleted(!completed);
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
    <div className={classNames(styles.TaskItem, {}, className)}>
      <div className={styles.contentBlock}>
        <span className={styles.Numbering}>{itemIndex || 0}</span>
        {editing ? (
          <Input
            value={editValue}
            onChangeHandler={onChangeHandler}
            backgroundColor={background.EDIT}
          />
        ) : (
          <p>{completed ? <strike>{value}</strike> : value || 'body'}</p>
        )}
      </div>

      <div className={styles.btnBlock}>
        <div className={styles.date}>{new Date(id).toLocaleString('ru-RU', options)}</div>
        <Button
          disabled={editing}
          type={completed ? Type.DONE : Type.UNDONE}
          actionHandler={completeTask}
        ></Button>
        <Button type={Type.EDIT} actionHandler={editHandler}></Button>
        <Button disabled={editing} type={Type.DELETE} actionHandler={deleteTaskHandler}></Button>
      </div>
    </div>
  );
}

export default TaskItem;
