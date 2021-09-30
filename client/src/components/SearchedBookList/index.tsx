import SearchedBook from 'components/SearchedBook';
import React, { Dispatch, FC, SetStateAction } from 'react';
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
}

const SearchedBookList: FC<Props> = ({ searchedBook, onClick }) => {
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
