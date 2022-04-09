import React, { useContext, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import NKJV from '../../config/nkjv.json';
import { GlobalContext } from '../../context';

const Books = () => {
  const { handleSetChapterList } = useContext(GlobalContext);
  const [bookName, setBookName] = useState(NKJV.books[0].name);
  const handleSetBookName = (name) => [setBookName(name)];
  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title={bookName}>
        {NKJV.books.map((data, idx) => (
          <Dropdown.Item
            key={idx}
            onClick={() => {
              handleSetBookName(data.name);
              handleSetChapterList(data);
            }}
          >
            {data.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
};

export default Books;
