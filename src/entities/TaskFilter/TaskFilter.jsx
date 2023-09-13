import React from 'react';
import Select from '../../shared/Select/Select';
import classNames from 'classnames';

import styles from './TaskFilter.module.scss';

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <div className={classNames(styles.TaskFilter)}>
      <Select
        value={filter.completed}
        onChange={selectedItem => setFilter({ ...filter, completed: selectedItem })}
        defaultOption="All"
        options={[
          {
            name: 'All',
            value: 'all',
          },
          {
            name: 'Done',
            value: 'true',
          },
          {
            name: 'Undone',
            value: 'false',
          },
        ]}
      />
      <Select
        value={filter.sort}
        onChange={selectedItem => setFilter({ ...filter, sort: selectedItem })}
        defaultOption={filter.sort}
        options={[
          {
            name: 'New',
            value: 'asc',
          },
          {
            name: 'Old',
            value: 'desc',
          },
        ]}
      />
    </div>
  );
};

export default TaskFilter;
