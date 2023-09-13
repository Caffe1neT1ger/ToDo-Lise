import React, { useEffect, useState } from 'react';
import TaskItem from '../../entities/TaskItem/TaskItem';
import Pagination from '../../shared/Pagination/Pagination';

import styles from './TaskList.module.scss';
import classNames from 'classnames';

function TaskList({ taskList, changeStatus, deleteTask, editTask, maxItems = 5 }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.ceil(taskList.length / maxItems));

  useEffect(() => {
    setCurrentPage(1);
    setTotalPages(Math.ceil(taskList.length / maxItems));
  }, [taskList, maxItems]);

  return (
    <div className={classNames(styles.TaskList)}>
      <div className={styles.TaskListContent}>
        {taskList
          .slice((currentPage - 1) * maxItems, currentPage * maxItems)

          .map((task, index) => {
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

      <Pagination currentPage={currentPage} setPages={setCurrentPage} totalPages={totalPages} />
    </div>
  );
}

export default TaskList;
