import SearchedBook from 'components/SearchedBook';
import React, { FC } from 'react';
import { Ul } from './styles';

interface Props {
  searchedBook: Array<{
    author: string;
    image: string;
    isbn: string;
    title: string;
    description?: string;
    discount?: string;
    link?: string;
    price?: string;
    pubdate?: string;
    publisher?: string;
  }>;
}

const SearchedBookList: FC<Props> = ({ searchedBook }) => {
  return (
    <Ul>
      {searchedBook.map(({ isbn, title, author, image }) => (
        <SearchedBook
          key={isbn}
          id={isbn}
          title={title}
          author={author}
          image={image}
        />
      ))}
    </Ul>
  );
};

export default SearchedBookList;
