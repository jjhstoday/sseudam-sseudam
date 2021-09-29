import React, { FC, MouseEventHandler, useState } from 'react';
import { OffRadioIcon, OnRadioIcon } from './styles';

interface Props {
  id: string;
  title: string;
  author: string;
  image: string;
}

const trimedTitle = (title: string) => {
  let newTitle = '';
  let copyTitle = title.split('');
  let isTitle = true;
  let isLparen = false;

  for (let i = 0; i < copyTitle.length; i++) {
    if (copyTitle[i] === '<') isTitle = false;
    if (copyTitle[i] === '(') isLparen = true;
    if (isTitle && !isLparen) newTitle += copyTitle[i];
    if (copyTitle[i] === '>') isTitle = true;
    if (copyTitle[i] === ')') isLparen = false;
  }
  return newTitle;
};

const SearchedBook: FC<Props> = ({ id, title, author, image }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [checkedBook, setCheckedBook] = useState({});

  const onClick: MouseEventHandler<HTMLElement> = e => {
    setIsChecked(!isChecked);
  };

  return (
    <li key={id} id={id} onClick={e => onClick(e)}>
      <img src={image} alt={trimedTitle(title)} />
      <div>
        <span>책 제목</span>
        <p>{trimedTitle(title)}</p>
        <span>지은이</span>
        <p>{author}</p>
      </div>
      {isChecked ? <OnRadioIcon /> : <OffRadioIcon />}
    </li>
  );
};

export default SearchedBook;
