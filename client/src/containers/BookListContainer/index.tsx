import { GET_BOOKS } from 'graphql/book';
import { fetcher, QueryKeys } from 'queryClient';
import React, { useEffect, useRef, useState } from 'react';
import Book from 'components/Book';
import { Ul } from './styles';
import MyCount from 'components/MyCount';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import Message from 'components/Message';

interface Books {
  id: string;
  title: string;
  author: string;
  image: string;
  sentences?: Array<{ id: string; bookId: string; text: string }>;
}
export default function BookListContainer() {
  const [books, setBooks] = useState<Books[]>([]);
  const fetchMoreEl = useRef<HTMLDivElement | null>(null);
  const intersecting = useInfiniteScroll(fetchMoreEl);
  const [hasNext, setHasNext] = useState(true);

  const getServerSideData = async () => {
    const { books: sBooks } = await fetcher(GET_BOOKS, {
      cursor: books[books.length - 1]?.id
    });
    if (sBooks.length === 0) {
      setHasNext(false);
      return;
    }
    setBooks(old => [...old, ...sBooks]);
  };

  useEffect(() => {
    if (intersecting && hasNext) getServerSideData();
  }, [intersecting, hasNext]);

  return (
    <>
      <MyCount count={books.length} title='나의 책장' />
      {books.length > 0 ? (
        <Ul>
          {books.map(book => (
            <Book key={book.id} book={book} />
          ))}
        </Ul>
      ) : (
        <Message text='나만의 첫 책을 등록해보세요.' />
      )}

      <div ref={fetchMoreEl}></div>
    </>
  );
}
