import { createContext, useState } from 'react';
import NKJV from '../config/nkjv.json';
export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [chapterList, setChapterList] = useState(NKJV.books[0]);
  const [chapter, setChapter] = useState(NKJV.books[0].chapters[0]);

  const handleSetChapterList = (data) => {
    setChapterList(data);
  };

  const handleSetChapter = (data) => {
    setChapter(data);
  };

  return (
    <GlobalContext.Provider
      value={{ chapterList, chapter, handleSetChapterList, handleSetChapter }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
