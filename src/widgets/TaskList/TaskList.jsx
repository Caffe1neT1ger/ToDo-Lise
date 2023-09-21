import { useEffect, useState, useMemo } from 'react';

import TaskItem from 'entities/TaskItem/TaskItem';
import Pagination from 'shared/UI/Pagination/Pagination';

import styles from './TaskList.module.scss';

const TaskList = ({ taskList, changeStatus, deleteTask, editTask, maxItems = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(taskList.length / maxItems));

  useEffect(() => {
    setTotalPages(Math.ceil(taskList.length / maxItems));
    setCurrentPage(prev => (prev <= totalPages ? prev : totalPages));
  }, [taskList, maxItems, totalPages]);

  const pagesArray = useMemo(() => {
    const arr = [];
    for (let i = 0; i < totalPages; i++) {
      arr.push(i + 1);
    }
    return arr;
  }, [totalPages]);

  return (
    <div className={styles.TaskList}>
      <div className={styles.TaskListContent}>
        {taskList.slice((currentPage - 1) * maxItems, currentPage * maxItems).map((task, index) => {
          return (
            <TaskItem
              key={task.id}
              itemIndex={(currentPage - 1) * maxItems + index + 1}
              id={task.id}
              value={task.value}
              isCompleted={task.isCompleted}
              changeStatus={changeStatus}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          );
        })}
      </div>

      <Pagination currentPage={currentPage} setPages={setCurrentPage} pagesArray={pagesArray} />
    </div>
  );
};

export default TaskList;
