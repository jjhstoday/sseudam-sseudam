import { GET_BOOKS } from 'graphql/book';
import { fetcher } from 'queryClient';
import React, { useEffect, useState } from 'react';
import Book from 'components/Book';
import { Ul } from './styles';
import MyBookCount from 'components/MyBookCount';

export default function BookListContainer() {
  const [books, setBooks] = useState([]);

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
      <MyBookCount count={books.length} />
      <Ul>
        {books.map(book => (
          <Book book={book} />
        ))}
      </Ul>
    </>
  );
}
