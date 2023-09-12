import { useMemo } from 'react';

export const useSortedTasks = (tasks, sort) => {
  const getTasks = () => {
    if (sort === 'desc') return [...tasks.sort((a, b) => (a.id > b.id ? 1 : -1))];
    if (sort === 'asc') return [...tasks.sort((a, b) => (a.id < b.id ? 1 : -1))];
  };
  const sortedTasks = useMemo(getTasks, [tasks, sort]);
  return sortedTasks;
};

export const useTasks = (tasks, sort, completed) => {
  const sortedTasks = useSortedTasks(tasks, sort);

  const sortedAndFilteredTasks = useMemo(() => {
    return sortedTasks.filter(task =>
      completed === 'all' ? true : String(task.isCompleted) === completed
    );
  }, [completed, sortedTasks]);
  return sortedAndFilteredTasks;
};
