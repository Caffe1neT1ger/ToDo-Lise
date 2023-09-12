import React, { useEffect, useState } from 'react';

import classNames from 'classnames';
import styles from './App.module.scss';
import AddForm from '../features/AddForm/AddForm';
import TaskList from '../features/TaskList/TaskList';
import { useTasks } from '../shared/hooks/useTasks';
import TaskFilter from '../entities/TaskFilter/TaskFilter';

function App() {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('TASKLIST') || '[]'));
  const [filter, setFilter] = useState({
    completed: 'all',
    sort: 'desc',
  });

  const sortedTasks = useTasks(taskList, filter.sort, filter.completed);

  useEffect(() => {
    localStorage.setItem('TASKLIST', JSON.stringify(taskList));
  }, [taskList]);

  const addTask = task => {
    setTaskList([...taskList, task]);
    localStorage.setItem('TASKLIST', JSON.stringify(taskList));
  };

  const changeStatus = taskId => {
    setTaskList(
      taskList.map(item => {
        if (item.id === taskId) item.isCompleted = !item.isCompleted;

        return item;
      })
    );
    localStorage.setItem('TASKLIST', JSON.stringify(taskList));
  };

  const editTask = (id, value) => {
    setTaskList(
      taskList.map(item => {
        if (item.id === id) item.value = value;
        return item;
      })
    );
    localStorage.setItem('TASKLIST', JSON.stringify(taskList));
  };

  const deleteTask = taskId => {
    setTaskList(taskList.filter(task => task.id !== taskId));
    localStorage.setItem('TASKLIST', JSON.stringify(taskList));
  };

  return (
    <div className={classNames(styles.App)}>
      <AddForm addTask={addTask} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList
        taskList={sortedTasks}
        changeStatus={changeStatus}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
