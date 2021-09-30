import React, { FC } from 'react';
import { OffRadioIcon, OnRadioIcon } from './styles';

interface Props {
  id: string;
  title: string;
  author: string;
  image: string;
  isChecked: boolean;
  onClick: (id: string) => void;
}

const SearchedBook: FC<Props> = ({
  id,
  title,
  author,
  image,
  isChecked,
  onClick
}) => {
  if (!id || !title || !author || !image) return null;

  return (
    <li key={id} id={id} onClick={() => onClick(id)}>
      <img src={image} alt={title} />
      <div>
        <span>책 제목</span>
        <p>{title}</p>
        <span>지은이</span>
        <p>{author}</p>
      </div>
      {isChecked ? <OnRadioIcon /> : <OffRadioIcon />}
    </li>
  );
};

export default SearchedBook;
