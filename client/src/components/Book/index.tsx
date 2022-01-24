import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Li } from './styles';

export interface BookProps {
  book: {
    id: string;
    title: string;
    author: string;
    image: string;
    sentences?: Array<{ id: string; bookId: string; text: string }>;
  };
}
const Book: FC<BookProps> = ({ book }) => {
  const trimTitle = (title: string) => {
    const trimedTitle = title.replace(/\s+/g, '');
    return trimedTitle;
  };

  return (
    <Li>
      <Link
        to={{
          pathname: `/book/${trimTitle(book.title)}`,
          state: {
            id: '',
            bookId: book.id,
            text: '',
            title: book.title.trim(),
            trimedBookId: trimTitle(book.title),
          },
        }}
      >
        <img src={book.image} alt={book.title} />
      </Link>
    </Li>
  );
};

export default Book;
