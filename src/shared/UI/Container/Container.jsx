import classNames from 'classnames';

import styles from './Container.module.scss';

const Container = ({ children }) => {
  return <div className={classNames(styles.Container)}>{children}</div>;
};

export default Container;
