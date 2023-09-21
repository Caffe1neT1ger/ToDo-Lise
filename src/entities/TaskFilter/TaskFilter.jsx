import classNames from 'classnames';

import Select from 'shared/UI/Select/Select';
import { filterOptions, sortOptions } from 'shared/const/selectOptions';

import styles from './TaskFilter.module.scss';

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <div className={classNames(styles.TaskFilter)}>
      <Select
        value={filter.completed}
        onChange={selectedItem => setFilter({ ...filter, completed: selectedItem })}
        defaultOption="All"
        options={filterOptions}
      />
      <Select
        value={filter.sort}
        onChange={selectedItem => setFilter({ ...filter, sort: selectedItem })}
        defaultOption={filter.sort}
        options={sortOptions}
      />
    </div>
  );
};

export default TaskFilter;
