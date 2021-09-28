import React, { FC } from 'react';
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
  console.log(book.image);

  return (
    <Li key={book.id}>
      <img src={book.image} alt={book.title} />
    </Li>
  );
};

export default Book;
