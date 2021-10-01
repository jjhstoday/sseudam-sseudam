import { GET_BOOKS } from 'graphql/book';
import { fetcher } from 'queryClient';
import React, { useEffect, useState } from 'react';
import Book from 'components/Book';
import { Ul } from './styles';
import MyCount from 'components/MyCount';

interface Books {
  id: string;
  title: string;
  author: string;
  image: string;
  sentences?: Array<{ id: string; bookId: string; text: string }>;
}
export default function BookListContainer() {
  const [books, setBooks] = useState<Books[]>([]);

  const getServerSideData = async () => {
    const { books: sBooks } = await fetcher(GET_BOOKS);
    setBooks(sBooks);
  };

  useEffect(() => {
    getServerSideData();
  }, []);

  if (!books.length) return null;

  return (
    <>
      <MyCount count={books.length} title='나의 책장' />
      <Ul>
        {books.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </Ul>
    </>
  );
}
