import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Li } from './styles';

export interface BookProps {
  book: {
    title: string;
    id: string;
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
    <Li key={book.id}>
      <Link
        to={{
          pathname: `/book/${trimTitle(book.title)}`,
          state: {
            id: book.id,
            title: book.title.trim(),
            sentences: book.sentences
          }
        }}
      >
        <img src={book.image} alt={book.title} />
      </Link>
    </Li>
  );
};

export default Book;
