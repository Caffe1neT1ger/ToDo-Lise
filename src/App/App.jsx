// Импорт react не нужен
import React, { useEffect, useState } from 'react';

// Пофикси импорты
// 1. Стили в конец
// 2. Важные библиотеки вверх
// 3. Импорты должны быть абсолютные
// Чекни https://stackoverflow.com/questions/59462001/use-absolute-path-for-jsx-files
import classNames from 'classnames';
import styles from './App.module.scss';
import AddForm from '../features/AddForm/AddForm';
import TaskList from '../widgets/TaskList/TaskList';
import { useTasks } from '../shared/hooks/useTasks';
import TaskFilter from '../entities/TaskFilter/TaskFilter';
import Container from '../shared/Container/Container';


// Общие советы
// shared слой должен иметь ui папку с UI-KIT'ом
// название общих папок должны называться с маленькой буквы
// Assets -> assets


// 1. 'TASKLIST' надо вынести в переменную, это предупреждает ошибки в написании
// Думаю ты видел как сделали это в sfedu-schedule

// function to const App = () => {...
function App() {
  // Насколько знаю можно вынести получение дефолтного значения
  // в функцию и просто вставлять
  // внутри useState
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('TASKLIST') || '[]'));
  const [filter, setFilter] = useState({
    completed: 'all',
    sort: 'desc',
  });

  const sortedTasks = useTasks(taskList, filter.sort, filter.completed);

  useEffect(() => {
    localStorage.setItem('TASKLIST', JSON.stringify(taskList));
  }, [taskList]);

  // task => (task)
  const addTask = task => {
    setTaskList([...taskList, task]);
    localStorage.setItem('TASKLIST', JSON.stringify(taskList));
  };

  // taskId => (taskId)
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
      //     setTaskList(prev =>
      //       prev.map(item => {
      //         if (item.id === id) item.value = value;
      //         return item;
      //       })
      //     );

    setTaskList(
      taskList.map(item => {
        if (item.id === id) item.value = value;
        return item;
      })
    );
    localStorage.setItem('TASKLIST', JSON.stringify(taskList));
  };

  // Тут тоже скобки
   const deleteTask = taskId => {
    setTaskList(taskList.filter(task => task.id !== taskId));
    localStorage.setItem('TASKLIST', JSON.stringify(taskList));
  };

  // Ниже не нужен classNames
  // + Мы не должны передавать setФункцию по изменению состяния напрямую
  // Ты должен обернуть это в функцию и передавать её
  return (
    <div className={classNames(styles.App)}>
      <h1 className={styles.Title}>ToDo List by Croak_Croak</h1>
      <Container>
        <AddForm addTask={addTask} />
        <TaskFilter filter={filter} setFilter={setFilter} />
        <TaskList
          taskList={sortedTasks}
          changeStatus={changeStatus}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </Container>
    </div>
  );
}

export default App;
