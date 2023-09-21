import { useState } from 'react';

import Button, { ButtonType } from 'shared/UI/Button/Button';
import Input, { background } from 'shared/UI/Input/Input';

import styles from './TaskItem.module.scss';

const options = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

const TaskItem = ({ itemIndex, id, value, isCompleted, changeStatus, deleteTask, editTask }) => {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const [completed, setCompleted] = useState(isCompleted);

  const completeTask = () => {
    setCompleted(prev => !prev);
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
    <div className={styles.TaskItem}>
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
          type={completed ? ButtonType.DONE : ButtonType.UNDONE}
          actionHandler={completeTask}
        ></Button>
        <Button type={ButtonType.EDIT} actionHandler={editHandler}></Button>
        <Button
          disabled={editing}
          type={ButtonType.DELETE}
          actionHandler={deleteTaskHandler}
        ></Button>
      </div>
    </div>
  );
};

//<Button type={Type.EDIT} actionHandler={editHandler}></Button>
// Почему пустой тег? Если так реально надо то используй самозакрывающийся тег

export default TaskItem;
