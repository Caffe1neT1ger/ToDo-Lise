import { useEffect, useState } from 'react';

import TaskList from 'widgets/TaskList/TaskList';
import AddForm from 'features/AddForm/AddForm';
import TaskFilter from 'features/TaskFilter/TaskFilter';
import Container from 'shared/UI/Container/Container';

import { useTasks } from 'shared/hooks/useTasks';

import { TASKLIST } from 'shared/const/localStorageKeys';
import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from 'shared/lib/localStorageDataManagement';

import styles from './App.module.scss';

const App = () => {
  const [taskList, setTaskList] = useState(getDataFromLocalStorage(TASKLIST));
  const [filter, setFilter] = useState({
    completed: 'all',
    sort: 'desc',
  });
  const sortedTasks = useTasks(taskList, filter.sort, filter.completed);

  useEffect(() => {
    localStorage.setItem('TASKLIST', JSON.stringify(taskList));
  }, [taskList]);

  const setFilterHandler = filter => {
    setFilter(filter);
  };

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

    setDataToLocalStorage(TASKLIST, taskList);
  };

  const editTask = (id, value) => {
    setTaskList(prev =>
      prev.map(item => {
        if (item.id === id) item.value = value;
        return item;
      })
    );

    setDataToLocalStorage(TASKLIST, taskList);
  };

  const deleteTask = taskId => {
    setTaskList(taskList.filter(task => task.id !== taskId));
    setDataToLocalStorage(TASKLIST, taskList);
  };

  return (
    <div className={styles.App}>
      <h1 className={styles.Title}>ToDo List by Croak_Croak</h1>
      <Container>
        <AddForm addTask={addTask} />
        <TaskFilter filter={filter} setFilter={setFilterHandler} />
        <TaskList
          taskList={sortedTasks}
          changeStatus={changeStatus}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </Container>
    </div>
  );
};

export default App;
