import React, { useContext, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { GlobalContext } from '../../context';

const ChapterList = () => {
  const { chapterList, handleSetChapter } = useContext(GlobalContext);
  const [chapterNumber, setChapterNumber] = useState(1);

  const handleSetChapterNumber = (num) => {
    setChapterNumber(num);
  };

  return (
    <div className="mx-2">
      <div>
        <DropdownButton id="dropdown-basic-button" title={chapterNumber}>
          {chapterList.chapters.map((data, idx) => (
            <Dropdown.Item
              key={idx}
              onClick={() => {
                handleSetChapter(data);
                handleSetChapterNumber(idx + 1);
              }}
            >
              {idx + 1}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    </div>
  );
};

export default ChapterList;
