import React, { useContext } from 'react';
import { GlobalContext } from '../../context';

const Chapter = () => {
  const { chapter } = useContext(GlobalContext);

  return (
    <div>
      {chapter.verses.map((data, idx) => (
        <p key={idx}>
          {idx + 1}) {data.text}
        </p>
      ))}
    </div>
  );
};

export default Chapter;
