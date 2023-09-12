import { useMemo } from 'react';
import Button from '../Button/Button';

function Pagination({ currentPage, totalPages, setPages }) {
  const pageHandler = item => {
    setPages(item);
  };
  const pagesArray = useMemo(() => {
    const arr = [];
    for (let i = 0; i < totalPages; i++) {
      arr.push(i + 1);
    }
    return arr;
  }, [totalPages]);
  return (
    <div>
      {pagesArray.map((item, index) => {
        return (
          <Button key={index} id={item} actionHandler={event => pageHandler(item)}>
            {item}
          </Button>
        );
      })}
    </div>
  );
}

export default Pagination;
