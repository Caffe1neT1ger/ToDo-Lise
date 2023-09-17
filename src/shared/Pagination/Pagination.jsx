import { useMemo } from 'react';
import Button from '../Button/Button';
import classNames from 'classnames';
import styles from './Pagination.module.scss';

// Тут тоже
function Pagination({ currentPage, totalPages, setPages }) {
  const pageHandler = item => {
    setPages(item);
  };

  // shared слой не должен иметь внутри себя бизнес логику
  const pagesArray = useMemo(() => {
    const arr = [];
    for (let i = 0; i < totalPages; i++) {
      arr.push(i + 1);
    }
    return arr;
  }, [totalPages]);
  return (
    <div className={classNames(styles.Pagination)}>
      {pagesArray.map((item, index) => {
        return (
          <Button
            key={index}
            id={item}
            actionHandler={event => pageHandler(item)}
            active={index + 1 == currentPage}
          >
            {item}
          </Button>
        );
      })}
    </div>
  );
}

export default Pagination;
