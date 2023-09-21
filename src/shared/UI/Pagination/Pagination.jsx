import classNames from 'classnames';

import Button from 'shared/UI/Button/Button';

import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, pagesArray, setPages }) => {
  const pageHandler = item => {
    setPages(item);
  };

  return (
    <div className={classNames(styles.Pagination)}>
      {pagesArray.map((item, index) => {
        return (
          <Button
            key={index}
            id={item}
            actionHandler={() => pageHandler(item)}
            active={index + 1 === currentPage}
          >
            {item}
          </Button>
        );
      })}
    </div>
  );
};

export default Pagination;
