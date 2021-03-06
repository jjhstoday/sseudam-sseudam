import React, { FC } from 'react';

import { Loading, Message, SearchedBook } from 'components';
import { Ul } from './styles';

interface Props {
  searchedBook: Array<{
    id: string;
    title: string;
    author: string;
    image: string;
    isChecked: boolean;
  }>;
  onClick: (id: string) => void;
  isFail: boolean;
  loading: boolean;
}

const SearchedBookList: FC<Props> = ({ searchedBook, onClick, isFail, loading }) => {
  if (!loading) return <Loading />;
  if (isFail) return <Message text='검색한 책이 존재하지 않습니다...' />;
  return (
    <Ul>
      {searchedBook.map(({ id, title, author, image, isChecked }) => (
        <SearchedBook
          key={id}
          id={id}
          title={title}
          author={author}
          image={image}
          isChecked={isChecked}
          onClick={onClick}
        />
      ))}
    </Ul>
  );
};

export default SearchedBookList;
